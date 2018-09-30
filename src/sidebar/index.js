import React from 'react';
import PropTypes from 'prop-types';
import SidebarItem from './item';
import {addClassNames} from '../utils';
import {getActiveClassName} from './utils';

/**
 * Sidebar
 * @param {string} id - The sidebar `id`
 * @param {array} items - The sidebar items
 * @param {string} label - The sidebar button label
 * @param {array} classNames - Additional classNames (Optional)
 * @param {string} sidebarPosition - The sidebar position (left|right|top|bottom)
 * @returns {object} React element tree describing the component
 */

export default class Sidebar extends React.Component {

  state = {
    isActive: false
  }

  handleToggle = (evt) => {
    const key = evt.keyCode || evt.which;
    if (evt.type === 'keypress' && key !== 13) return null;
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    const {isActive} = this.state;
    const {id, items, label, position = 'left', classNames, ...props} = this.props;
    return (
      <nav id={id} className={addClassNames(classNames)} {...props}>
        <ul className={`sidebar sidebar--${position} ${getActiveClassName(isActive)}`}>
          {items.map(({id, content, classNames}) =>
            <SidebarItem
              key={id}
              content={content}
              classNames={classNames}
            />
          )}
        </ul>
        <div>
          <a
            tabIndex="0"
            onClick={this.handleToggle}
            onKeyPress={this.handleToggle}
            className="btn btn--xs btn--full"
          >
            {label}
          </a>
        </div>
      </nav>
    );
  }

}

Sidebar.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.element,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
