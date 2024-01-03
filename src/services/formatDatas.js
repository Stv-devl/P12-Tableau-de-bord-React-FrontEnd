/**
 * Function to formats the 'user' datas to extract the first name.
 * @param {Object[]} data - An object containing the 'user' datas
 * @returns {string|Array} - The first name of the user, otherwise null.
 */

export const formatUser = (data) => {
  if (data && data.length > 0) {
    return data && data[0].userInfos.firstName;
  }
  return null;
};

/**
 * Function to formats the 'activity' datas to extract the 'name', 'kilogram' and 'calories' to use with the 'Activity' rechart component.
 * @param {Object[]} data - An Array containing the'activity' datas
 * @returns {Object[]} - An object with the 'day', 'kilogram', 'calories' , otherwise null.
 */

export const formatActivity = (data) => {
  if (data && data.length > 0) {
    const session = data[0].sessions;

    return session.map((item, index) => ({
      day: index + 1,
      kilogram: item.kilogram,
      calories: item.calories,
    }));
  }
  return null;
};

/**
 * Function to formats the 'performance' datas to extract the 'subject' and 'session' to use with the 'Performance' rechart component.
 * @param {Object[]} data - An Array containing the 'performance' datas
 * @returns {Object[]} - An object with the 'subject' and 'session' datas if data is available, otherwise null.
 */

export const formatPerformance = (data) => {
  if (data && data.length > 0) {
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
  return null;
};

/**
 * Function to formats the 'sessions' datas to extract the 'day' and 'session' to use with the 'Sessions' rechart component.
 * @param {Object[]} data - An Array containing the 'sessions' datas
 * @returns {Object[]} - An object with the 'subject' and 'session' datas, otherwise null.
 */

export const formatSessions = (data) => {
  if (data && data.length > 0) {
    const session = data[0].sessions;
    const weekDay = ["L", "M", "M", "J", "V", "S", "D"];
    return session.map((item) => ({
      day: weekDay[item.day - 1],
      session: item.sessionLength,
    }));
  }
  return null;
};

/**
 * Function to formats the 'user' datas to extract the 'names' of nutrient and them 'number' to use with the 'Macronutrient' component.
 * @param {Object[]} data - An Array containing the 'macronutrient' datas
 * @returns {Object[]} - An object with the 'names' and 'number' datas, otherwise null.
 */

export const formatNutrient = (data) => {
  if (data && data.length > 0) {
    const getNutrient = data ? data[0].keyData : {};
    const nutrientArray = Object.entries(getNutrient);
    return nutrientArray.map((item) => ({
      names: item[0].split("C")[0],
      number: item[1],
    }));
  }
  return null;
};

/**
 * Function to formats the 'user' datas to extract the 'score' to use with the'Score' recharts component.
 * @param {Object[]} data - An Array containing the 'user' datas
 * @returns {Object[]} - An object with the 'score' in %, otherwise null.
 */

export const formatScore = (data) => {
  if (data && data.length > 0) {
    return (data[0].score || data[0].todayScore) * 100;
  }
  return null;
};
