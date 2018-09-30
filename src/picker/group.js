import React from 'react';
import PropTypes from 'prop-types';
import PickerItem from './item';
import {addClassNames} from '../utils';

/**
 * Render a group of picker items
 * @param {id} id - The group `id`
 * @param {string} title - The group title
 * @param {array} pickerArr - Collection of picker items
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function PickerGroup({id, title, pickerArr, classNames}) {
  return (
    <div id={id} className={`picker-group ${addClassNames(classNames)}`}>
      <header className="picker-groupheader">
        <h3 className="picker-subtitle">{title}</h3>
      </header>
      {pickerArr.map((item) => <PickerItem key={item.id} {...item} />)}
    </div>
  );
}

PickerGroup.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  pickerArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.element,
    title: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
