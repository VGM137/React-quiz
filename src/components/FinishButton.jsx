import React from 'react';
import ReactDOM from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/NextButton.scss'

const FinishButton = (props) => {

  return (
    <>
      <div id="btnContainer" className="btnContainer">
        <button 
          id="nextQuestion" 
          className="btnSiguiente btn"
          > Terminar
        </button>
      </div>
    </>
  );
};


export default connect(null, null)(FinishButton);