import errorIcon from "../../assets/alert-triangle.png";
type ErrorHandlerProps = {
  errorMsg: string;
};

export function ErrorHandler({ errorMsg }: ErrorHandlerProps) {
  if (!errorMsg) return null;
  return (
    <div
      className="lg:h-[56px] rounded-[4px] p-[16px]  
  flex gap-[10px] justify-center items-center
  lg:min-w-[480px] bg-bg-card font-medium"
    >
      <img src={errorIcon} alt="error icon" />
      <p className="font-medium text-[18px] text-balance">{errorMsg}</p>
    </div>
  );
}
