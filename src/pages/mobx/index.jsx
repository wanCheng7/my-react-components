import React, { PureComponent } from 'react';
import { observable, action } from 'mobx';
import { Provider, observer, inject } from 'mobx-react';
import {
  Button
} from 'antd';
import {
  ContentWrap,
  TitleWrap
} from '../pubStyle';

// 定义数据结构
class Store {
  // ① 使用 observable decorator     extendObservable(this, {a: 0})
  @observable a = 0;
}

// 定义数据的操作
class Actions {
  constructor({store}) {
    this.store = store;
  }
  // ② 使用 action decorator
  @action
  incA = () => {
    this.store.a++;
  }
  @action
  decA = () => {
    this.store.a--;
  }
  @action
  double = () => {
    this.store.a*=2;
  }
}

// ③实例化单一数据源
const store = new Store();
// ④实例化 actions，并且和 store 进行关联
const actions = new Actions({store});

// inject 向业务组件注入 store，actions，和 Provider 配合使用
// ⑤ 使用 inject decorator 和 observer decorator
@inject('store', 'actions')
@observer
class Demo extends PureComponent {
  render() {
    const { store, actions } = this.props;
    return (
      <div>
        <p>a = {store.a}</p>
        <p>
          <Button onClick={actions.incA}>增加 a</Button>
          <Button onClick={actions.decA}>减少 a</Button>
          <Button onClick={actions.double}>加倍 a</Button>
        </p>
      </div>
    )
  }
}

class Main extends PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <ContentWrap>
        <Provider store={store} actions={actions} >
          <Demo />
        </Provider>
      </ContentWrap>
    )
  }
}

export default Main
