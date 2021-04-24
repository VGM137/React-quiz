import React from 'react';
import ReactDOM from 'react-router-dom';
import { connect } from 'react-redux';
import { addAnswered, updateAnswered } from '../actions';

const Options = (props) => {
  
  const handleOption = (id) => {
    const { levelInfo, quizOrder, answered } = props
    let difficulty = 0;
    if(levelInfo.length == 20){
      difficulty = 10;
    }else if(levelInfo.length == 100){
      difficulty = 15;
    }else if(levelInfo.length > 100){
      difficulty = 20;
    };
    
    if(difficulty-answered.length == quizOrder.length){
      props.updateAnswered(id);
    }else{
      props.addAnswered(id);
    };
  };

  return (
    <div id="optionsContainer" className="optionsContainer">
      <button
        id="optionOne" 
        className="optionBtn" 
        value='false'
        onClick={() => handleOption(props.posibleAnswers[props.randomly[0]].id)}
        >{props.posibleAnswers[props.randomly[0]].element.name}
      </button>
      <button
        id="optionTwo" 
        className="optionBtn" 
        value='false'
        onClick={() => handleOption(props.posibleAnswers[props.randomly[1]].id)}
        >{props.posibleAnswers[props.randomly[1]].element.name}
      </button>
      <button
        id="optionThree" 
        className="optionBtn" 
        value='false'
        onClick={() => handleOption(props.posibleAnswers[props.randomly[2]].id)}
        >{props.posibleAnswers[props.randomly[2]].element.name}
      </button>
      <button
        id="optionFour" 
        className="optionBtn" 
        value='false'
        onClick={() => handleOption(props.posibleAnswers[props.randomly[3]].id)}
        >{props.posibleAnswers[props.randomly[3]].element.name}
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return ({
    levelInfo: state.levelInfo,
    quizOrder: state.quizOrder,
    posibleAnswers: state.posibleAnswers,
    randomly: state.randomly,
    answered: state.answered,
  });
};
const mapDispatchToProps = {
  addAnswered,
  updateAnswered,
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);