import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import {getShape, addClassNames} from '../utils';
import {getInputState} from './utils';

/**
 * Render an input element
 * @param {string} id - The input id
 * @param {string} inputId - The `<input>` element `id
 * @param {string} type - The input type
 * @param {size} size - The input size (xs|sm|md|lg|xl|xxl)
 * @param {string} placeholder - The input placeholder
 * @param {object} icon - Icon properties (Optional)
 * @param {string} state - The input state (Optional)
 * @param {boolean} rounded - The input shape (Optional)
 * @param {array} inputClassNames - Additional input classNames (Optional)
 * @param {array} classNames - Additional input field classNames (Optional)
 * @param {string} pattern - A RegEx pattern (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Input({
  id,
  size,
  icon,
  state,
  rounded,
  pattern,
  inputId,
  placeholder,
  type = 'text',
  classNames,
  inputClassNames,
  ...props
}) {
  return (
    <span id={id} className={`input-field ${getInputState(state)} ${addClassNames(classNames)}`} {...props}>
      {type !== 'textField' &&
        <input
          type={type}
          id={inputId}
          placeholder={placeholder}
          pattern={pattern}
          data-hint={pattern && `${id}-hint`}
          className={`input input--${size} ${getShape(rounded, 'input')} ${addClassNames(inputClassNames)}`}
        />}
      {type === 'textField' &&
          <textarea
            id={inputId}
            placeholder={placeholder}
            pattern={pattern}
            data-hint={pattern && `${id}-hint`}
            className={`input input--${size} ${getShape(rounded)} ${addClassNames(inputClassNames)}`}
          />}
      {icon && <Icon {...icon} />}
      {state === 'error' && <Icon size="sm" id="warning" classNames={['icon--error']} />}
      {state === 'success' && <Icon size="sm" id="check" classNames={['icon--success']} />}
    </span>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  inputId: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  state: PropTypes.oneOf(['success', 'error', 'diabled']),
  type: PropTypes.oneOf(['text', 'number', 'textField']),
  classNames: PropTypes.arrayOf(PropTypes.string),
  inputClassNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
};
