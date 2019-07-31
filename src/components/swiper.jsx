import React, {PureComponent} from 'react';
import Swiper from 'swiper';
import "swiper/dist/css/swiper.min.css";

class MySwiper extends PureComponent {
  defConf = {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }
	constructor(props){
		super(props)
		this.state = {

		}
	}
	componentDidMount() {
		this.initFn();
  }
	initFn() {
    const { options } = this.props;
		new Swiper(
      this.refs.container,
      Object.assign({}, this.defConf, options)
    );
	}

	render() {
    const { children } = this.props;
		return (
      <div className="swiper-container" ref="container">
        { children }
      </div>
		)
	}
}

export default MySwiper