import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { MatchLoader } from "./MatchLoader/MatchLoader";
import { FilterType, MatchType } from "../types";
import { loadData } from "../lib/getMathces";
import { Loader } from "../ui-lib/Loader";
import { useUpdateMatches } from "../lib/updMatchesHook";

const Matches = lazy(() => import("./Matches/Matches"));

export function Home() {
  const [matches, setMatches] = useState<MatchType[]>([]);
  const [filter, setFilter] = useState<FilterType>("All");

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData(setMatches, setErrorMsg, setLoading);
  }, []);

  useUpdateMatches(setMatches, setErrorMsg, loading);

  const filtMatches = useMemo(() => {
    if (filter === "All") return matches;
    return matches.filter((m) => m.status === filter);
  }, [filter, matches]);

  return (
    <div
      className="w-[100%] h-[100dvh] text-white-main p-4 sm:p-6 lg:p-10.5 
    flex flex-col gap-[16px]"
    >
      <MatchLoader
        setMatches={setMatches}
        setErrorMsg={setErrorMsg}
        setLoading={setLoading}
        loading={loading}
        errorMsg={errorMsg}
        setFilter={setFilter}
        filter={filter}
      />
      {loading && !matches.length && <Loader />}
      {!!matches.length && !errorMsg && (
        <Suspense fallback={<Loader />}>
          <Matches matches={filtMatches} />
        </Suspense>
      )}
    </div>
  );
}
