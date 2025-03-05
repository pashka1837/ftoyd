import { TeamType } from "../../types";
import { TeamDetails } from "./TeamDetails";

type SingleMatchDetailsProps = {
  homeTeam: TeamType;
  awayTeam: TeamType;
};

export default function SingleMatchDetails({
  homeTeam,
  awayTeam,
}: SingleMatchDetailsProps) {
  return (
    <div
      className="flex flex-col lg:flex-row gap-y-[8px] lg:gap-x-[32px]
      md:p-[12px] w-[100%]"
    >
      <TeamDetails {...homeTeam} />
      <Divider />
      <TeamDetails {...awayTeam} />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex gap-[10px] lg:hidden">
      <div className="w-[100%] flex items-center">
        <hr className="border-[#13181F] w-[100%]" />
      </div>
      <p className="font-semibold text-[14px] text-[#313A47]">VS</p>
      <div className="w-[100%] flex items-center">
        <hr className="border-[#13181F] w-[100%]" />
      </div>
    </div>
  );
}
