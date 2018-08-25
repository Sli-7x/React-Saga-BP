import * as express from 'express';
import * as React from 'react';
import * as ReactDom from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import App from '../client/App';
import { store } from '../client/core/configureStore';
import template from './template';

const router = express.Router();

router.get('*', async (req: express.Request, res: express.Response) => {
  const context: any = {};
  const sheet: any = new ServerStyleSheet();

  const appHtml = ReactDom.renderToString(
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </StyleSheetManager>
    </Provider>,
  );

  if (context.status === 404) {
    res.status(404);
  }
  if (context.status === 301 || context.status === 302) {
    return res.redirect(context.status, context.url);
  }

  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();
  const html = template({ helmet, content: appHtml, data: {}, styles: styleTags });

  res.send(html);
});

export default router;
