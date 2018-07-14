import { h, Component } from 'preact';

/**
 * Basic component.
 * It follows the react component lifecycle!
 */
export default class Params extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return <h1>{this.props.matches.param}</h1>;
  }
}

Params.propTypes = {
 matches: PropTypes.object, 
}