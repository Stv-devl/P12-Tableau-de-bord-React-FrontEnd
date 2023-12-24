import axios from "axios";
import { mockedData } from "../data/mockDatas";

//we work with mock on true
const useMock = false;
const baseUrl = "http://localhost:3000/user";

export const getDatas = async (item, endUrl, profilId) => {
  try {
    if (!useMock) {
      const res = await axios.get(
        `${baseUrl}/${profilId ? profilId : 12}/${endUrl}`
      );
      const datas = res.data.data;
      return [datas];
    } else {
      return mockedData[item].map((item) => item.data);
    }
  } catch (error) {
    console.error(`Erreur with ${item} data`, error);
    throw error;
  }
};
export default getDatas;
