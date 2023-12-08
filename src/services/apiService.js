import axios from "axios";
import { mockedData } from "../mock/mockDatas";

const useMock = true;
const baseUrl = "http://localhost:3000/user";

export const getDatas = async (item, endUrl, profilId) => {
  try {
    if (useMock) {
      return mockedData[item].map((item) => item.data);
    } else {
      const res = await axios.get(`${baseUrl}/${profilId}/${endUrl}`);
      const datas = res.data.data;
      return [datas];
    }
  } catch (error) {
    console.error(`Erreur with ${item} data", error`);
    throw error;
  }
};
export default getDatas;
