// Text based adventure brief
// Objective: you will create an adventure game based on the user input and will result in different outcome
// Tasks
// 1) declare variables of alive, score
// 2) think of 5 questions that require some brain juice to solve
// 3) create a function that starts the game, asking the users name and imitate the score
// 4) if there is input, proceed to question 1
// 5) if the input is correct, proceed to question 2 and score + 1; otherwise dead and end game
// 5.1) repeat step 5 but for different questions
// 6) create a function that shows at game end, showing the score
// 7)the questions should be in functions, namely to show question and check answer and call next question
// 8) bonus: imitate another variable called current question and use this variable to determine which question to ask
// 9) bonus: check the format of user name, letter only and less than 10 characters

const questions = [
  {
    question:
      'Tell me one thing that you can never eat for breakfast?(one word answer)',
    answer: 'dinner',
  },
  {
    question:
      'What word is spelled incorrectly in every single dictionary (one word answer)?',
    answer: 'incorrectly',
  },
  {
    question: 'What goes up but never ever comes down? (one word answer)',
    answer: 'age',
  },
  {
    question: 'Is it legal for a man to marry his widow’s sister?',
    answer: 'no, but since he is dead it would be hard to do so.',
  },
  {
    question: 'What key can’t open any door? (one word answer)',
    answer: 'monkey',
  },
];

let userName = prompt('Please enter Your Name');

function gameStart(userName) {
  console.log(userName);
  questions.forEach((q, i) => {
    let questionNum = questions[i];
    console.log(questionNum);
    let userAnswer = prompt(q.question);
    console.log(userAnswer);
    if (userAnswer === q.answer) {
      alert(`Congradulation ${userName} You got the correct answer`);
    } else {
      alert(`Why so stupid ${userName}?: the correct answer was ${q.answer}`);
    }
  });
}

gameStart(userName);

// function userIdentity(){
//   // const userName = prompt('Please enter Your Name');
//   // const difficulty = prompt('Please enter which number you want to chose (from 1-5)');
//   let userHp = 5;

// }
