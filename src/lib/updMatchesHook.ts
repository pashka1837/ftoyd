import useWebSocket from "react-use-websocket";
import { MatchType } from "../types";
import { useEffect, useRef } from "react";
import { connectionStatus } from "../constants";

const wsUrl = import.meta.env.VITE_WS_URL;

export function useUpdateMatches(
  setMatches: React.Dispatch<React.SetStateAction<MatchType[]>>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>,
  loading: boolean
) {
  const didUnmount = useRef(false);

  const { lastMessage, readyState } = useWebSocket(wsUrl, {
    filter(msg) {
      const { type } = JSON.parse(msg.data);
      return type === "update_matches";
    },
    onError() {
      setErrorMsg("Ошибка: не удалось загрузить информацию");
    },
    shouldReconnect() {
      return didUnmount.current === false;
    },
    retryOnError: true,
    reconnectAttempts: 8,
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

  useEffect(() => {
    return () => {
      didUnmount.current = true;
    };
  }, []);
}
