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
          quizOrder: action.payload
        }
      case 'RANDOM_NUMBERS':
        return{
          ...state,
          randomly: action.payload
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

      default: return state
    }

};

export default reducer;