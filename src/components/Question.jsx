import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Options from './Options'
import Next from './NextButton'
import Finish from './FinishButton'

const questionOptions = ({ posibleAnswers, quizOrder }) => {
  
  let hasCharacters = quizOrder.length !== 0;

  return(
    <>
      <div id="questioContainer" className="questionContainer">
        <h2 id='pregunta' className='pregunta'>¿Quién es este personaje?</h2>
        <div id="imageContainer" className="imageContainer">
          <img id='characterImg' className="characterImg" src={posibleAnswers[0].element.image} alt="" />
        </div>
        <Options />
        {hasCharacters 
          ?
            <Next />
            :
            <Link to='/'>
              <Finish />
            </Link>
        }
      </div>
    </>
    )
}

const mapStateToProps = state =>{
  return{
    posibleAnswers: state.posibleAnswers,
    quizOrder: state.quizOrder,
  }
}

export default connect(mapStateToProps, null)(questionOptions);