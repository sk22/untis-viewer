const fetchSite = require('./lib/fetch-site');

const doStuff = async () => {
  console.log('ha');
  const x = await fetchSite('https://google.com');
  console.log('hu');
  console.log(await x.text());
};

doStuff();
