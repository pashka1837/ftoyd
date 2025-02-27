import { lazy, Suspense, useEffect, useState } from "react";
import { MatchLoader } from "./MatchLoader/MatchLoader";
import { MatchType } from "../types";
import { loadData } from "../lib/getMathces";

const Matches = lazy(() => import("./Matches/Matches"));

export function Home() {
  const [matches, setMatches] = useState<MatchType[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData(setMatches, setErrorMsg, setLoading);
  }, []);

  return (
    <div
      className="w-[100%] h-[100%] text-white-main p-4 sm:p-6 lg:p-10.5 
    flex flex-col gap-[16px]"
    >
      <MatchLoader
        setMatches={setMatches}
        setErrorMsg={setErrorMsg}
        setLoading={setLoading}
        loading={loading}
        errorMsg={errorMsg}
      />
      {!!matches.length && !errorMsg && (
        <Suspense fallback={<h1>loading</h1>}>
          <Matches matches={matches} />
        </Suspense>
      )}
    </div>
  );
}
