import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import HeroTitle from './title';
import HeroCta from './cta';
import {addClassNames} from '../utils';

/**
 * Hero
 * @param {object} image - The image properties
 * @param {string} title - The hero title
 * @param {string} subtitle - The hero subtitle
 * @param {object} cta - The call-to-action properties
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Hero({
  cta,
  image,
  title,
  subtitle,
  classNames,
  ...props
}) {
  return (
    <div className={`hero-container ${addClassNames(classNames)}`} {...props}>
      <section className="hero">
        <div className="hero-content">
          {title && <HeroTitle title={title} subtitle={subtitle} />}
          {cta && <HeroCta cta={cta} />}
        </div>
        <div className="hero-placeholder" />
        {image && <Image classNames={['hero-image']} {...image} />}
      </section>
    </div>
  );
}

Hero.propTypes = {
  cta: PropTypes.object,
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
