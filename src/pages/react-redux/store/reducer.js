import * as CONSTANTS from './constants';

const defaultState = {
  count: 0
};

// reducer 
export default (state=defaultState, action) => {
  console.log(action);
  switch(action.type) {
    case CONSTANTS.INCREACE_NUMBER: 
      return Object.assign({}, defaultState, {count: state.count+action.data});
    case CONSTANTS.REDUCE_NUMBER:
      return Object.assign({}, defaultState, {count: state.count-1});
    default: return state  //store实例创建之后默认会执行一次dispatch，就会进入这个case，目的是为了初始化store里的值
  }
}
