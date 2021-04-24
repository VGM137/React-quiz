import React from 'react';
import ReactDOM from 'react-router-dom';
import { connect } from 'react-redux';
import { randomly, posibleAnswers } from '../actions'

const Next = (props) => {
  
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
    if(props.quizOrder.length > 0){
      random()
      const rightAnswer = {
        id: 'Right Answer',
        element: props.quizOrder.shift(),
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
    }else{
      console.log('Game Over')
    }
/*     hasCharacters = props.quizOrder.length !== 0;
    console.log(hasCharacters) */
    console.log(props.quizOrder.length)
  };

  return (
    <>
      <div id="btnContainer" className="btnContainer">
        <button 
          id="nextQuestion" 
          className="btnSiguiente btn"
          onClick={setOptions} 
          > Siguiente
        </button>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return ({
    quizOrder: state.quizOrder,
    levelInfo: state.levelInfo,
  })
};

const mapDispatchToProps = {
  posibleAnswers,
  randomly,
}

export default connect(mapStateToProps, mapDispatchToProps)(Next);

