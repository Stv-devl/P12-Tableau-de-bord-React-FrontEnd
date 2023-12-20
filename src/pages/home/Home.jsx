import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../data/DataProvider";

const Home = () => {
  const { unfilteredUser } = useContext(DataContext);
  const getUsersData = unfilteredUser.user || [];

  return (
    <main className="user-main">
      <div className="user-container">
        {getUsersData.map(
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
