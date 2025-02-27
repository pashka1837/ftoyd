import { useEffect, useState } from "react";
import { MatchLoader } from "./MatchLoader/MatchLoader";
import { MatchType } from "../types";
import { loadData } from "../lib/getMathces";

export function Home() {
  const [matches, setMatches] = useState<MatchType[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData(setMatches, setErrorMsg, setLoading);
  }, []);

  console.log(matches, errorMsg);
  return (
    <div className="w-[100%] h-[100%] text-white-main p-4 sm:p-6 lg:p-10.5">
      <MatchLoader
        setMatches={setMatches}
        setErrorMsg={setErrorMsg}
        setLoading={setLoading}
        loading={loading}
        errorMsg={errorMsg}
      />
    </div>
  );
}
