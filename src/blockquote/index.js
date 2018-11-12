import React from 'react';
import PropTypes from 'prop-types';
import BlockquoteFooter from './footer';
import Icon from '../icon';
import {getShape, addClassNames} from '../utils';
import {truncateQuote} from './utils';

/**
 * Blockquote
 * @param {string} id - The blockquote `id`
 * @param {object} user - Blockquote author
 * @param {string} link - A direct URL to the quote (Optional)
 * @param {object} linkCta - Properties for cta icon
 * @param {number} maxLength - The character limit
 * @param {array} classNames - Additional classNames (Optional)
 * @param {boolean} footer - The blockquote footer (Optional)
 * @param {boolean} rounded - The blockquote shape (Optional)
 * @returns {object} - React element tree describing the component
 */

export default class Blockquote extends React.Component {

  state = {
    quote: truncateQuote(this.props.quote, this.props.maxLength, this.expandQuoteHandler.bind(this))
  }

  expandQuoteHandler() {
    this.setState(() => ({
      quote: this.props.quote
    }));
  }

  render() {
    const {quote} = this.state;
    const {id, user, link, linkCta, footer, rounded, classNames} = this.props;
    return (
      <div id={id} className={`blockquote-container ${getShape(rounded)} ${addClassNames(classNames)}`}>
        <div className="blockquote-icon">
          <Icon
            size="sm"
            title="quotation mark"
            description="quotation mark"
            id="double-quote-serif-left"
          />
        </div>
        <blockquote className="blockquote" cite={link}>
          <div className="blockquote-content">
            {quote}
          </div>
        </blockquote>
        {footer && <BlockquoteFooter user={user} link={link} linkCta={linkCta} />}
      </div>
    );
  }

}

Blockquote.propTypes = {
  id: PropTypes.string,
  footer: PropTypes.bool,
  rounded: PropTypes.bool,
  maxLength: PropTypes.number,
  quote: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  linkCta: PropTypes.object,
  link: PropTypes.string,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.object,
    quote: PropTypes.string
  })
};
