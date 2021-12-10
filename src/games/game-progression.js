import getRandomInteger from '../get-random.js';
import playGame from '../index.js';

const textRules = 'What number is missing in the progression?';

const generateProgression = (start, length, step, hiddenIndex) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      result += '.. ';
    } else {
      result += `${start + (step * i)} `;
    }
  }
  return result;
};

const generateRoundData = () => {
  const start = getRandomInteger(0, 25);
  const length = getRandomInteger(5, 10);
  const step = getRandomInteger(0, 10);
  const hiddenIndex = getRandomInteger(0, length - 1);
  const question = generateProgression(start, length, step, hiddenIndex);
  const answer = String(`${start + (step * hiddenIndex)}`);
  return [question, answer];
};
export default () => playGame(textRules, generateRoundData);
