import { createContext, useState, useEffect } from "react";
import { getDatas } from "../services/apiService";
import filterWithId from "../utils/filterWithId";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [profilId, setProfilId] = useState(12);
  const [unfilteredUser, setfilteredUser] = useState({});
  const [datas, setDatas] = useState({
    user: [],
    activity: [],
    performance: [],
    session: [],
  });

  const getProfilId = (id) => {
    setProfilId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, inverseRes, activityRes, scoreRes, sessionsRes] =
          await Promise.all([
            //item, endUrl, id
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
      } catch (error) {
        console.error("Erreur", error);
      }
    };
    fetchData();
    //useEffect at launch and id change
  }, [profilId]);

  return (
    <DataContext.Provider value={{ datas, unfilteredUser, getProfilId }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
