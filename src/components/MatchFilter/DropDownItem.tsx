import { MatchStatuses } from "../../constants";
import { FilterType } from "../../types";

type DropDownItemProps = {
  name: string;
  value: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: React.Dispatch<React.SetStateAction<MatchStatuses | "All">>;
  filter: MatchStatuses | "All";
};

export function DropDownItem({
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
  w-[100%] h-[48px] text-left cursor-pointer"
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
