import getRandomInRange from '../get-random.js';
import playGame from '../index.js';

const operators = ['+', '*', '-'];
const textRules = 'What is the result of the expression?';

const getExpression = (firstInteger, secondInteger, operator) => {
  switch (operator) {
    case '+':
      return firstInteger + secondInteger;
    case '*':
      return firstInteger * secondInteger;
    case '-':
      return firstInteger - secondInteger;
    default: throw new Error(`I don't know what is it: ${operator}'`);
  }
};

const generateRoundData = () => {
  const firstInteger = getRandomInRange(1, 100);
  const secondInteger = getRandomInRange(1, 10);
  const randomOperator = operators[getRandomInRange(0, operators.length - 1)];
  const question = `${firstInteger} ${randomOperator} ${secondInteger}`;
  const answer = String(getExpression(firstInteger, secondInteger, randomOperator));
  return [question, answer];
};
export default () => playGame(textRules, generateRoundData);
