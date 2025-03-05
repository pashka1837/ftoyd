import { lazy, useState } from "react";
import { MatchType } from "../../types";
import { DropDownBtn } from "./DropDownBtn";
import { MatchInfo } from "./MatchInfo";

const SingleMatchDetails = lazy(
  () => import("../SingleMatchDetails/SingleMatchDetails")
);

type SingleMatchProps = {
  match: MatchType;
};

export function SingleMatch({ match }: SingleMatchProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex flex-col bg-bg-card rounded-[4px] p-[8px] md:p-[16px] 
    gap-[16px] md:gap-[32px]"
    >
      <div
        className="flex flex-col md:flex-row justify-between 
      gap-x-[10px] items-center w-[100%]"
      >
        <MatchInfo match={match} />
        <DropDownBtn setOpen={setOpen} open={open} />
      </div>

      {open && (
        <SingleMatchDetails
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
        />
      )}
    </div>
  );
}
