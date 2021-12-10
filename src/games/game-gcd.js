import getRandomInteger from '../get-random.js';
import playGame from '../index.js';

const textRules = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return findGreatestCommonDivisor(number2, number1 % number2);
};

const generateRoundData = () => {
  const number1 = getRandomInteger(1, 100);
  const number2 = getRandomInteger(1, 25);
  const question = `${number1} ${number2}`;
  const answer = String(findGreatestCommonDivisor(number1, number2));
  return [question, answer];
};
export default () => playGame(textRules, generateRoundData);
