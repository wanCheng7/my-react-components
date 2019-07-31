import React from 'react';
import { Switch, HashRouter, Router, Route, Link, Redirect } from 'react-router-dom';
import asyncLoad from './asyncLoad';

const Product = () => {
  return (
    <div>
      <ul>
        <li><Link to='/product/nav1'>栏目1</Link></li>
        <li><Link to='/product/nav2'>栏目2</Link></li>
      </ul>  
      <Switch>
        <Route path='/product/nav1' exact component={Nav1} />
        <Route path='/product/nav2' exact component={Nav2} />
      </Switch>
    </div>
    
  )
}

const Nav1 = () => {
  return <p>栏目一内容</p>
}

const Nav2 = () => {
  return <p>栏目二内容</p>
}



/**
 * ==== 主页面路由 ====
 */
const rootRoute = () => {
  return (
    <Switch>
      {/* 组件页 */}
      <Route 
        path='/home' 
        exact 
        component={asyncLoad(() => 
          import('@/pages/home')
        )} 
      />
      {/* 嵌套路由 */}
      <Route 
        path='/product' 
        component={Product} /> 
      {/* redux */}
      <Route 
        path='/redux' 
        exact 
        component={asyncLoad(() => 
          import('@/pages/redux')
        )} 
      />
      {/* react-redux */}
      <Route 
        path='/react-redux' 
        exact 
        component={asyncLoad(() => 
          import('@/pages/react-redux')
        )} 
      />
      {/* context */}
      <Route 
        path='/context' 
        exact 
        component={asyncLoad(() => 
          import('@/pages/context')
        )} 
      />
      {/* mobx */}
      <Route 
        path='/mobx' 
        exact 
        component={asyncLoad(() => 
          import('@/pages/mobx')
        )} 
      />
      {/* 默认页面 */}
      <Route 
        path='/'
        exact
        render={() => <Redirect to='/home' />}
      />
      {/*404路由*/}
      <Route exact path='/*' render={() => <Redirect to='/home' />} />
    </Switch>
  )
}

export default rootRoute