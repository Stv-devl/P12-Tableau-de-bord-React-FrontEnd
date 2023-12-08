const filterWithId = (data, id) => {
  return data.filter((item) => item.userId === id || item.id === id);
};

export default filterWithId;
