import { lazy, Suspense, useState } from "react";
import { MatchType } from "../../types";
import { DropDownBtn } from "./DropDownBtn";
import { MatchInfo } from "./MatchInfo";
import { Loader } from "../../ui-lib/Loader";
import { useMediaQuery } from "@uidotdev/usehooks";

const SingleMatchDetails = lazy(
  () => import("../SingleMatchDetails/SingleMatchDetails")
);

type SingleMatchProps = {
  match: MatchType;
};

export function SingleMatch({ match }: SingleMatchProps) {
  const [open, setOpen] = useState(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px)");
  return (
    <div
      className="flex flex-col bg-bg-card rounded-[4px] p-[8px] md:p-[16px] 
    gap-[16px] md:gap-[32px] items-center"
    >
      <div
        className="flex flex-col md:flex-row justify-between 
      gap-x-[10px] items-center w-[100%]"
      >
        <MatchInfo match={match} />
        {isMediumDevice && <DropDownBtn setOpen={setOpen} open={open} />}
      </div>

      {open && (
        <Suspense fallback={<Loader />}>
          <SingleMatchDetails
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
          />
        </Suspense>
      )}
      {isSmallDevice && <DropDownBtn setOpen={setOpen} open={open} />}
    </div>
  );
}
