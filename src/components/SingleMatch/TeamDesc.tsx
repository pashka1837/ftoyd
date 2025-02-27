import teamIcon from "../../assets/team-icon.png";

type TeamDescProps = {
  name: string;
};
export function TeamDesc({ name }: TeamDescProps) {
  return (
    <div className="flex gap-[14px] items-center">
      <img src={teamIcon} alt="team icon" />
      <p className="text-[16px] font-semibold text-balance">{name}</p>
    </div>
  );
}
