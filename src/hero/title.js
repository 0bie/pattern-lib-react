import React from 'react';
import PropTypes from 'prop-types';

/**
 * Hero title
 * @param {string} title - The hero title
 * @param {string} subtitle - The hero subtitle
 * @returns {object} React element tree describing the component
 */

export default function HeroTitle({title, subtitle, ...props}) {
  return (
    <div {...props}>
      {subtitle ? <span className="hero-subtitle">{subtitle}</span> : ''}
      <div className="hero-titlewrap">
        <h1 className="hero-title">{title}</h1>
      </div>
    </div>
  );
}

HeroTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};
