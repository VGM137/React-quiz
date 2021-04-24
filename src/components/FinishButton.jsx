import React from 'react';
import ReactDOM from 'react-router-dom';
import { connect } from 'react-redux';

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