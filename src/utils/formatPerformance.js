const formatPerformance = (data) => {
  if (data.length > 0 && data) {
    const kinds = data[0].kind;
    const getValues = data[0].datas;
    //create an array with kinds
    const kindValues = Object.values(kinds);

    return getValues.map((item, index) => ({
      subject: kindValues[index],
      session: item.value,
    }));
  }
  return [];
};

export default formatPerformance;
