import * as express from 'express';
import * as React from 'react';
import * as fs from 'fs';
import * as path from 'path';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import * as Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
// import configureStore from '../client/core/configureStore';
// import routes from '../client/routes';
import template from './template';
import App from '../client/App';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { ssrCache, cacheMiddleware, getCacheKey } from './cacheMiddleware';
// import { matchRoutes } from 'react-router-config';

const router = express.Router();
let stats: any = {};
let modules: any[];
if (fs.existsSync(path.resolve(__dirname, '../../dist/js/react-loadable.json'))) {
  stats = import(path.resolve(__dirname, '../../dist/js/react-loadable.json'));
}

router.get('*', cacheMiddleware, async (req, res) => {
  // const url = req.url.split(/[?#]/)[0];
  // const store = configureStore();
  const context: any = {};
  modules = [];
  const sheet: any = new ServerStyleSheet();

  // const branch = matchRoutes(routes, url);

  const appHtml = renderToString(
    <Loadable.Capture report={getModules}>
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </StyleSheetManager>
    </Loadable.Capture>,
  );

  if (context.status === 404) {
    res.status(404);
  }

  if (context.status === 301 || context.status === 302) {
    return res.redirect(context.status, context.url);
  }

  const styleTags = sheet.getStyleTags();
  const bundles = getBundles(stats, modules);
  const helmet = Helmet.renderStatic();
  const html = template({ bundles, helmet, data: {}, content: appHtml, styles: styleTags });

  if (context.status !== 404) {
    ssrCache.set(getCacheKey(req), html);
  }

  res.send(html);
});

const getModules = (moduleName: string) => modules.push(moduleName);

export default router;
