import React from 'react';
import ReactDOM from 'react-router-dom';
import { connect } from 'react-redux';
import { quizOrder, randomly, posibleAnswers } from  '../actions'
import Question from '../components/Question';

const Playing =  (props) => {

  const characters = props.levelInfo.map(character => character);
  console.log(characters)

  const quizOrder = [];
  const orderQuiz = () => {  
    let difficulty = 0
    if(characters.length == 20){
      difficulty = {
        number: 10,
        id: 'Fácil'
      }
    }else if(characters.length == 100){
      difficulty = {
        number: 15,
        id: 'Intermedio'
      }
    }else if(characters.length > 100){
      difficulty = {
        number: 20,
        id: 'Difícil'
      }
    }
    do{
      let number = Math.floor(Math.random() * (difficulty.number) ) + 1
        characters.map(function(character){
          let char = character.id;
          let charIndex = characters.indexOf(character);
          if(char === number){
            let splice = characters.splice(charIndex, 1);
            quizOrder.push(splice[0]);
          }
        }) 
    }while(quizOrder.length <= difficulty.number - 1)

    props.quizOrder([quizOrder, difficulty])
  };
  
  const random = () => {
    let randomNumbers = []
    do{
      let repeted = false
      let randomNumber = Math.floor(Math.random() * (4));
      randomNumbers.forEach(number => {
        if(number === randomNumber){
          repeted = true
        }
      });
      if(repeted == false){
        randomNumbers.push(randomNumber)
      };
    }while(randomNumbers.length < 4)
    props.randomly(randomNumbers)
  };

  const setOptions = () => {
    random()
    const rightAnswer = {
      id: 'Right Answer',
      element: quizOrder.shift(),
    }
    const posibleAnswers = [rightAnswer]
    do{
      let number = Math.floor(Math.random() * (props.levelInfo.length - 1) ) + 1;
      let posibleWrongAnswer = props.levelInfo[number];
      let match = false;
      posibleAnswers.forEach(answer => {
        if(answer.element.id === posibleWrongAnswer.id){
          match = true;
        };
      });
      if(match == false){
        const wrongAnswer = {
            id: 'Wrong Answer',
            element: posibleWrongAnswer,
          };
        posibleAnswers.push(wrongAnswer);
      };
    }while(posibleAnswers.length < 4);

    props.posibleAnswers(posibleAnswers)
  }

  orderQuiz()
  setOptions(quizOrder)

  return (
    <Question />
  );
};

const mapStateToProps = state => {
  return {
    levelInfo: state.levelInfo
  }
}
const mapDispatchToProps = {
  quizOrder,
  randomly,
  posibleAnswers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Playing);