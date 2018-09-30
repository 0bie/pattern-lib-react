import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Container
 * @param {object} children - React element tree
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Container({children, classNames, ...props}) {
  return (
    <div className={`constrain ${addClassNames(classNames)}`} {...props}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.element,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
