import React from 'react';
import ReactDOM from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Home.scss';
import logo from '../assets/static/RMLogo.png';

const Home = ({name}) => {
  console.log(name)
  return (
    <div id="home" className="home">
      <div id="homeImgCn" className="homeImgCn">
        <img id='homeImg' className='homeImg' src={logo} alt="Rick&MortyLogo" />
      </div>
      <Link to='/game'>
        <button id="btn" className="btn btnJugar">Jugar</button>
      </Link>
    </div>  
  )
};

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps, null)(Home);