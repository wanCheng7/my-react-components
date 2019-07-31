import React from 'react';
import { Skeleton } from 'antd';
import loadable from 'react-loadable';

/**
 * ==== 加载中 ===
 */
const loading = () => {
  return (
      <div>
          <Skeleton loading={true} paragraph={{rows: 14}} title active/>
      </div>
  )
}

export default (loader) => {
  return loadable({
      loader,
      loading
  })
}