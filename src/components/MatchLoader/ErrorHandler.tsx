type ErrorHandlerProps = {
  errorMsg: string;
};

export function ErrorHandler({ errorMsg }: ErrorHandlerProps) {
  if (!errorMsg) return null;
  return (
    <div
      className="h-[56px] rounded-[4px] p-[16px]  
  flex gap-[10px] justify-center lg:w-[480px]
  bg-bg-card font-medium"
    >
      <img src="alert-triangle.png" alt="error icon" />
      <p className="font-medium text-[18px]">{errorMsg}</p>
    </div>
  );
}
