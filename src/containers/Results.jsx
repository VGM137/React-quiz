import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Results.scss';
import finalImage from '../assets/static/final_image.png';

const Results = (props) => {
  
  const results = props.answered.map(answer => answer)
  let fanLevel = ''
  const rightAnswers = [];
  results.forEach(result => {
    if(result === 'Right Answer'){
      rightAnswers.push(result);
    };
  });
  if(rightAnswers.length >= Math.floor(((props.difficulty.number)*.9))){
    fanLevel = `Eres un gran fan.`
  }
  if(rightAnswers.length < ((props.difficulty.number)*.9) && rightAnswers.length >= Math.floor(((props.difficulty.number)*.7)) ){
    fanLevel = `No estás tan mal.`
  }
  if(rightAnswers.length < ((props.difficulty.number)*.7) && rightAnswers.length > Math.floor(((props.difficulty.number)*.5)) ){
    fanLevel = `Te falta ver más capítulos de R&M.`
  }
  if(rightAnswers.length <= Math.floor(((props.difficulty.number)*.5))){
    fanLevel = `¿Alguna vez has visto R&M?`
  }

  return (
    <div className='resultsWrapper'>
      <div id="results" className="results">
          <div id="resultsContainer" className="resultsContainer">
            <h1 id="mode" className="mode">Nivel: {props.difficulty.id}</h1>
            <h1 id="puntuacion" className="puntuacion">Score: {rightAnswers.length}/{props.answered.length} </h1>
            <h1 id="fanLevel" className="fanLevel">{fanLevel}</h1>
          </div>
          <div id="finalImgContainer" className="finalImgContainer">
            <Link className='link' to="/">
              <img id="finalImg" className="finalImg" src={finalImage} alt=""  />
            </Link>
          </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    difficulty: state.difficulty,
    answered: state.answered,
  }
}

export default connect(mapStateToProps, null)(Results)