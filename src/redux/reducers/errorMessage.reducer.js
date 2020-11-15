const errorMessage = (state = null, action) => {
  if (action.type === 'ERROR_MSG') {
    return action.payload;
  }

  return state;
};

export default errorMessage;
