import _debug from 'debug';
import server from './server';

const debug = _debug('app:server');
const port = process.env.PORT || 3001;

server.listen(port, () => {
  debug(`JSON Server accessible via localhost:${port}`);
});
