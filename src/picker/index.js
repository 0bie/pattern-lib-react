import React from 'react';
import PropTypes from 'prop-types';
import PickerItem from './item';
import PickerGroup from './group';
import Button from '../button';
import Input from '../input';
import {getShape, addClassNames, preventOuterScroll} from '../utils';

/**
 * Picker
 * @param {string} id - The picker `id`
 * @param {string} title - The picker title
 * @param {array} items - The picker items
 * @param {array} groups - The picker groups (Optional)
 * @param {string} subtitle - The picker subtitle
 * @param {boolean} rounded - The picker shape (Optional)
 * @param {function} handleClose - Callback function executed when closed
 * @param {boolean} preventClose - True if user can't dismiss
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default class Picker extends React.Component {

  handleScroll = (evt) => {
    preventOuterScroll(evt);
  }

  render() {
    const {id, title, subtitle, items, groups, rounded, handleClose, preventClose, classNames, ...props} = this.props;
    return (
      <div className={`picker ${getShape(rounded)} ${addClassNames(classNames)}`} {...props}>
        <header className="picker-header">
          <div className="picker-titlebar">
            <h1 className="picker-title">{title}</h1>
            {!preventClose &&
              <Button
                size="sm"
                classNames={['btn--link']}
                onClick={handleClose}
                icon={{id: 'x1', size: 'sm', title: 'close', description: 'close picker modal'}}
              />}
          </div>
          <Input
            size="xs"
            id={`input_${id}`}
            placeholder="Type to filter..."
            inputClassNames={['picker-searchbar']}
          />
        </header>
        <h3 className="picker-subtitle">{subtitle}</h3>
        <div id={id} className="picker-content" onWheel={this.handleScroll}>
          {items && !groups ? items.map(({id, item, title, classNames}) =>
            <PickerItem
              key={id}
              title={title}
              item={item}
              classNames={classNames}
            />
          ) : null}
          {groups && !items ? groups.map(({id, title, pickerArr, classNames}) =>
            <PickerGroup
              key={id}
              title={title}
              pickerArr={pickerArr}
              classNames={classNames}
            />
          ) : null}
        </div>
      </div>
    );
  }

}

Picker.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rounded: PropTypes.bool,
  handleClose: PropTypes.func,
  preventClose: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.element,
    title: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  })),
  groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.element,
    title: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
