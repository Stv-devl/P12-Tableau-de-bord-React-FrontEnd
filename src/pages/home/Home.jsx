import { Link } from "react-router-dom";
import getMockedDatas from "../../services/getMockedDatas";

const Home = () => {
  const { allUsers } = getMockedDatas();

  return (
    <main className="user-main">
      <div className="user-container">
        {allUsers &&
          allUsers.map(
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
