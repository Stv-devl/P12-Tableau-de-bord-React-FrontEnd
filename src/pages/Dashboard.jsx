import User from "../components/User";
import Activity from "../components/Activity";
import Score from "../components/Score";
import Session from "../components/Session";
import ApiManage from "../hook/ManageApi";

const Dashboard = () => {
  const { user, activity, performance, session } = ApiManage();

  return (
    <div>
      <User data={user} />
      <Activity data={activity} />
      <Score data={performance} />
      <Session data={session} />
    </div>
  );
};

export default Dashboard;
