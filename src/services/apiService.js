import axios from "axios";
import { mockedData } from "../data/mockDatas";
import filterWithId from "../utils/filterWithId";

//we work with mock on true
const useMock = /*process.env.REACT_APP_USE_MOCK === */ "true";
const baseUrl = "http://localhost:3000/user";

export const getDatas = async (item, profilId) => {
  const endUrl = item === "session" ? "average-sessions" : item;
  const apiUrl = `${baseUrl}/${profilId || 12}/${
    endUrl !== "user" ? endUrl : ""
  }`;
  try {
    if (!useMock) {
      const res = await axios.get(apiUrl).data.data;
      return [res];
    } else {
      const mockDatas = mockedData[item].map((item) => item.data);
      return filterWithId(mockDatas, profilId);
    }
  } catch (error) {
    console.error(`Erreur with ${item} data", error`);
    throw error;
  }
};
export default getDatas;
