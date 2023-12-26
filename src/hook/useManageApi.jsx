import { useState, useEffect } from "react";
import getDatas from "../services/apiService";
import getMockedDatas from "../services/getMockedDatas";

function useManageApi(userId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resData = await getDatas(userId);
        setData(resData);
      } catch (err) {
        setError(err);
        setData(getMockedDatas(userId));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);
  return { data, loading, error };
}

export default useManageApi;
