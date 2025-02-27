import { MatchType } from "../types";

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getMatches() {
  try {
    const res = await fetch(`${baseUrl}/fronttemp`);
    if (!res.ok) throw Error("Ошибка: не удалось загрузить информацию");
    const { data } = await res.json();
    return data.matches as MatchType[];
  } catch (error: any) {
    throw Error(error?.message || "Что-то пошло не так, попробуйте еще раз");
  }
}

export async function loadData(
  setMatches: React.Dispatch<React.SetStateAction<MatchType[]>>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setLoading(true);
  setErrorMsg("");
  try {
    const data = await getMatches();
    setMatches(data);
  } catch (error: any) {
    setErrorMsg(error.message);
    setMatches([]);
  }
  setLoading(false);
}
