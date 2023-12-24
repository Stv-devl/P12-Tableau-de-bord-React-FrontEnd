import { Link } from "react-router-dom";
import useManageApi from "../../hook/useManageApi";

const Home = () => {
  const { datas } = useManageApi();
  const { user } = datas;

  return (
    <main className="user-main">
      <div className="user-container">
        {user.length > 1 &&
          user.map(
            (item) =>
              item.id !== undefined && (
                <Link
                  className={`user-card ${item.userInfos.firstName}`}
                  to={`/dashboard/${item.id}`}
                  key={`card-${item.id}`}
                >
                  <img
                    className="img-profil"
                    src="./man-profil.png"
                    alt={`profile ${item.userInfos.firstName}`}
                  />
                  <p className="card-text">{item.userInfos.firstName}</p>
                </Link>
              )
          )}
      </div>
    </main>
  );
};

export default Home;
