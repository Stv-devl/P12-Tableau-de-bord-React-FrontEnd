import axios from "axios";
import { mockedData } from "../mock/mockDatas";

let id = 12;
const useMock = false;
const baseUrl = "http://localhost:3000/user";

export const getDatas = async (item, endUrl) => {
  try {
    if (useMock) {
      const data = mockedData[item].filter(
        (item) => item.data.userId || item.data.id === id
      );
      return data[0];
    } else {
      const res = await axios.get(`${baseUrl}/${id}/${endUrl}`);
      return res.data;
    }
  } catch (error) {
    console.error(`Erreur with ${item} data", error`);
    throw error;
  }
};

export default getDatas;
