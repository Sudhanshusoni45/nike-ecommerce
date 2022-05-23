const searchHandler = ({ sortedData, searchQuery }) => {
  if (!searchQuery) {
    return sortedData;
  } else {
    return sortedData.filter((item) => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }
};

export { searchHandler };
