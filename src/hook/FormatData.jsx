import { useState, useEffect } from "react";
import ApiManage from "./ManageApi";

const FormatData = () => {
  const { unfilteredUser, datas } = ApiManage();
  const [formattedUser, setFormattedUser] = useState([]);

  const getUsersData = unfilteredUser.user || [];

  useEffect(() => {
    const formatted = getUsersData.map((item) => ({
      userId: item.id,
      firstName: item.userInfos.firstName,
    }));
    setFormattedUser(formatted);
  }, [getUsersData]);

  return { formattedUser };
};

export default FormatData;
