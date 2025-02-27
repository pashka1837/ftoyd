import { MatchStatuses } from "./constants";

type PlayerType = {
  username: string;
  kills: number;
};

type TeamType = {
  name: string;
  players: PlayerType[];
  points: number;
  place: number;
  total_kills: number;
};

type MatchType = {
  time: string;
  title: string;
  homeTeam: TeamType;
  awayTeam: TeamType;
  homeScore: number;
  awayScore: number;
  status: MatchStatuses;
};
