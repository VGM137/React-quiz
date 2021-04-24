import React from 'react';
import ReactDOM from 'react-router-dom';
import { connect } from 'react-redux'
import getData from '../utils/getData'
import { chooseLevel } from '../actions'
import '../assets/styles/components/Game.scss'

const Game = props => {

  let data = new getData();

  const handleClick = level =>{
    console.log(level)
    if(level === 'easy'){
      data.easyData()
        .then(result => {
          let easyCharacters = result
          props.chooseLevel(easyCharacters)
          props.history.push('/playing')
        })
    } else if(level === 'medium'){
      data.mediumData()
        .then(result => {
          let mediumCharacters = result
          props.chooseLevel(mediumCharacters)
          props.history.push('/playing')
        })
    } else if(level === 'hard')
        data.hardData()
        .then(result => {
          let hardCharacters = result
          props.chooseLevel(hardCharacters)
          props.history.push('/playing')
    });
  };

  return ( 
    <div id='chooseLevel' className="chooseLevel">
      <button 
        id='easyButton' 
        className="easyButton btn"
        onClick={() => handleClick('easy')}>
          Fácil
      </button>
      <button 
        id='mediumButton' 
        className="mediumButton btn"
        onClick={() => handleClick('medium')}>
          Intermedio</button>
      <button 
        id='hardButton' 
        className="hardButton btn"
        onClick={() => handleClick('hard')}>
          Dificil</button>
    </div>
  )
};

const mapDispatchToProps = {
  chooseLevel,
}

export default connect(null, mapDispatchToProps)(Game);