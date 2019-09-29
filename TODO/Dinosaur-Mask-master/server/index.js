import jsonServer from 'json-server';
import pause from 'connect-pause';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const isDev = process.env.NODE_ENV === 'development';

router.render = (req, res) => {
  let data = res.locals.data;
  if (Array.isArray(data)) data = {items: data};
  res.jsonp(data);
};

server.use(jsonServer.bodyParser);
if (isDev) server.use(pause(1000));
server.use(middlewares);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.status = 'draft';
    req.body.createdAt = new Date().getTime() / 1000;
  }
  if (req.method === 'PATCH') {
    req.body.updatedAt = new Date().getTime() / 1000;
  }
  next();
});

server.post('/invoices/:id/publish', (req, res) => {
  res.jsonp({
    id: req.params.id,
    status: 'published'
  });
});

server.post('/invoices/:id/unpublish', (req, res) => {
  res.jsonp({
    id: req.params.id,
    status: 'draft'
  });
});

server.use(router);

export default server;
