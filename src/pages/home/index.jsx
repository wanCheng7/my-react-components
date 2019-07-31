import React, { PureComponent } from 'react';
import { Button } from 'antd';

import ExportImg from '@/components/exportImg';
import MySwiper from '@/components/swiper';
import AutoLoadList from '@/components/autoLoadList';

import {
  ContentWrap,
  TitleWrap,
  ComponentWrap,
  LinkText,
  SwiperWrap
} from './style';
import store from '../redux/store';

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showCanvas: false
    }
    this.downloadFn = this.downloadFn.bind(this);
  }

  downloadFn() {
    this.setState({showCanvas: true})
  }
  render() {
    const count = store.getState().count;
    const { showCanvas } = this.state;
    let mapCover = [
      "http://img2.mukewang.com/szimg/5a39cd3f0001c09805400300.jpg",
      "http://img2.mukewang.com/szimg/5d08d0b308c9749706000338.jpg",
      "http://img4.mukewang.com/szimg/5d1032ab08719e0906000338.jpg",
      "http://img2.mukewang.com/szimg/5c3ef588088403df06000338.jpg",
      "http://img3.mukewang.com/szimg/5ce7e7970894f48706000338.jpg",
    ];
    return (
      <ContentWrap >
        <TitleWrap>下载图片组件{count}</TitleWrap>
        <ComponentWrap>
          <LinkText onClick={this.downloadFn}>下载二维码</LinkText>
          { showCanvas ? <ExportImg  /> : null }
        </ComponentWrap>
        <TitleWrap>swiper组件</TitleWrap>
        <ComponentWrap>
          <SwiperWrap>
            <MySwiper
              options={{
                loop: true,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
              }}
            >
              <div className="swiper-wrapper">
                {
                  mapCover.map((item, index) => {
                    return <div className="swiper-slide" key={index} data-id={index}><img src={item} alt="" width="100%" /></div>
                  })
                }
              </div>
              <div className="swiper-pagination"></div>
            </MySwiper>
          </SwiperWrap>
        </ComponentWrap>
        <TitleWrap>滚动自动加载组件</TitleWrap>
        <AutoLoadList />
      </ContentWrap>
    )
  }
} 


export default Home