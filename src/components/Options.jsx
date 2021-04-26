import React from 'react';
import { connect } from 'react-redux';
import { addAnswered, updateAnswered, nextState} from '../actions';
import '../assets/styles/components/Options.scss';

const Options = (props) => {
  
  const handleOption = (id, index) => {
    const { difficulty, quizOrder, answered } = props
    const optionsContainer = document.getElementById('optionsContainer');
    
    const option = optionsContainer.children[index]
    
    for(let i = 0; i < optionsContainer.children.length; i++){
      let opt = optionsContainer.children[i];
      opt.classList.remove('optionActiveBtn');
    }

    option.classList.add('optionActiveBtn');
    props.nextState(id)
    
    if(difficulty.number-answered.length == quizOrder.length){
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
        onClick={() => handleOption(props.posibleAnswers[props.randomly[0]].id, 0)}
        >{props.posibleAnswers[props.randomly[0]].element.name}
      </button>
      <button
        id="optionTwo" 
        className="optionBtn"
        onClick={() => handleOption(props.posibleAnswers[props.randomly[1]].id, 1)}
        >{props.posibleAnswers[props.randomly[1]].element.name}
      </button>
      <button
        id="optionThree" 
        className="optionBtn"
        onClick={() => handleOption(props.posibleAnswers[props.randomly[2]].id, 2)}
        >{props.posibleAnswers[props.randomly[2]].element.name}
      </button>
      <button
        id="optionFour" 
        className="optionBtn"
        onClick={() => handleOption(props.posibleAnswers[props.randomly[3]].id, 3)}
        >{props.posibleAnswers[props.randomly[3]].element.name}
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return ({
    difficulty: state.difficulty,
    quizOrder: state.quizOrder,
    posibleAnswers: state.posibleAnswers,
    randomly: state.randomly,
    answered: state.answered,
  });
};
const mapDispatchToProps = {
  addAnswered,
  updateAnswered,
  nextState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);