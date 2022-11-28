import {useState} from 'react';

function App() {

  const questions = [
    {
      questionTopic: 'What team did Kobe Bryant play for?',
      answerOptions:[
        {answer: 'Toronto Raptors', isCorrect: false},
        {answer: 'LA Lakers', isCorrect: true},
        {answer: 'Boston Celtics', isCorrect: false},
        {answer: 'LA Clippers', isCorrect: false},
      ]
    },
    {
      questionTopic: 'What year did the Raptors win their Championship?',
      answerOptions:[
        {answer: '2016', isCorrect: false},
        {answer: '2017', isCorrect: false},
        {answer: '2018', isCorrect: false},
        {answer: '2019', isCorrect: true},
      ]
    },
    {
      questionTopic: 'The NBA All-Star Weekend was held in Toronto in what year?',
      answerOptions:[
        {answer: '2002', isCorrect: false},
        {answer: '2012', isCorrect: false},
        {answer: '2016', isCorrect: true},
        {answer: '2006', isCorrect: false},
      ]
    },
    {
      questionTopic: 'Which former Raptors player won in arguably the best dunk contest ever?',
      answerOptions:[
        {answer: 'Vince Carter', isCorrect: true},
        {answer: 'Tracy McGrady', isCorrect: false},
        {answer: 'Muggsy Bogues', isCorrect: false},
        {answer: 'Andrea Bargnani', isCorrect: false},
      ]
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerBtnClick = (isCorrect) => {
    if (isCorrect){
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion >= questions.length){
      setShowScore(true);
    } else {
    setCurrentQuestion(nextQuestion);
    }
  }

  const playAgain = () =>{
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }

  return (
    <div className="App">
      {showScore ? (
        <div className='score-section'>
          <h1>You scored {score} out of {questions.length}</h1>
          <button className='reset-btn' onClick={playAgain}>Play Again</button>
        </div>
        ):
        <div className='quiz-card'>
          <div className='question-section'>
            <h1 className='question-header'>Question {currentQuestion+1}/{questions.length}</h1>
            <div className='question'>{questions[currentQuestion].questionTopic}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((option, key) => {
              return <button className='answer-option' key={key} onClick={() => handleAnswerBtnClick(option.isCorrect)}>{option.answer}</button>
            })}
              
          </div>
        </div>
      }
    </div>
  );
}

export default App;
