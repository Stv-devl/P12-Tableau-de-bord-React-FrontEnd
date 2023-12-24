import { useState, useEffect } from "react";
import { getDatas } from "../services/apiService";

const useManageApi = (profilId) => {
  const [datas, setDatas] = useState({
    user: {},
    activity: {},
    performance: {},
    session: {},
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setDatas((prevDatas) => ({ ...prevDatas, loading: true, error: null }));
      try {
        const user = await getDatas("user", profilId);
        const activity = await getDatas("activity", profilId);
        const performance = await getDatas("performance", profilId);
        const session = await getDatas("session", profilId);

        setDatas({
          user,
          activity,
          performance,
          session,
          loading: false,
          error: null,
        });
      } catch (err) {
        setDatas((prevDatas) => ({ ...prevDatas, loading: false, error: err }));
      }
    };

    fetchData();
  }, [profilId]);

  return { datas };
};

export default useManageApi;
