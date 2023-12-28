export const formatUser = (data) => {
  if (data) {
    return data && data[0].userInfos.firstName;
  }
  return [];
};

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
    const { data: performanceData } = data[0];
    const legend = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];
    return performanceData.map((item, index) => ({
      subject: legend[index],
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

export const formatNutrient = (data) => {
  if (data) {
    const getNutrient = data ? data[0].keyData : {};
    const nutrientArray = Object.entries(getNutrient);
    return nutrientArray.map((item) => ({
      names: item[0].split("C")[0],
      number: item[1],
    }));
  }
  return [];
};

export const formatScore = (data) => {
  if (data) {
    return (data[0].score || data[0].todayScore) * 100;
  }
  return [];
};
