import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../data/DataProvider";
import User from "../../components/user/User";
import Activity from "../../components/activity/Activity";
import Score from "../../components/score/Score";
import Session from "../../components/session/Session";

const Dashboard = () => {
  const { id } = useParams();
  const { datas, getProfilId } = useContext(DataContext);
  const { user, activity, performance, session } = datas;

  useEffect(() => {
    if (id) {
      getProfilId(parseInt(id, 10));
    }
  }, [id, getProfilId]);

  return (
    <div className="dashboard">
      <div className="user_container">
        <User data={user} />
      </div>
      <div className="activity_container">
        <Activity data={activity} />
      </div>
      <div className="performance_container">
        <Score data={performance} />
      </div>
      <Session data={session} />
    </div>
  );
};

export default Dashboard;
