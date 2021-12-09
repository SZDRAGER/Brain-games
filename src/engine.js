import readlineSync from 'readline-sync'; // a library to interact with user

const round = 3; // counter of correct answers

export default (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // getting a name of user
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let i = 0; i < round; i += 1) {
    // a loop for game rounds
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('Your answer: ');
    if (answer !== userInput) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
