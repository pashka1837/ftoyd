import loadIcon from "../../assets/refresh.png";
import { loadData } from "../../lib/getMathces";
import { MatchType } from "../../types";

type UpdateBtnProps = {
  setMatches: React.Dispatch<React.SetStateAction<MatchType[]>>;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

export function UpdateBtn({
  setMatches,
  setErrorMsg,
  setLoading,
  loading,
}: UpdateBtnProps) {
  return (
    <button
      className={`bg-red-main hover:bg-red-hvr disabled:bg-red-dsbl 
    rounded-[4px] p-[16px] font-medium text-[18px] 
    flex gap-[10px] justify-center w-[204px] h-[56px]`}
      disabled={loading}
      onClick={() => loadData(setMatches, setErrorMsg, setLoading)}
    >
      Обновить
      <img
        className={loading ? "animate-spin" : ""}
        src={loadIcon}
        alt="load icon"
      />
    </button>
  );
}
