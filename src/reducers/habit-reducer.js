export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HABITS':
    console.log('ADD HABITS case');
      const { tree, id } = action;
      let newState = Object.assign({}, state, {
        [id]: {
          id: id,
          tree: tree
        }
      });
      console.log("new state = " , newState);

      return newState
    default:
      return state;
  }
};
