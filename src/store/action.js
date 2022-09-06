import DummyData from './dummy-data.json';
import { FETCH, LOADING } from './reducer';

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH, payload: DummyData });
    dispatch({ type: LOADING, payload: false });
  };
};
