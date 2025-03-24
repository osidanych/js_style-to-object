/* eslint-disable prettier/prettier */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter((style) => style.length > 4)
    .reduce((prev, style) => {
      const index = style.indexOf(':');

      return {
        ...prev,
        [style.slice(0, index).trim()]: style.slice(index + 1).trim(),
      };
    }, {});

  return styles;
}

module.exports = convertToObject;
