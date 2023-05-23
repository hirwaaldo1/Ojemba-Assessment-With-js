/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // Check if the password is empty
  if (!password || password === "" || password == "null") return 0;

  // Check if the password has any repeated characters
  const findDublpsNumber = password.match(/(\d)\1+/);
  const findDublpsLetter = password.match(/(\w)\1+/);

  // Count the number and letter that are repeating
  let repeatedCharacters = findDublpsNumber ? findDublpsNumber[0].length : 0;
  repeatedCharacters += findDublpsLetter ? findDublpsLetter[0].length : 0;

  return repeatedCharacters === 0 ? 0 : repeatedCharacters <= 2 ? 1 : 2;
}
