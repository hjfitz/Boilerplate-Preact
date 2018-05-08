import { h } from 'preact';
import { Link } from 'preact-router/match';

export default (props) => {
  console.log(props);
  return (
    <h1>
    Layout
      <Link activeClassName="active" href="/foo">Foo</Link>
      <Link activeClassName="active" href="/">Home</Link>
      {props.children}
    </h1>
  );
};

