const isWeekend = date => {
  const day = date.getDay();
  return day === 6 || day === 0;
};

module.exports = (date = new Date()) => {
  return isWeekend(date) ? 1 : 0;
};
