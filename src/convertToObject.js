/* eslint-disable prettier/prettier */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const styles = sourceString.split(';').filter((style) => style.trim() !== '');

  styles.forEach((style) => {
    const [property, value] = style.split(':').map((item) => item.trim());

    if (property && value) {
      const camelCaseProperty = property.replace(/-([a-z])/g, (match, letter) =>
        letter.toUpperCase());

      styleObject[camelCaseProperty] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
