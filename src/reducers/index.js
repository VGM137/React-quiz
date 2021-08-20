const reducer = (state, action) => {

    switch(action.type){
      case 'CHOOSE_LEVEL':
        return {
          ...state,
          levelInfo: action.payload,
        }
      case 'QUIZ_ORDER':
        return {
          ...state,
          quizOrder: action.payload[0],
          difficulty: action.payload[1]
        }
      case 'RANDOM_NUMBERS':
        return{
          ...state,
          randomly: action.payload,
          nextState: { value: '' }
        }
      case 'POSIBLE_ANSWERS':
        return{
          ...state,
          posibleAnswers: action.payload
        };
      case 'ADD_ANSWERED':
        return{
          ...state,
          answered: [...state.answered, action.payload]
        }
      case 'UPDATE_ANSWERED':
        state.answered.splice(state.answered.length-1, 1, action.payload)

      case 'NEXT_STATE':
        return{
          ...state,
          nextState: { value: action.payload }
        }

      case 'RESET':
        return{
          name: 'Victor',
          levelInfo: [],
          difficulty: {
            number: '',
            id: 'Debes jugar para conseguir un Score',
          },
          quizOrder: [],
          randomly: [],
          answered: [],
          nextState: {value: ''}
        }
          
      default: return state
    }

};

export default reducer;