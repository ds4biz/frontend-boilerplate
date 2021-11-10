import { Dispatch } from 'redux';
import { getDataSuccess } from 'store/reducers/examples';

export const getData = () => (dispatch: Dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((response) => dispatch(getDataSuccess(response)));
};
