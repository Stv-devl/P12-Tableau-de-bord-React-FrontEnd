import React from "react";
import { formatUser } from "../../services/formatDatas";

const User = ({ data }) => {
  return (
    <>
      <h1>
        Bonjour <span className="h1-red">{formatUser(data)}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </>
  );
};

export default User;
