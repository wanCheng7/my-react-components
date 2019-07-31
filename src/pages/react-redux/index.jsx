import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Button
} from 'antd';
import {
  ContentWrap,
  TitleWrap
} from '../pubStyle';
import {
  CountWrap
} from './style';
import { actions } from './store';

class MyPomponent extends PureComponent {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    const { myCount, handleIncrementFn, handleDecrementFn } = this.props;
    return (
      <ContentWrap>        
        <TitleWrap>react-redux</TitleWrap>
        <CountWrap>
          <Button onClick={handleDecrementFn}>减少</Button>
          <span className="num">{ myCount }</span>
          <Button onClick={handleIncrementFn(2)}>增加</Button>
        </CountWrap>
      </ContentWrap>
    )
  }
}

const mapStateToProps = (state) => {
  const reduxData = state.get('reduxData');
  return {
    myCount: reduxData.count
  }
};
const mapDispatchToProps = (dispatch) => ({
  handleIncrementFn: (data) => actions.handleIncrement(dispatch, data),
  handleDecrementFn: actions.handleDecrement(dispatch),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(MyPomponent)