const friendshipsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    default:
      return prevState;
  }
};

export default friendshipsReducer;
