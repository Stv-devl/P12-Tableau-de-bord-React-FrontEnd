import { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import User from "../../components/user/User";
import Activity from "../../components/activity/Activity";
import Score from "../../components/score/Score";
import Session from "../../components/session/Session";

const Dashboard = () => {
  const { datas } = useContext(DataContext);

  const { user, activity, performance, session } = datas;

  return (
    <>
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
    </>
  );
};

export default Dashboard;
