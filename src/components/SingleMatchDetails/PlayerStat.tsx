import { PlayerType } from "../../types";
import avatarImg from "../../assets/avatar-global.png";

type PlayerStatProps = PlayerType & {};

export function PlayerStat({ username, kills }: PlayerStatProps) {
  return (
    <div
      className="flex flex-col gap-[4px] 2xl:gap-[8px]
      md:flex-row  md:items-center md:justify-between 
      lg:flex-col  2xl:flex-row 
    pt-[7px] pr-[12px] pb-[7px] pl-[12px]
    2xl:pr-[24px]  2xl:pl-[24px]

     bg-bg-teamDetails rounded-[4px]"
    >
      <div className="flex gap-[8px] justify-center items-center">
        <img src={avatarImg} alt="avatar icon" />
        <p className="font-semibold text-[14px] lg:text-[16px] break-all">
          {username}
        </p>
      </div>
      <div className="flex gap-[8px] justify-center items-center">
        <p className="font-medium text-[12px] lg:text-[14px] text-text-teamDetails">
          Убийств:
        </p>
        <p className="font-semibold text-[14px] lg:text-[16px] text-[#F2F6F6]">
          +{kills}
        </p>
      </div>
    </div>
  );
}
