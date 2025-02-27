import { ErrorHandler } from "./ErrorHandler";
import { UpdateBtn } from "./UpdateBtn";

export function MatchLoader() {
  return (
    <div className="flex justify-between">
      <p
        className="text-[24px] sm:text-[28px] lg:text-[32px] italic"
        style={{ fontFamily: "Tactic Sans" }}
      >
        Match Tracker
      </p>
      <div className="flex gap-[12px]">
        <ErrorHandler />
        <UpdateBtn />
      </div>
    </div>
  );
}
