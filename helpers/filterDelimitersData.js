const getDelimitersData = require("./getDelimitersData");
const has = require("lodash/has");

const filterDelimitersDataByProperty = (property) => {
  const delimitersData = getDelimitersData();
  return delimitersData.filter((item) => has(item, property));
}

module.exports = filterDelimitersDataByProperty;
