import React, { PureComponent } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { List, message, Avatar, Spin } from 'antd';  
import reqwest from 'reqwest';

import {
  ListWrap
} from './autoLoadList.style';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class InfiniteListExample extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      loading: false,
      hasMore: true,
    };
  }

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results,
      });
    });
  }

  fetchData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res)
      }
    })
  };
  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      laoding: true
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        laoding: false
      })
    })
  }
  render() {
    let { data, loading, hasMore  } = this.state;
    return (
      <ListWrap>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <List
            dataSource={data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta 
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {loading && hasMore && 
              <div className="demo-loading-container">
                <Spin />
              </div> 
            }
          </List>
        </InfiniteScroll>
      </ListWrap>
    )
  }
}

export default InfiniteListExample