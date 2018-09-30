import React from 'react';
import PropTypes from 'prop-types';
import Button from './index';
import {getShape, addClassNames} from '../utils';

/**
 * Button Group
 * @param {array} buttonArr - Collection of buttons
 * @param {string} display - Group display type (inline|block)
 * @param {array} classNames - Additional classNames (Optional)
 * @param {boolean} rounded - The button group shape (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function ButtonGroup({display, buttonArr, rounded, classNames, ...props}) {
  return (
    <div className={`btngroup--${display} ${getShape(rounded, 'btngroup')} ${addClassNames(classNames)}`} {...props}>
      {buttonArr.map((button) =>
        <Button
          {...button}
          key={button.id}
        />
      )}
    </div>
  );
}

ButtonGroup.propTypes = {
  display: PropTypes.oneOf(['inline', 'block']),
  buttonArr: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    loading: PropTypes.bool,
    icon: PropTypes.object,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }))
};
