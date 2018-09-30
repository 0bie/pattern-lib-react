import React, {Component} from 'react';
import Spinner from '../spinner';

/**
 * Asynchronously load a component
 * @param {function} getComponent - Callback that imports a given component
 * @returns {object} A component
 */

export default function asyncComponent(getComponent) {

  class AsyncComponent extends Component {
    state = {
      component: null
    }
    async componentDidMount() {
      const {default: component} = await getComponent();
      this.setState(() => ({
        component
      }));
    }
    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : <Spinner text="Loading..." />;
    }
  }
  return AsyncComponent;

}
