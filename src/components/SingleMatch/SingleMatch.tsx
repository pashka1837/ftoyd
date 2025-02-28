import { useState } from "react";
import { MatchType } from "../../types";
import { MatchStat } from "./MatchStat";
import { TeamDesc } from "./TeamDesc";
import { DropDownBtn } from "./DropDownBtn";

type SingleMatchProps = {
  match: MatchType;
};

export function SingleMatch({ match }: SingleMatchProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex flex-col md:flex-row justify-between 
      gap-x-[10px] items-center bg-bg-card rounded-[4px] p-[16px]"
    >
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
      <DropDownBtn setOpen={setOpen} open={open} />
    </div>
  );
}
