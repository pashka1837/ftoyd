import { MatchType } from "../../types";
import { MatchStat } from "./MatchStat";
import { TeamDesc } from "./TeamDesc";

type MatchInfoProps = {
  match: MatchType;
};

export function MatchInfo({ match }: MatchInfoProps) {
  return (
    <div
      className="flex gap-[15px] sm:gap-0 justify-between  
         w-[100%]"
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
