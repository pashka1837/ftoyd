import errorIcon from "../../assets/alert-triangle.png";

export function ErrorHandler() {
  return (
    <div
      className="h-[56px] rounded-[4px] p-[16px]  
  flex gap-[10px] justify-center w-[480px]
  bg-bg-card font-medium"
    >
      <img src={errorIcon} alt="error icon" />
      <p className="font-medium text-[18px]">
        Ошибка: не удалось загрузить информацию
      </p>
    </div>
  );
}
