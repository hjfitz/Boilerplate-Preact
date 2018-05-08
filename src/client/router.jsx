import { h, render } from 'preact';
import Router from 'preact-router';
import { Home, Params } from './spa/pages';
import Layout from './spa/layout';

render(
  (
    <Layout>
      <Router>
        <Home path="/" />
        <Params path="/:param" />
      </Router>
    </Layout>
  ), document.body,
);
