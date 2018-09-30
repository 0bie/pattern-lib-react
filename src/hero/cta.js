import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

/**
 * Hero call-to-action
 * @param {object} cta - The cta properties
 * @param {object} [cta].icon - The cta icon properties
 * @param {string} [cta].label - The cta label
 * @returns {object} React element that desecribes the component
 */

export default function HeroCta({cta, ...props}) {
  return (
    <div className="hero-cta" {...props}>
      {cta.icon ? <Icon {...cta.icon} /> : ''}
      <span className="vert--mid">{cta.label}</span>
    </div>
  );
}

HeroCta.propTypes = {
  cta: PropTypes.shape({
    icon: PropTypes.object,
    label: PropTypes.string
  })
};
