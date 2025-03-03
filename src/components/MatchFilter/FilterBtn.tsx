import { MatchStatuses, showStatuses } from "../../constants";
import arrowDown from "../../assets/arrow-down2.svg";

type FilterBtnBtnProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filter: MatchStatuses | "All";
};

export function FilterBtn({ open, setOpen, filter }: FilterBtnBtnProps) {
  return (
    <button
      className="bg-dropBtn-def hover:bg-dropBtn-hvr  
         active:text-white-main hover:text-white-main disabled:text-text-dsbl
       pt-[10px] pb-[10px] pl-[16px] pr-[20px]
       border-0 active:border active:border-dropBtn-bord  
       rounded-[4px] outline-none cursor-pointer
      flex justify-between  gap-[12px]
      text-[16px] font-medium 
      min-w-[165px] w-[100%] h-[56px] place-items-center"
      type="button"
      onClick={() => setOpen(!open)}
    >
      {showStatuses[filter]}
      <img
        className={`${open ? "rotate-180" : "rotate-0"}`}
        src={arrowDown}
        alt="arrow icon"
      />
    </button>
  );
}
