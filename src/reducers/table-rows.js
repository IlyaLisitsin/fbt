import { getRows } from "../services/get-rows.service";

const ROWS_FETCH = 'ROWS-FETCH';
const ROWS_FETCH_SUCCESS = 'ROWS-FETCH_SUCCESS';
const ROWS_FETCH_ERROR = 'ROWS-FETCH_ERROR';

const initialState = {
  rowsCollection: [],
  isRowsCollectionFetching: false,
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ROWS_FETCH:
      return { ...state, isRowsCollectionFetching: true };

    case ROWS_FETCH_SUCCESS:
      return { ...state, isRowsCollectionFetching: false, rowsCollection: payload };

    case ROWS_FETCH_ERROR:
      return { ...state, isRowsCollectionFetching: false };

    default:
      return state;
  }
};

export default reducer;

export const getRowsFinal = dispatch => {
  dispatch({ type: ROWS_FETCH });

  getRows()
      .then(payload =>
          dispatch({
            type: ROWS_FETCH_SUCCESS,
            payload,
          })
      ).catch(err => {
    dispatch({ type: ROWS_FETCH_ERROR });
    console.warn(err);
  });
};
