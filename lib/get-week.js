const weekOfYear = require('./week-of-year');

const isWeekend = date => {
  const day = date.getDay();
  return day === 6 || day === 0;
};

module.exports = offset => {
  const currentWeek = weekOfYear();
  return offset === undefined && isWeekend(new Date()) ?
    currentWeek + 1 :
    currentWeek + (Number(offset) || 0);
};
