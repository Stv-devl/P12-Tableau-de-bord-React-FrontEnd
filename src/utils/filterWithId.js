const filterWithId = (data, id) => {
  return id && data.filter((item) => item.userId === id || item.id === id);
};

export default filterWithId;
