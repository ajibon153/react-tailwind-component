export const FETCH = 'FETCH';
export const LOADING = 'LOADING';

const initialState = {
  list: null,
  isLoading: true,
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH':
      return { ...state, list: action.payload };
    case 'LOADING':
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
