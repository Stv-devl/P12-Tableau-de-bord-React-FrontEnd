import { useEffect } from "react";
import axios from "axios";

const Api = ({ setData }) => {
  useEffect(() => {
    axios
      .get("../logements.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Erreur", error);
      });
  }, [setData]);

  return null;
};

export default Api;
