const parseUrl = require('url').parse;
const Koa = require('koa');
const qs = require('koa-qs');
const koaStatic = require('koa-static');

const getUrl = require('./lib/get-url');
const fetchCode = require('./lib/fetch-code');
const pimpCode = require('./lib/pimp-code');
const generateManifest = require('./lib/generate-manifest');

const app = new Koa();
qs(app);
app.use(koaStatic('public'));

app.use(async (ctx, next) => {
  if (!ctx.query.base) {
    return next();
  }
  const baseUrl = parseUrl(ctx.query.base);
  if (!baseUrl.protocol || !baseUrl.hostname) {
    next();
  }

  try {
    const url = ctx.untisUrl = await getUrl(ctx.query);
    const originalCode = await fetchCode(url);
    const code = pimpCode(ctx)(originalCode);
    ctx.body = code;
  } catch (err) {
    ctx.body = err.message;
    console.error(err);
  }
});

app.use(ctx => {
  if (ctx.url === '/manifest.json') {
    ctx.body = generateManifest(ctx.request.header.referer);
  } else if (!ctx.query.base && !ctx.query.category && !ctx.query.item) {
    ctx.body = `Please append the following querys to the url:
      ?base=BASE_URL      (e.g. http://intranet.your.school/infostundenplan)
      &category=CATEGORY  (e.g. classes)
      &item=ITEM          (e.g. 1A, when category is 'classes')
      &offset=OFFSET      (e.g. 0 for current, 1 for next week) [optional]`;
  } else {
    ctx.body = 'The URL format was invalid';
  }
});

app.listen(80);
