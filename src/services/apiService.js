import axios from "axios";

/**
 * Fetches data from 4 differents Api endpoints.
 * An object of array who include 'user', 'activity', 'sessions', 'performance' datas, each representing an Api endpoint.
 * @param {string} userId - The ID of the user from who data are fetched. If no id provided id will be 12 by defaults
 * @returns {Object[]} - An object of arrays containing the 'user','activity', 'sessions','performance'
 * @throws {Error} - Throws an error if the API call fails.
 */

async function getDatas(userId) {
  const baseUrl = `http://localhost:3000/user/${userId || "12"}`;
  const endUrl = ["", "/activity", "/average-sessions", "/performance"];

  try {
    const request = endUrl.map((url) => axios.get(baseUrl + url));
    const [user, activity, sessions, performance] = await Promise.all(request);

    return {
      user: [user.data.data],
      activity: [activity.data.data],
      sessions: [sessions.data.data],
      performance: [performance.data.data],
    };
  } catch (error) {
    console.error("Erreur de récupération des données", error);
    throw error;
  }
}

export default getDatas;
