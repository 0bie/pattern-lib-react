import React from 'react';
import PropTypes from 'prop-types';
import Input from './index';
import {getShape, addClassNames} from '../utils';

/**
 * Group of inputs
 * @param {array} inputArr - Collection of inputs
 * @param {string} display - Group display type (inline|block)
 * @param {array} classNames - Additional classNames (Optional)
 * @param {boolean} rounded - The input group shape (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function InputGroup({display, inputArr, classNames, rounded, ...props}) {
  return (
    <div className={`input-group--${display} ${getShape(rounded, 'input-group')} ${addClassNames(classNames)}`} {...props}>
      {inputArr.map((input) => <Input key={input.id} {...input} />)}
    </div>
  );
}

InputGroup.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  display: PropTypes.oneOf(['inline', 'block']),
  inputArr: PropTypes.arrayOf(PropTypes.shape({
    rounded: PropTypes.bool,
    id: PropTypes.string,
    inputId: PropTypes.string,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    state: PropTypes.oneOf(['success', 'error', 'diabled']),
    type: PropTypes.oneOf(['text', 'number', 'textField']),
    classNames: PropTypes.arrayOf(PropTypes.string),
    inputClassNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
  }))
};
