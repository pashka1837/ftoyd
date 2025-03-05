import { useState } from "react";
import { MatchStatuses } from "../../constants";
import { FilterBtn } from "./FilterBtn";
import { DropDownMenu } from "./DropDownMenu";
import { useClickAway } from "@uidotdev/usehooks";

type MatchFilterProps = {
  setFilter: React.Dispatch<React.SetStateAction<MatchStatuses | "All">>;
  filter: MatchStatuses | "All";
};

export function MatchFilter({ setFilter, filter }: MatchFilterProps) {
  const [open, setOpen] = useState(false);
  const ref = useClickAway(() =>
    setOpen(false)
  ) as React.RefObject<HTMLDivElement | null>;
  return (
    <div className="relative text-text-second z-10" ref={ref}>
      <FilterBtn open={open} setOpen={setOpen} filter={filter} />
      {open && (
        <DropDownMenu setFilter={setFilter} filter={filter} setOpen={setOpen} />
      )}
    </div>
  );
}
