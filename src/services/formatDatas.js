export const formatActivity = (data) => {
  if (data) {
    const session = data[0].sessions;
    return session.map((item, index) => ({
      name: index + 1,
      kilogram: item.kilogram,
      calories: item.calories,
    }));
  }
  return [];
};

export const formatPerformance = (data) => {
  if (data) {
    const kinds = data[0].kind;
    const getValues = data[0].data;
    const kindValues = Object.values(kinds);
    return getValues.map((item, index) => ({
      subject: kindValues[index],
      session: item.value,
    }));
  }
  return [];
};

export const formatSessions = (data) => {
  if (data) {
    const session = data[0].sessions;
    const weekDay = ["L", "M", "M", "J", "V", "S", "D"];
    return session.map((item) => ({
      day: weekDay[item.day - 1],
      session: item.sessionLength,
    }));
  }
  return [];
};
