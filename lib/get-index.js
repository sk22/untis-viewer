const padStart = require('lodash.padstart');
const getList = require('./get-list');

module.exports = code => ({category, item}) => {
  if (!item) {
    throw new Error('No item was given');
  }
  const list = getList(code)(category);
  const index = list.indexOf(item) + 1;
  if (!index) {
    throw new Error(`Code did not contain the ${category} item '${item}'`);
  }
  return padStart(String(index), 5, '0'); // 1, 2, 3, ...
};
