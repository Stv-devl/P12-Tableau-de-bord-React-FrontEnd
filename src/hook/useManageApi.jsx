import { useState, useEffect } from "react";
import getDatas from "../services/apiService";
import getMockedDatas from "../services/getMockedDatas";

/**
 * The componant is use to fetch the datas from an API using userId. If the API call fail, we will fetches the mocked data.
 * @param {string} userId - The Id of the user who will be used for fetch 'data'.
 * @returns {Object}
 * An object containing :
 * - 'data' : the fetched 'data' from API.
 * - 'loading' : It's `true` when we waiting for 'data' and `false` when we get 'data'
 * - 'error' : We get the error that occurred or "null" if have no error.
 */

function useManageApi(userId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        /* await new Promise((resolve) => setTimeout(resolve, 2000));*/
        const resData = await getDatas(userId);
        setData(resData);
      } catch (err) {
        setError(err);
        const mockedData = getMockedDatas(userId);
        setData(mockedData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);
  return { data, loading, error };
}

export default useManageApi;
