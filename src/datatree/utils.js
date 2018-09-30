import React from 'react';
import DataTreeItem from './item';

/**
 * Render data tree items
 * @param {array} items - Collection of item properties
 * @returns {object} React element tree describing `<DataTreeItem />` components
 */

export const renderItems = (items) => {
  if (items && items.length) {
    return items.map((item) => {
      return (
        <DataTreeItem
          key={item.id}
          {...item}
        />
      );
    });
  }
};

/**
 * Render data tree sub-item
 * @param {string|array} item - Item label or collection of sub-item properties
 * @returns {object} React element tree describing sub-items
 */

export const renderSubItems = (item) => {
  if (item instanceof Array) {
    return item.map((item) => {
      if (typeof (item) == 'object') {
        return (
          <li key={item.id} className="datatree-subitem">
            <span className="datatree-subtitle">{item.title}</span>
            <ul className="datatree-sublist">{renderSubItems(item.value)}</ul>
          </li>
        );
      }
      return <li key={`subitem-${item}`} className="datatree-subitem"><span>{item}</span></li>;
    });
  }
  return <li className="datatree-subitem"><span>{item}</span></li>;
};
