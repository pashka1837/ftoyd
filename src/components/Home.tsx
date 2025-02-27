import { MatchLoader } from "./MatchLoader/MatchLoader";

export function Home() {
  return (
    <div className="w-[100%] h-[100%] text-white-main p-4 sm:p-6 lg:p-10.5">
      <MatchLoader />
    </div>
  );
}
