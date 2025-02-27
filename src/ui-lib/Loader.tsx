import loadIcon from "../assets/refresh.png";

export function Loader() {
  return (
    <div className="grid place-items-center h-[100%]">
      <img
        src={loadIcon}
        className="animate-spin"
        alt="load icon"
        width={50}
        height={50}
      />
    </div>
  );
}
