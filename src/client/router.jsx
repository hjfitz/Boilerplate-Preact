import { h, render } from 'preact';
import Router from 'preact-router';
import { Home, Params } from './spa/Pages';
import Layout from './spa/layout';


/**
 * Routes are far nicer in Preact
 * Add your component under the router and give it a 'path' prop
 * @example
 * <Router>
 *   <MyNewComponent path="/my/custom/route" />
 * </Router>
 */
render(
  (
    <Layout>
      <Router>
        <Home path="/" />
        <Params path="/:routedParam" />
      </Router>
    </Layout>
  ), document.body,
);
