import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../data/DataProvider";

const Home = () => {
  const { unfilteredUser } = useContext(DataContext);
  const getUsersData = unfilteredUser.user || [];

  return (
    <div className="user-container">
      {getUsersData.map((item) => (
        <article
          className={`user-card-${item.userInfos.firstName}`}
          key={`card-${item.id}`}
        >
          {item.id !== undefined && (
            <Link
              className={`link-${item.userInfos.firstName}`}
              to={`/dashboard/${item.id}`}
              key={`link-${item.id}`}
            >
              {item.userInfos.firstName}
            </Link>
          )}
        </article>
      ))}
    </div>
  );
};

export default Home;
