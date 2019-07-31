import React from 'react';
import { Switch, HashRouter, Router, Route, NavLink } from 'react-router-dom';
import {
  FooterWrap
} from './style';

const PubFooter = () => {
  return (
    <FooterWrap>
      <p className="content">公共底部</p>
    </FooterWrap>
  )
}


export default PubFooter