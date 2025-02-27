import loadIcon from "../../assets/refresh.png";

export function UpdateBtn() {
  return (
    <button
      className="bg-red-main hover:bg-red-hvr disabled:bg-red-dsbl 
    rounded-[4px] p-[16px] font-medium text-[18px] 
    flex gap-[10px] justify-center w-[204px] h-[56px]"
    >
      Обновить
      <img className="animate-spin" src={loadIcon} alt="load icon" />
    </button>
  );
}
