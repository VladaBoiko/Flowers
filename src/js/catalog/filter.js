export const filterBy = (data, filterParam, filterKey) => {
  return data.filter(card => {
    if (filterParam.length === 0) {
      return true;
    }
    return filterParams.includes(card[filterKey]);
  });
};
