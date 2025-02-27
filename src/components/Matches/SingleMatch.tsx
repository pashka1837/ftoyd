import teamIcon from "../../assets/team-icon.png";
import { MatchStatuses } from "../../constants";
import { MatchType } from "../../types";

type SingleMatchProps = {
  match: MatchType;
};

export function SingleMatch({ match }: SingleMatchProps) {
  return (
    <div
      className="flex justify-between rounded-[4px] 
    p-[16px]  bg-bg-card"
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

type TeamDescProps = {
  name: string;
};
function TeamDesc({ name }: TeamDescProps) {
  return (
    <div className="flex gap-[14px]">
      <img src={teamIcon} alt="team icon" />
      <p className="text-[16px] font-semibold">{name}</p>
    </div>
  );
}

type MatchStatProps = {
  homeScore: number;
  awayScore: number;
  status: MatchStatuses;
};
function MatchStat({ homeScore, awayScore, status }: MatchStatProps) {
  const colors = {
    [MatchStatuses.SCHDL]: "red-main",
    [MatchStatuses.ONGNG]: "green-main",
    [MatchStatuses.FNSHD]: "orange-main",
  };
  return (
    <div className="flex flex-col justify-center font-semibold">
      <p className="text-[20px] font-semibold">
        {homeScore} : {awayScore}
      </p>
      <div
        className={`w-[100%] rounded-[4px] px-[6px] py-[2px]
                         bg-${colors[status]}  text-[12px] `}
      >
        {status}
      </div>
    </div>
  );
}
