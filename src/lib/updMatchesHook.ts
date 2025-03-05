import useWebSocket from "react-use-websocket";
import { MatchType } from "../types";
import { useEffect } from "react";
import { connectionStatus } from "../constants";

const wsUrl = import.meta.env.VITE_WS_URL;

export function useUpdateMatches(
  setMatches: React.Dispatch<React.SetStateAction<MatchType[]>>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>,
  loading: boolean
) {
  const { lastMessage, readyState } = useWebSocket(wsUrl, {
    filter(msg) {
      const { type } = JSON.parse(msg.data);
      return type === "update_matches";
    },
    onError() {
      setErrorMsg("Ошибка: не удалось загрузить информацию");
    },
    retryOnError: true,
    reconnectAttempts: 5,
    reconnectInterval: 3000,
  });

  useEffect(() => {
    const wsStatus = connectionStatus[readyState];
    if (!lastMessage || wsStatus !== "Open" || loading) {
      return;
    }
    const { data } = JSON.parse(lastMessage.data);

    setMatches(data);
  }, [lastMessage, readyState, loading, setMatches]);
}
