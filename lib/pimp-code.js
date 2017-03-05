const getWeek = require('./get-week');
const getOffset = require('./get-offset');

module.exports = ctx => code => {
  return code
    .replace(/<title>.*<\/title>/,
      `<title>Untis ${ctx.query.item}</title>`)
    .replace(/<head>/, `
      <head>
        <link rel="manifest" href="manifest.json">
        <meta name="mobile-web-app-capable" content="yes">
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
        <link rel="icon" type="image/png" href="favicon.png">
        <script src="app.js"></script>`)
    .replace(/<\/center>/i, `
        <div style="margin-top: .5rem; font-size: .85rem; color: gray">
          <a href="${ctx.untisUrl}">source</a> |
          week ${getWeek(ctx.query.offset)}
            (+${ctx.query.offset || getOffset()}) |
          category: ${ctx.query.category} |
          item: ${ctx.query.item}
        </div>
      </center>
    `)
    .replace(/.*untisinfo\.css.*/, '');
};
