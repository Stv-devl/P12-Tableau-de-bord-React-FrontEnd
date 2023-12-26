import { mockedData } from "../data/mockDatas";
import filterWithId from "../utils/filterWithId";

const getMockedDatas = (userId) => {
  const parseId = parseInt(userId, 10);

  return {
    user: filterWithId(mockedData.user, parseId),
    allUsers: mockedData.user,
    activity: filterWithId(mockedData.activity, parseId),
    sessions: filterWithId(mockedData.session, parseId),
    performance: filterWithId(mockedData.performance, parseId),
  };
};

export default getMockedDatas;
