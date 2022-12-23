// import ActionTypes from '../actions';

const initialState = {
  numTopics: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ActionTypes.SEARCH_SUCCESS:
    //   return Object.assign({}, state, { listings: action.payload.results, numResults: action.payload.numResults });
    // case ActionTypes.FETCH_LISTING_SUCCESS:
    //   return Object.assign({}, state, { listing: action.payload });
    // case ActionTypes.FETCH_LISTINGS_SUCCESS:
    //   return Object.assign({}, state, { listings: action.payload });
    default:
      return state;
  }
};

export default reducer;
