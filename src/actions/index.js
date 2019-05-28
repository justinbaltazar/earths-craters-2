// keys for actiontypes
export const ActionTypes = {
  UPDATE_CRATERS: 'UPDATE_CRATERS',
  UPDATE_SEARCH: 'UPDATE_SEARCH',
};


export function updateCraters(data) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.UPDATE_CRATERS,
      data,
    });
  };
}
