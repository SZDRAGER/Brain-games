import getRandomInteger from '../get-random.js';
import playGame from '../index.js';

const textRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundData = () => {
  const number = getRandomInteger(1, 100);
  const question = `${number}`;
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => playGame(textRules, generateRoundData);
