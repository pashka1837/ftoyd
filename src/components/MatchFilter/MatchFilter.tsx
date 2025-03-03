import { useState } from "react";
import { MatchStatuses } from "../../constants";
import { FilterBtn } from "./FilterBtn";
import { DropDownMenu } from "./DropDownMenu";

type MatchFilterProps = {
  setFilter: React.Dispatch<React.SetStateAction<MatchStatuses | "All">>;
  filter: MatchStatuses | "All";
};

export function MatchFilter({ setFilter, filter }: MatchFilterProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative text-text-second z-10">
      <FilterBtn open={open} setOpen={setOpen} filter={filter} />
      {open && (
        <DropDownMenu setFilter={setFilter} filter={filter} setOpen={setOpen} />
      )}
    </div>
  );
}
