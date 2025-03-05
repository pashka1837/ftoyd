import { ReadyState } from "react-use-websocket";

export enum MatchStatuses {
  Scheduled = "Scheduled",
  Ongoing = "Ongoing",
  Finished = "Finished",
}

export const bgColors = {
  [MatchStatuses.Scheduled]: "bg-orange-main",
  [MatchStatuses.Ongoing]: "bg-green-main",
  [MatchStatuses.Finished]: "bg-red-main",
};

export const showStatuses = {
  All: "Все статусы",
  [MatchStatuses.Ongoing]: "Live",
  [MatchStatuses.Finished]: MatchStatuses.Finished,
  [MatchStatuses.Scheduled]: "Match preparing",
};

export const connectionStatus = {
  [ReadyState.CONNECTING]: "Connecting",
  [ReadyState.OPEN]: "Open",
  [ReadyState.CLOSING]: "Closing",
  [ReadyState.CLOSED]: "Closed",
  [ReadyState.UNINSTANTIATED]: "Uninstantiated",
};
