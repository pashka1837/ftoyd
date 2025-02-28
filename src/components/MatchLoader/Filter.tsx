import { useState } from "react";
import arrowDown from "../../assets/arrow-down2.svg";
import { showStatuses } from "../../constants";

export function Filter() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative text-text-second ">
      <DropDownBtn open={open} setOpen={setOpen} />
      {open && <DropDownMenu setOpen={setOpen} />}
    </div>
  );
}

type DropDownBtnProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function DropDownBtn({ open, setOpen }: DropDownBtnProps) {
  return (
    <button
      className="bg-dropBtn-def hover:bg-dropBtn-hvr  
       active:text-white-main hover:text-white-main disabled:text-text-dsbl
     pt-[10px] pb-[10px] pl-[16px] pr-[20px]
     border-0 active:border active:border-dropBtn-bord  
     rounded-[4px] outline-none cursor-pointer
    flex justify-between  gap-[12px]
    text-[16px] font-medium 
    w-[100%] h-[56px] place-items-center"
      type="button"
      onClick={() => setOpen(!open)}
    >
      Все статусы
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
};

function DropDownMenu({ setOpen }: DropDownMenuProps) {
  return (
    <div
      className="absolute left-0 right-0 mt-[8px]
                    bg-dropItm-def  rounded-[4px]
                     pt-[6px] pb-[6px]"
    >
      {Object.entries(showStatuses).map(([filter, val]) => (
        <DropDownItem name={val} setOpen={setOpen} key={val} filter={filter} />
      ))}
    </div>
  );
}

type DropDownItemProps = {
  name: string;
  filter: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function DropDownItem({ name, filter, setOpen }: DropDownItemProps) {
  return (
    <button
      className="pt-[8px] pb-[8px] pl-[12px] pr-[12px]
  bg-dropItm-def hover:bg-dropItm-hvr active:bg-dropItm-actv
  active:text-white-main hover:text-white-main disabled:text-text-dsbl
  w-[100%] h-[48px] text-left"
      type="button"
      onClick={() => setOpen(false)}
    >
      {name}
    </button>
  );
}
