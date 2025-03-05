import { TeamType } from "../../types";
import { PlayerStat } from "./PlayerStat";
import { TeamStat } from "./TeamStat";

type TeamDetailsProps = Omit<TeamType, "name"> & {};

export function TeamDetails({ players, ...teamStat }: TeamDetailsProps) {
  return (
    <div className="flex flex-col gap-[8px] w-[100%]">
      <div className={`grid grid-cols-${players.length} gap-[8px]`}>
        {players.map((p) => (
          <PlayerStat key={p.username + p.kills} {...p} />
        ))}
      </div>
      <TeamStat {...teamStat} />
    </div>
  );
}
