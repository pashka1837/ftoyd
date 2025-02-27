import { MatchType } from "../../types";
import { MatchStat } from "./MatchStat";
import { TeamDesc } from "./TeamDesc";

type SingleMatchProps = {
  match: MatchType;
};

export function SingleMatch({ match }: SingleMatchProps) {
  return (
    <div
      className="flex gap-[15px] sm:gap-0 justify-between rounded-[4px] 
    p-[16px]  bg-bg-card select-none"
    >
      <TeamDesc name={match.homeTeam.name} />
      <MatchStat
        awayScore={match.awayScore}
        homeScore={match.homeScore}
        status={match.status}
      />
      <TeamDesc name={match.awayTeam.name} />
    </div>
  );
}
