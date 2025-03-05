import { bgColors, MatchStatuses, showStatuses } from "../../constants";

type MatchStatProps = {
  homeScore: number;
  awayScore: number;
  status: MatchStatuses;
  timeStamp: string;
};
export function MatchStat({
  homeScore,
  awayScore,
  status,
  timeStamp,
}: MatchStatProps) {
  return (
    <div className="flex flex-col gap-[4px] items-center font-semibold ">
      <p
        className="text-[14px] md:text-[18px] lg:text-[20px] animate-bounce"
        key={homeScore + awayScore + timeStamp}
      >
        {homeScore} : {awayScore}
      </p>
      <div
        className={`${bgColors[status]} min-w-[70px] md:min-w-[92px] w-[100%] 
        rounded-[4px] px-[6px] py-[2px] text-[12px] text-center`}
      >
        {showStatuses[status]}
      </div>
    </div>
  );
}
