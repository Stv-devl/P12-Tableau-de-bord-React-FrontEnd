import { useParams } from "react-router-dom";
import useManageApi from "../../hook/useManageApi";
import { DataModel } from "../../services/formatDatas";
import User from "../../components/user/User";
import Activity from "../../components/activity/Activity";
import Performance from "../../components/performance/Performance";
import Session from "../../components/session/Session";
import Score from "../../components/score/Score";
import Macronutrient from "../../components/macronutrient/Macronutrient";
import Loader from "../../components/loader/Loader";
import Error from "../error/Error";

/**
 * This component is use for activate components : User, Activity, Performance, Session, Score, and Macronutrient from the dashboard
 * We Fetches 'data', 'loading' & 'error' with the user Id we get from the URL params.
 * @returns {JSX.Element} - The main dashboard layout containing different components for displaying the dashboard

 */

const Dashboard = () => {
  const { id } = useParams();
  const { data, loading, error } = useManageApi(id);

  const dataModel = new DataModel(data);
  const {
    formatData,
    formatFirstName,
    formatActivity,
    formatPerformance,
    formatSession,
    formatScore,
    formatNutrient,
  } = dataModel.models;

  const useMockdata = process.env.REACT_APP_USE_MOCK_DATA;
  const filterUser = formatData.user && formatData.user[0].id === Number(id);

  return (
    <>
      {(error !== null && useMockdata === "false") ||
      (!filterUser && !loading) ? (
        <Error />
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <main>
              <div className="dashboard">
                <div className="user_container">
                  <User data={formatFirstName} />
                </div>
                <div className="chart-container">
                  <div className="chart-wrapper">
                    <div className="activity_container">
                      <Activity data={formatActivity} />
                    </div>
                    <div className="chart-down">
                      <div className="sessions-container">
                        <Session data={formatSession} />
                      </div>
                      <div className="performance_container">
                        <Performance data={formatPerformance} />
                      </div>
                      <div className="score_container">
                        <Score data={formatScore} />
                      </div>
                    </div>
                  </div>
                  <div className="macronutrient_container">
                    <Macronutrient data={formatNutrient} />
                  </div>
                </div>
              </div>
            </main>
          )}
        </>
      )}
    </>
  );
};

export default Dashboard;
