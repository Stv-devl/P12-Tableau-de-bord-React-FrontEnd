const formatActivity = (data) => {
  //create the rechart array with data
  if (data.length > 0 && data) {
    const session = data[0].sessions;
    return session.map((item, index) => ({
      name: index + 1,
      kilogram: item.kilogram,
      calories: item.calories,
    }));
  }
  return [];
};

export default formatActivity;
