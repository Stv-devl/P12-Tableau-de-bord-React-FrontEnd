import ApiManage from "../hook/ManageApi";
import User from "../components/User";
import Activity from "../components/Activity";
import Score from "../components/Score";
import Session from "../components/Session";

const Home = () => {
  const { userData, activityData, scoreData, sessionsData } = ApiManage();
  return (
    <div>
      <User data={userData} />
      <Activity data={activityData} />
      <Score data={scoreData} />
      <Session data={sessionsData} />
    </div>
  );
};

export default Home;
