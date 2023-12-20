import React from "react";

const User = ({ data }) => {
  const firstName = data.length > 0 && data[0].userInfos.firstName;

  return (
    <>
      <h1>
        Bonjour <span className="h1-red">{firstName && firstName}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </>
  );
};

export default User;
