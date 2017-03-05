const fetch = require('node-fetch');

// fetch the url, then parse the body text (both async)
module.exports = async url => {
  const response = await fetch(url);
  const text = await response.text();
  return text;
};
