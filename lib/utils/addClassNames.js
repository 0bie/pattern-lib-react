/**
 * Add additional classNames
 * @param {array} classArr - Additional classNames
 * @returns {string} - Additional classNames
 */
export default function addClassNames(classArr) {
  var classNames = '';

  if (classArr instanceof Array) {
    classNames = classArr ? classArr.join(' ') : '';
  }

  return classNames;
}