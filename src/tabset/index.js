import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getShape, addClassNames} from '../utils';

/**
 * Tabset
 * @param {string} id - The tabset `id`
 * @param {boolean} rounded - The tab shape
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default class TabSet extends Component {

  state = {
    activeTab: 1
  }

  handleToggle = (activeTab) => {
    this.setState(() => ({
      activeTab
    }));
  }

  renderChildren() {
    const {children} = this.props;
    const {activeTab} = this.state;
    const handleToggle = this.handleToggle;
    return React.Children.map(children, (child, i) => {
      return React.cloneElement(child, {
        isActive: i + 1 === activeTab,
        handleToggleActive(evt) {
          const key = evt.keyCode || evt.which;
          if (evt.type === 'keyup' && key !== 13) return null;
          handleToggle(i + 1);
        }
      });
    });
  }

  render() {
    const {id, classNames, rounded, ...props} = this.props;
    return (
      <nav {...props}>
        <ul id={id} className={`tab-list ${getShape(rounded, 'tab-list')} ${addClassNames(classNames)}`}>
          {this.renderChildren()}
        </ul>
      </nav>
    );
  }

}

TabSet.propTypes = {
  id: PropTypes.string,
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
