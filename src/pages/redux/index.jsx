import React, { PureComponent } from 'react';
import {
  Button
} from 'antd';
import { 
  ReduxWrap,
  CountWrap
} from './style';
import store from './store';

class Main extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: store.getState().count
    }
  }
  componentDidMount() {
    store.subscribe(() => 
      this.setState({
        count: store.getState().count
      })
    );
  }

  handleDecrement = () => {
    store.dispatch({
      type: 'decrement'
    })
  }
  handleIncrement = () => {
    store.dispatch({
      type: 'increment'
    })
  }
  render() {
    const { count } = this.state;
    return (
      <ReduxWrap>
        <CountWrap>
          <p className="title">redux示例：</p>
          <Button onClick={this.handleDecrement}>减少</Button>
          <span className="num">{ count }</span>
          <Button onClick={this.handleIncrement}>增加</Button>
        </CountWrap>
        
      </ReduxWrap>
    )
  }
}

export default Main