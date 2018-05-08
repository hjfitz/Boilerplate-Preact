import { h, Component } from 'preact';

export default class Params extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    console.log('oi');
  }

  render() {
    return <h1>params</h1>;
  }
}
