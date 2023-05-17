export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */

export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if (password.length !== 10) {
    return false;
  }

  // Check if the password contains at least one number.
  if (!/\d/.test(password)) {
    return false;
  }

  // Check if the password contains at least one letter.
  if (!/[a-zA-Z]/.test(password)) {
    return false;
  }

  // Check if the password contains only only lower/upper case letters and numbers.
  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    return false;
  }

  // Check if the password contains at least one special character.
  if (/^[A-Z0-9]+$/.test(password) || /^[a-z0-9]+$/.test(password)) {
    return false;
  }

  // Check if the password is a forbidden password.
  if (forbiddenPasswords.includes(password)) {
    return false;
  }

  // Check if the password contains two consecutive digits in ascending order or descending order.
  for (let i = 0; i < password.length - 1; i++) {
    if (
      parseInt(password[i]) + 1 === parseInt(password[i + 1]) ||
      parseInt(password[i]) - 1 === parseInt(password[i + 1])
    ) {
      return false;
    }
  }

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) {
    return false;
  }
  return true;
}
