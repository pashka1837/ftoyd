import { MatchType } from "../../types";
import { ErrorHandler } from "./ErrorHandler";
import { UpdateBtn } from "./UpdateBtn";

type MatchLoaderProps = {
  setMatches: React.Dispatch<React.SetStateAction<MatchType[]>>;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  errorMsg: string;
  loading: boolean;
};

export function MatchLoader({
  setMatches,
  setErrorMsg,
  setLoading,
  errorMsg,
  loading,
}: MatchLoaderProps) {
  return (
    <div className="flex justify-between select-none">
      <p
        className="text-[24px] sm:text-[28px] lg:text-[32px] italic font-normal"
        style={{ fontFamily: "Tactic Sans" }}
      >
        Match Tracker
      </p>
      <div className="flex gap-[12px]">
        <ErrorHandler errorMsg={errorMsg} />
        <UpdateBtn
          setMatches={setMatches}
          setErrorMsg={setErrorMsg}
          setLoading={setLoading}
          loading={loading}
        />
      </div>
    </div>
  );
}
