// Used to store targeted (by ID) movie and genre information
const selected = (state = [], action) => {
  switch (action.type) {
    case 'SET_SELECTED':
      return action.payload; //{Selected Movie Object} + [Genre Array]
    default:
      return state;
  }
};

export default selected;
