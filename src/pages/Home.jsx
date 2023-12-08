import React from "react";
import { Link } from "react-router-dom";
import FormatData from "../hook/FormatData";

const Home = () => {
  const { formattedUser } = FormatData();

  return (
    <div className="button-container">
      {formattedUser.map((item) => (
        <div key={item.userId}>
          {item.userId !== undefined && (
            <Link to={`/dashboard/${item.userId}`} key={item.userId}>
              <button className="user-page">{item.firstName}</button>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
