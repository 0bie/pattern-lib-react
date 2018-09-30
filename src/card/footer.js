import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

/**
 * Card footer
 * @param {array} actions - The call to actions
 * @returns {object} React element tree describing the component
 */

export default function CardFooter({actions}) {
  return (
    <div className="content">
      {actions.map((action) => {
        return (
          <Button
            size="sm"
            icon={action}
            key={action.id}
          />
        );
      })}
    </div>
  );
}

CardFooter.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object)
};
