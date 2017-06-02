const getDelimitersData = require("./getDelimitersData");
const has = require("lodash/has");
const pick = require("lodash/pick");

const filterDelimitersDataByProperty = (property) => {
  const delimitersData = getDelimitersData();
  const filteredDelimitersData = delimitersData.filter((item) => has(item, property));
  // Get the key/value pair based on user's property input Ex. quotationStart or quotationEnd
  const delimitersDataToDisplay = filteredDelimitersData.map((localeDelimiterObject, index) => {
    return pick(localeDelimiterObject, [property])
  });
  return delimitersDataToDisplay;
}

module.exports = filterDelimitersDataByProperty;
