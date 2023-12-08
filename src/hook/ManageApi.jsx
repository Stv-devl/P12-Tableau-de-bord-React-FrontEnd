import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDatas } from "../services/apiService";
import filterWithId from "../utils/filterWithId";

const ManageApi = () => {
  const { id } = useParams();
  const [profilId, setProfilId] = useState(12);
  const [unfilteredUser, setfilteredUser] = useState({});
  const [datas, setDatas] = useState({
    user: {},
    activity: {},
    performance: {},
    session: {},
  });

  useEffect(() => {
    setProfilId(parseInt(id, 10));
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, activityRes, scoreRes, sessionsRes] = await Promise.all(
          [
            //item, endUrl, id
            getDatas("user", "", profilId),
            getDatas("activity", "activity", profilId),
            getDatas("performance", "performance", profilId),
            getDatas("session", "average-sessions", profilId),
          ]
        );

        const unfilteredData = {
          user: userRes,
        };

        const filteredData = {
          user: filterWithId(userRes, profilId),
          activity: filterWithId(activityRes, profilId),
          performance: filterWithId(scoreRes, profilId),
          session: filterWithId(sessionsRes, profilId),
        };
        setDatas(filteredData);
        setfilteredUser(unfilteredData);
      } catch (error) {
        console.error("Erreur", error);
      }
    };
    fetchData();
  }, [profilId]);

  return { datas, unfilteredUser };
};

export default ManageApi;
