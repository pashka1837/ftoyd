import { useState } from "react";
import arrowDown from "../../assets/arrow-down2.svg";
import { MatchStatuses, showStatuses } from "../../constants";
import { FilterType } from "../../types";

type FilterProps = {
  setFilter: React.Dispatch<React.SetStateAction<MatchStatuses | "All">>;
  filter: MatchStatuses | "All";
};

export function Filter({ setFilter, filter }: FilterProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative text-text-second ">
      <DropDownBtn open={open} setOpen={setOpen} filter={filter} />
      {open && (
        <DropDownMenu setFilter={setFilter} filter={filter} setOpen={setOpen} />
      )}
    </div>
  );
}

type DropDownBtnProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filter: MatchStatuses | "All";
};

function DropDownBtn({ open, setOpen, filter }: DropDownBtnProps) {
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

type DropDownMenuProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: React.Dispatch<React.SetStateAction<MatchStatuses | "All">>;
  filter: MatchStatuses | "All";
};

function DropDownMenu({ setOpen, filter, setFilter }: DropDownMenuProps) {
  return (
    <div
      className="absolute left-0 right-0 mt-[8px]
                    bg-dropItm-def  rounded-[4px]
                     pt-[6px] pb-[6px]"
    >
      {Object.entries(showStatuses).map(([key, val]) => (
        <DropDownItem
          name={val}
          setOpen={setOpen}
          key={val}
          value={key}
          setFilter={setFilter}
          filter={filter}
        />
      ))}
    </div>
  );
}

type DropDownItemProps = {
  name: string;
  value: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: React.Dispatch<React.SetStateAction<MatchStatuses | "All">>;
  filter: MatchStatuses | "All";
};
function DropDownItem({
  name,
  value,
  setOpen,
  setFilter,
  filter,
}: DropDownItemProps) {
  function handleClick() {
    setOpen(false);
    if (filter !== value) setFilter(value as FilterType);
  }
  return (
    <button
      className="pt-[8px] pb-[8px] pl-[12px] pr-[12px]
  bg-dropItm-def hover:bg-dropItm-hvr active:bg-dropItm-actv
  active:text-white-main hover:text-white-main disabled:text-text-dsbl
  w-[100%] h-[48px] text-left"
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
