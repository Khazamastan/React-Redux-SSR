import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../shared/routes";
import configureStore from "../shared/configureStore";
import App from "../shared/App";

export function renderDOM(app) {
  app.get("*", (req, res, next) => {
    const store = configureStore();

    const promises = routes.reduce((acc, route) => {
      if (
        matchPath(req.url, route) &&
        route.component &&
        route.component.initialAction
      ) {
        acc.push(
          Promise.resolve(store.dispatch(route.component.initialAction()))
        );
      }
      return acc;
    }, []);

    Promise.all(promises)
      .then(() => {
        const context = {};
        const markup = renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          </Provider>
        );

        const initialData = store.getState();
        res.send(`
              <!DOCTYPE html>
              <html>
                <head>
                  <title>Order Food online</title>
                  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
                  <link rel="stylesheet" href="/css/main.css">
                  <script src="/bundle.js" defer></script>
                  <script>window.__initialData__ = ${serialize(
                    initialData
                  )}</script>
                </head>
      
                <body>
                  <div id="root">${markup}</div>
                </body>
              </html>
            `);
      })
      .catch(next);
  });
}
