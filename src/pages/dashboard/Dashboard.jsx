import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useManageApi from "../../hook/useManageApi";
import User from "../../components/user/User";
import Activity from "../../components/activity/Activity";
import Performance from "../../components/performance/Performance";
import Session from "../../components/session/Session";
import Score from "../../components/score/Score";
import Macronutrient from "../../components/macronutrient/Macronutrient";

const Dashboard = () => {
  const { id } = useParams();
  const [profilId, setProfilId] = useState(12);

  useEffect(() => {
    id && setProfilId(parseInt(id, 10));
  }, [id]);

  const { datas } = useManageApi(profilId);
  const { user, activity, performance, session } = datas;

  return (
    <main>
      <div className="dashboard">
        <div className="user_container">
          <User data={user} />
        </div>
        <div className="chart-container">
          <div className="chart-wrapper">
            <div className="activity_container">
              <Activity data={activity} />
            </div>
            <div className="chart-down">
              <div className="sessions-container">
                <Session data={session} />
              </div>
              <div className="performance_container">
                <Performance data={performance} />
              </div>
              <div className="score_container">
                <Score data={user} />
              </div>
            </div>
          </div>
          <div className="macronutrient_container">
            <Macronutrient data={user} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
