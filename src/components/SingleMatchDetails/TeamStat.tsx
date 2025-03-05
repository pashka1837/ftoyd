type TeamStatProps = {
  points: number;
  place: number;
  total_kills: number;
};

export function TeamStat({ points, place, total_kills }: TeamStatProps) {
  return (
    <div
      className="grid grid-cols-3 gap-[4px]
    pt-[14px] pr-[12px] pb-[14px] pl-[12px] bg-bg-teamDetails
    rounded-[4px]"
    >
      <div className="flex gap-[8px] justify-center items-center">
        <p className="font-medium text-[12px] lg:text-[14px] text-text-teamDetails">
          Points:
        </p>
        <p className="font-semibold text-[14px] lg:text-[16px] text-[#F2F6F6]">
          +{points}
        </p>
      </div>
      <div
        className="flex gap-[8px] justify-center  items-center
      border-r border-l border-[#141A21]"
      >
        <p className="font-medium text-[12px] lg:text-[14px] text-text-teamDetails">
          Место:
        </p>
        <p className="font-semibold text-[14px] lg:text-[16px] text-[#F2F6F6]">
          +{place}
        </p>
      </div>
      <div className="flex gap-[8px] justify-center items-center">
        <p className="font-medium text-[12px] lg:text-[14px] text-text-teamDetails">
          Убийств:
        </p>
        <p className="font-semibold text-[14px] lg:text-[16px] text-[#F2F6F6]">
          +{total_kills}
        </p>
      </div>
    </div>
  );
}
