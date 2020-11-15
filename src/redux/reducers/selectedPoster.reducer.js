// Thanks Joey Heitz for this idea!
const selectedPoster = (state = [], action) => {
  console.log('action', action);
  switch (action.type) {
    case 'ID_CALL':
      return action.payload;
    default:
      return state;
  }
};

export default selectedPoster;
