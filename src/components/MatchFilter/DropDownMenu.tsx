import { MatchStatuses, showStatuses } from "../../constants";
import { DropDownItem } from "./DropDownItem";

type DropDownMenuProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: React.Dispatch<React.SetStateAction<MatchStatuses | "All">>;
  filter: MatchStatuses | "All";
  ref: React.RefObject<HTMLDivElement | null>;
};

export function DropDownMenu({
  setOpen,
  filter,
  setFilter,
  ref,
}: DropDownMenuProps) {
  return (
    <div
      ref={ref}
      className="absolute left-0 right-0 mt-[8px]
                    bg-dropItm-def  rounded-[4px]
                     pt-[6px] pb-[6px]
                     animate-slide shadow-dropMenu"
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
