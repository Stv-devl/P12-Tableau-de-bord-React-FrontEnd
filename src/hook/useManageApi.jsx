import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getDatas from "../services/apiService";
import filterWithId from "../utils/filterWithId";

const useManageApi = () => {
  const { id } = useParams();
  const [profilId, setProfilId] = useState(12);
  const [unfilteredUser, setfilteredUser] = useState({});
  const [datas, setDatas] = useState({
    user: {},
    activity: {},
    performance: {},
    session: {},
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      setProfilId(parseInt(id, 10));
    }
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [userRes, inverseRes, activityRes, scoreRes, sessionsRes] =
          await Promise.all([
            getDatas("user", "", profilId),
            //get the other user for use in Home.jsx (if mock=false)
            getDatas("user", "", profilId === 18 ? 12 : 18),
            getDatas("activity", "activity", profilId),
            getDatas("performance", "performance", profilId),
            getDatas("session", "average-sessions", profilId),
          ]);

        //if mock=true unfilteredData = userRes else put the other user in the array
        const unfilteredData = {
          user: inverseRes.length <= 1 ? userRes.concat(inverseRes) : userRes,
        };
        //filter data with Id in the util function
        const filteredData = {
          user: filterWithId(userRes, profilId),
          activity: filterWithId(activityRes, profilId),
          performance: filterWithId(scoreRes, profilId),
          session: filterWithId(sessionsRes, profilId),
        };

        setDatas(filteredData);
        setfilteredUser(unfilteredData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    //useEffect at launch and id change
  }, [profilId]);

  return { datas, unfilteredUser, loading, error };
};

export default useManageApi;
