const formatSessions = (data) => {
  //create the rechart array with data
  if (data.length > 0 && data) {
    const session = data[0].sessions;
    return session.map((item) => ({
      day: item.day,
      session: item.sessionLength,
    }));
  }
  return [];
};

export default formatSessions;
