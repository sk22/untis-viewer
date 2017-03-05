const padStart = require('lodash.padstart');
const getIndex = require('./get-index');
const getShort = require('./get-short');
const fetchCode = require('./fetch-code');
const getWeek = require('./get-week');

module.exports = async ({base, category, item, offset}) => {
  const code = await fetchCode(`${base}/frames/navbar.htm`);
  const short = getShort(code)(category);
  const week = padStart(getWeek(offset), 2, '0');

  return `${base}/${week}/${short}/${short}${
    getIndex(code)({base, category, item})
  }.htm`;
};
