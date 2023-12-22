const formatSessions = (data) => {
  if (data.length > 0 && data) {
    const session = data[0].sessions;
    const weekDay = ["L", "M", "M", "J", "V", "S", "D"];
    return session.map((item) => ({
      day: weekDay[item.day - 1],
      session: item.sessionLength,
    }));
  }
  return [];
};

export default formatSessions;
