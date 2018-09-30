/**
 * Get a user's name
 * @param {string} firstName - The user's first name
 * @param {string} lastName - The user's last name
 * @returns {string} - The user's first or last name
 */

export function getName(firstName, lastName) {

  if (typeof firstName !== 'string' && typeof lastName !== 'string') {
    throw new Error('getName method requires `firstName` or `lastName` as a string');
  }
  const givenName = firstName ? firstName : '';
  const surname = lastName ? lastName : '';
  return givenName + ' ' + surname;

}

/**
 * Get a user's initials
 * @param {string} firstName - The user's first name
 * @param {string} lastName - The user's last name
 * @returns {string} - The first letter of the user's first or last name
 */

export function getInitials(firstName, lastName) {

  if (typeof firstName !== 'string' && typeof lastName !== 'string') {
    throw new Error('getInitials method requires `firstName` or `lastName` as a string');
  }
  const firstInitial = firstName ? firstName.charAt(0) : '';
  const lastInitial = lastName ? lastName.charAt(0) : '';
  const initials = firstInitial + lastInitial;
  return initials.toUpperCase();

}
