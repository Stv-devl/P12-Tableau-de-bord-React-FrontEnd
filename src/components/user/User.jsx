import React from "react";

/**
 * The component is a greeting to users when they acces to the dashboard
 * user name is formatted using the 'formatUser' function
 * @param {Object} data - The 'user' data before be formated by formatUser function
 * @returns {JSX.Element} - A greeting to the user including his name
 */

const User = ({ data }) => {
  return (
    <>
      <h1>
        Bonjour <span className="h1-red">{data}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </>
  );
};

export default User;
