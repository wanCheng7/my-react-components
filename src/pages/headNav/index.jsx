import React from 'react';
import { Switch, HashRouter, Router, Route, NavLink } from 'react-router-dom';
import {
  NavWrap
} from './style';

const HeadMenu = () => {
  return (
    <NavWrap>
      <ul className="content_wrap">
        <li><NavLink to="/home">组件</NavLink ></li>
        <li><NavLink to="/product">嵌套路由</NavLink></li>
        <li><NavLink to="/redux">redux</NavLink></li>
        <li><NavLink to="/react-redux">react-redux</NavLink></li>
        <li><NavLink to="/context">context</NavLink></li>
        <li><NavLink to="/mobx">mobx</NavLink></li>
      </ul>
    </NavWrap>
  )
}


export default HeadMenu