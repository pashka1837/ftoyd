import { bgColors, MatchStatuses, showStatuses } from "../../constants";

type MatchStatProps = {
  homeScore: number;
  awayScore: number;
  status: MatchStatuses;
};
export function MatchStat({ homeScore, awayScore, status }: MatchStatProps) {
  return (
    <div className="flex flex-col gap-[4px] items-center font-semibold ">
      <p className="text-[14px] md:text-[18px] lg:text-[20px]">
        {homeScore} : {awayScore}
      </p>
      <div
        className={`${bgColors[status]} w-[100%] rounded-[4px] px-[6px] py-[2px] text-[12px] text-center`}
      >
        {showStatuses[status]}
      </div>
    </div>
  );
}
