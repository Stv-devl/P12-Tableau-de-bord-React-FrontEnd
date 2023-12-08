import User from "../components/User";
import Activity from "../components/Activity";
import Score from "../components/Score";
import Session from "../components/Session";
import ApiManage from "../hook/ManageApi";

const Dashboard = () => {
  const { datas } = ApiManage();

  return (
    <div>
      <User data={datas.user} />
      <Activity data={datas.activity} />
      <Score data={datas.score} />
      <Session data={datas.session} />
    </div>
  );
};

export default Dashboard;
