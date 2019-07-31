import * as CONSTANTS from './constants';

// 增加
export const handleIncrement = (dispatch, data) => {
  return () => {
    dispatch({
      type: CONSTANTS.INCREACE_NUMBER,
      data
    })
  }
}  

// 减少
export const handleDecrement = (dispatch) => {
  return () => {
    dispatch({
      type: CONSTANTS.REDUCE_NUMBER
    })
  }
}