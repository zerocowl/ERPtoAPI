import { join } from 'path';
import { sync } from 'filter-files';
import { sync as _sync } from 'is-directory';
import { flatten, pick } from 'lodash';

const isRouteFile = fileName => /((routes)|(route))\.js$/.test(fileName);

const getRoutesFilesFromDirname = dirName =>
  sync(
    dirName,
    (fp, dir, files, recurse) => {
      if (isRouteFile(fp)) {
        return true;
      }
      return _sync(join(dir, fp));
    },
    true
  );

const loadRoutesByPath = dirName => {
  const routes = getRoutesFilesFromDirname(dirName).map(require);

  return flatten(routes);
};

const registerRoutesByPath = (server, dirName) => {
  const routes = loadRoutesByPath(dirName);

  routes.forEach(route => {
    const { method, handler } = route;
    const opts = pick(route, ['path', 'name', 'version']);
    server[method](opts, handler);
  });
};

export default registerRoutesByPath;
