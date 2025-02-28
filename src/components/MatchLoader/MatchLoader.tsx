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
    <div
      className="select-none flex flex-col md:flex-row 
    md:items-center md:justify-between  gap-[10px] lg:gap-1"
    >
      <p
        className="text-[28px] md:text-[30px] lg:text-[32px] 
        italic font-normal text-center"
        style={{ fontFamily: "Tactic Sans" }}
      >
        Match Tracker
      </p>
      <div
        className="flex gap-x-[10px] gap-y-[12px]  flex-col-reverse 
      lg:flex-row  lg:justify-end
      md:min-w-[475px]"
      >
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
