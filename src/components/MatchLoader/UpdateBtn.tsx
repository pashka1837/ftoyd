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
      className={`bg-red-main active:bg-red-hvr 
        disabled:bg-red-dsbl disabled:text-[#787878] 
    rounded-[4px] p-[16px] text-[18px] font-semibold
    flex gap-[10px] justify-center w-[100%] lg:w-[204px] h-[56px]
    cursor-pointer`}
      disabled={loading}
      type="button"
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
