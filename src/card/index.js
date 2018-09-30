import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import CardItem from './item';
import CardFooter from './footer';
import {getShape, addClassNames} from '../utils';

/**
 * Card
 * @param {object} image - The image properties (Optional)
 * @param {object} icon - The icon properties (Optional)
 * @param {string} title - The card title
 * @param {string} ctaLabel The cta label
 * @param {string} description - The card description
 * @param {array} actions - Call to actions
 * @param {array} classNames - Additional classnames (Optional)
 * @param {boolean} footer - The card footer (Optional)
 * @param {boolean} rounded - The card shape (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function Card({
  image,
  icon,
  title,
  ctaLabel,
  ctaHandler,
  description,
  actions,
  footer,
  rounded,
  classNames,
  ...props
}) {
  return (
    <div className={`card-container ${getShape(rounded)} ${addClassNames(classNames)}`} {...props}>
      <div className="card">
        {(icon || image) && <CardItem icon={icon} image={image} />}
        <div className="card-content">
          <div className="card-titlebar">
            <h4 className="card-title">{title}</h4>
            <Button
              size="xs"
              tabIndex="0"
              label={ctaLabel}
              onClick={ctaHandler}
              classNames={[getShape(rounded)]}
            />
          </div>
          <div className="card-description">{description}</div>
        </div>
        {footer &&
          <div className="card-footer">
            <CardFooter actions={actions} />
          </div>}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array,
  footer: PropTypes.bool,
  rounded: PropTypes.bool,
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  ctaLabel: PropTypes.string,
  ctaHandler: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.shape({
    id: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  })
};
