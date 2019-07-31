import React, { PureComponent } from 'react';
import {
  Button
} from 'antd';
import {
  ContentWrap,
  TitleWrap
} from '../pubStyle';

const ThemContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      <ThemContext.Provider value="dark">
        <Toolbar />
      </ThemContext.Provider>
    );
  }
}

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  static contextType = ThemContext;
  render() {
    return <div>{this.context}</div>;
  }
}


class Main extends PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <ContentWrap>
        context
        <App />
      </ContentWrap>
    )
  }
}

export default Main