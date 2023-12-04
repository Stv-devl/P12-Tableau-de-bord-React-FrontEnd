import { useState, useEffect } from "react";
import { getDatas } from "../services/apiService";

const ManageApi = () => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [scoreData, setScoreData] = useState(null);
  const [sessionsData, setSessionsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await getDatas("user", "");
        setUserData(userRes);

        const activityRes = await getDatas("activity", "activity");
        setActivityData(activityRes);

        const scoreRes = await getDatas("performance", "performance");
        setScoreData(scoreRes);

        const sessionsRes = await getDatas("session", "average-sessions");
        setSessionsData(sessionsRes);
      } catch (error) {
        console.error("Erreur", error);
      }
    };

    fetchData();
  }, []);

  return {
    userData,
    activityData,
    scoreData,
    sessionsData,
  };
};

export default ManageApi;
