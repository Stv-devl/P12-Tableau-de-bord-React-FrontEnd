import { Link } from "react-router-dom";
import ApiManage from "../hook/ManageApi";
import PropTypes from "prop-types";

const Home = () => {
  const { unfilteredUser } = ApiManage();

  console.log(unfilteredUser);
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

/*
Home.propTypes = {
  unfilteredUser: PropTypes.object.isRequired,
};*/

export default Home;
