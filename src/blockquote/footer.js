import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../avatar';
import Icon from '../icon';
import {addClassNames} from '../utils';
import {getName} from './utils';

/**
 * Blockquote footer
 * @param {object} user - The quote author's info
 * @param {string} link - The quote url
 * @param {object} linkCta - The cta icon properties
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the components
 */

export default function BlockquoteFooter({user, link, linkCta, classNames}) {
  return (
    <footer className={`blockquote-footer ${addClassNames(classNames)}`}>
      <div className="media">
        <div className="media-item mr--xs">
          {(user.firstName || user.lastName) &&
            <Avatar user={user} size="sm" />}
        </div>
        {(user.firstName || user.lastName ) &&
          <div className="media-content">
            <h4 className="media-title">
              {getName(user.firstName, user.lastName)}
            </h4>
          </div>}
      </div>
      <div>
        {user.quote &&
          <a href={link} className="icon-container btn">
            {<Icon {...linkCta} />}
          </a>}
      </div>
    </footer>
  );
}

BlockquoteFooter.propTypes = {
  user: PropTypes.object,
  link: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.object),
  linkCta: PropTypes.shape({
    id: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  })
};

