import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';
import {getActiveClass} from './utils';

/**
 * Tabset section
 * @param {string} id - The tabset `id`
 * @param {string} title - The item title
 * @param {any} content - The item content
 * @param {boolean} isActive - True if section is visible
 * @param {array} classNames - Additional className (Optional)
 * @returns {object} React element describing the component
 */

export default function TabSection({
  id,
  title,
  content,
  isActive,
  children,
  classNames,
  handleToggleActive,
  ...props
}) {
  return (
    <li className={`tab-item ${addClassNames(classNames)} ${getActiveClass(isActive)}`} role="presentation" {...props}>
      <h1
        id={`${id}-title`}
        tabIndex={!isActive ? 0 : -1}
        onClick={handleToggleActive}
        onKeyUp={handleToggleActive}
        className="tab-title" role="tab" aria-controls={`${id}-section`}
      >
        {title}
      </h1>
      <section
        id={`${id}-section`}
        className="tab-section"
        aria-hidden={!isActive}
        aria-labelledby={`${id}-title`}
      >
        {title && <h3 tabIndex="0">Tab section {title}</h3>}
        {content ? <div>{content}</div> : children}
      </section>
    </li>
  );
}

TabSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
  children: PropTypes.any,
  isActive: PropTypes.bool,
  handleToggleActive: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
