import React, {Component, PureComponent, Fragment } from 'react';
import {
  CanvasWrap
} from './exportImg.style';

import iconImg from 'assets/img/leke_logo.png';
import contentImg from 'assets/img/2.jpg';

class CanvasImg extends PureComponent {
  constructor(props) {
    super(props)
  }

  // 下载
  downloadFn() {
    let downloadImg = function(imgSrc, imgName) {
      let elem = document.createElement('a');
      elem.setAttribute('href', imgSrc);
      elem.setAttribute('download', imgName);
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
    }
    let canvasElem = document.getElementById('img_canvas');
    let dataURL = canvasElem.toDataURL("image/png");
    downloadImg(dataURL, '二维码.jpg')
  }
  // 初始化画布
  initCanvas() {
    const { schoolErpNo='123', elemId='img_canvas' } = this.props;
    const downloadFn = this.downloadFn;
    let ele = document.getElementById(elemId);
    let ctx = ele.getContext('2d');
    // 绘制背景
    ctx.fillStyle='#fff';
    ctx.fillRect(0, 0, 400, 555);
    //绘制字体
    ctx.fillStyle='#000';
    ctx.font ='24px 微软雅黑';
    ctx.fillText('打开微信或者支付宝扫一扫', 53, 130);
    // 组合图片list
    let imgList = [
      {
        src: iconImg,
        x: 22,
        y: 30,
        w: 74,
        h: 25
      },
      {
        src: contentImg,
        x: 50,
        y: 155,
        w: 300,
        h: 300
      },
    ]
    let count = imgList.length;
    let drewImg = (src, x, y, w, h, emit) => {
      let img = new Image();
      img.src = src;
      img.onload = () => {
        ctx.drawImage(img, x, y, w, h);
        emit(downloadFn);
      }
    }
    let emit = (cb) => {
      count -= 1;
      if(!count){
        cb && cb(ele);
      }
    }
    imgList.forEach( item => {
      let {src, x, y, w, h} = item;
      drewImg(src, x, y, w, h, emit)
    })
    // 绘制左上角icon
    // var iconImgObj = new Image();
    // iconImgObj.src = iconImg;
    // iconImgObj.onload = function() {
    //   ctx.drawImage(iconImgObj, 22, 30);
    //   // 绘制中心二维码
    //   var imgContent = new Image();
    //   imgContent.src = contentImg;
    //   imgContent.onload = function(){
    //     ctx.drawImage(imgContent, 50, 155);
    //     // 下载
    //     downloadFn && downloadFn(ele);
    //   }
    // }

    //绘制字体
    ctx.fillStyle='#000';
    ctx.font ='16px 微软雅黑';
    ctx.fillText(`二维码编号：${schoolErpNo}`, 220, 480);
  }
  componentDidMount() {
    this.initCanvas();
  }
  static defaultProps = {
    canvaswidth: 400,// 画布宽度
    canvasheight: 555,// 画布高度
  }

  render() {
    const { canvaswidth, canvasheight } = this.props;
    return (
      <CanvasWrap >
        <canvas id="img_canvas" width={canvaswidth} height={canvasheight}>您的浏览器版本过低</canvas>
      </CanvasWrap>
    )
  }
}

export default CanvasImg