import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers'


const initialState = {
  'name': 'Victor',
  'levelInfo': [],
  'difficulty': {
    number: '',
    id: 'Debes jugar para conseguir un Score',
  },
  'quizOrder': [],
  'randomly': [],
  'answered': [],
  'nextState': {value: ''}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, initialState, composeEnhancers)
console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  
  document.getElementById('app'))