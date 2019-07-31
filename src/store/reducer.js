import { combineReducers } from 'redux-immutable';
import { reducer as reduxReducer } from '@/pages/react-redux/store';

const reducer = combineReducers({
  reduxData: reduxReducer
})

export default reducer