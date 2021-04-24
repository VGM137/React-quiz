export const chooseLevel = payload => ({
  type: 'CHOOSE_LEVEL',
  payload,
});

export const quizOrder = payload => ({
  type: 'QUIZ_ORDER',
  payload,
});

export const randomly = payload => ({
  type: 'RANDOM_NUMBERS',
  payload,
});

export const posibleAnswers = payload => ({
  type: 'POSIBLE_ANSWERS',
  payload,
});

export const addAnswered = payload => ({
  type: 'ADD_ANSWERED',
  payload,
});
export const updateAnswered = payload => ({
  type: 'UPDATE_ANSWERED',
  payload,
});