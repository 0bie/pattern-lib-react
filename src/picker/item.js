import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Picker item
 * @param {string} id - The item `id`
 * @param {any} item - The media item
 * @param {string} title - The item title
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function PickerItem({id, item, title, classNames, ...props}) {
  return (
    <div className={`picker-item ${addClassNames(classNames)}`} {...props}>
      <label htmlFor={id}>
        <div className="checkbox-container">
          <input className="checkbox checkbox--sm checkbox--rounded hidden" type="checkbox" name={id} id={id} />
          <div />
        </div>
        <div className="media">
          <div className="media-item float--left">{item}</div>
          <div className="media-content">
            <h4 className="media-title">{title}</h4>
          </div>
        </div>
      </label>
    </div>
  );
}

PickerItem.propTypes = {
  id: PropTypes.string,
  item: PropTypes.element,
  title: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
