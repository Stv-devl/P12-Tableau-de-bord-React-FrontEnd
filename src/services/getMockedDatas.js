import { mockedData } from "../data/mockDatas";
import filterWithId from "../utils/filterWithId";

/**
 * Function for get the mocked 'data'
 * If the api is not working we will use the 'mockedData' and filtered them with the function 'filterWithId'
 *  * @param {Object[]} mockedData - An array of object who is a copy of the Api 'data'
 * @param {number|string} userId - The user Id, arrive like a 'string' and we parse it to be a number
 * @returns {Object} An object of array containing the 'user', 'allUsers', 'activity', 'sessions', 'performance', 'datas'
 */

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
