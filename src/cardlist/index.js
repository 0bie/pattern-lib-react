import React from 'react';
import PropTypes from 'prop-types';
import CardlistItem from './item';
import {addClassNames} from '../utils';

/**
 * Cardlist
 * @param {string} id - The cardlist `id`
 * @param {string} title - The cardlist title
 * @param {array} items - The cardlist items
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function Cardlist({id, title, items, classNames, ...props}) {
  return (
    <div className={`cardlist-container ${addClassNames(classNames)}`} {...props}>
      {title && <header className="cardlist-header">
        <h1 className="cardlist-title">{title}</h1>
      </header>}
      <ul id={id} className="cardlist">
        {items.map(({id, image, title, subtitle, details, classNames}) =>
          <CardlistItem
            key={id}
            image={image}
            title={title}
            subtitle={subtitle}
            details={details}
            classNames={classNames}
          />
        )}
      </ul>
    </div>
  );
}

Cardlist.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    details: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
