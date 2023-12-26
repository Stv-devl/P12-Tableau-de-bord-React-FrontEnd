import axios from "axios";

async function getDatas(userId) {
  const baseUrl = `http://localhost:3000/user/${userId || 12}`;
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
