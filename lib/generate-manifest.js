/* eslint-disable camelcase */

const url = require('url');

module.exports = referer => {
  const startUrl = url.parse(referer).path;
  return JSON.stringify({
    lang: 'en',
    background_color: '#ffffff',
    name: 'Untis Viewer',
    short_name: 'Untis',
    start_url: startUrl,
    display: 'standalone',
    description: 'Fetches specified Untis timetables',
    icons: [{
      src: 'icons/icon48.png',
      sizes: '48x48',
      type: 'image/png'
    }, {
      src: 'icons/icon72.png',
      sizes: '72x72',
      type: 'image/png'
    }, {
      src: 'icons/icon96.png',
      sizes: '96x96',
      type: 'image/png'
    }, {
      src: 'icons/icon144.png',
      sizes: '144x144',
      type: 'image/png'
    }, {
      src: 'icons/icon192.png',
      sizes: '192x192',
      type: 'image/png'
    }]
  });
};
