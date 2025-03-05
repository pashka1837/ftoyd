import { memo } from "react";
import arrowIcon from "../../assets/arrow-down.png";

type DropDownBtnProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};
export const DropDownBtn = memo(function DropDownBtn({
  open,
  setOpen,
}: DropDownBtnProps) {
  return (
    <button
      className={`outline-none flex place-items-center ${
        open ? "rotate-180" : "rotate-0"
      } cursor-pointer`}
      onClick={() => setOpen(!open)}
    >
      <img src={arrowIcon} alt="arrow icon" />
    </button>
  );
});
