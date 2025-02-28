import { MatchType } from "../../types";
import { SingleMatch } from "../SingleMatch/SingleMatch";

type MatchesProps = {
  matches: MatchType[];
};

export default function Matches({ matches }: MatchesProps) {
  return (
    <div className="flex flex-col gap-[12px] h-[100%] overflow-y-auto select-none">
      {matches.map((m) => (
        <SingleMatch match={m} key={m.time + m.title} />
      ))}
    </div>
  );
}
