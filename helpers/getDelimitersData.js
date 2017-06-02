const cldrData = require('cldr');

const getDelimitersData = () => {
  const numberOfLocaleIds = cldrData.localeIds.length;
  let delimitersArr = [];
  for (let i = 0; i < numberOfLocaleIds; i++) {
    delimitersArr.push(cldrData.extractDelimiters(cldrData.localeIds[i]));
  }
  return delimitersArr;
};

module.exports = getDelimitersData;
