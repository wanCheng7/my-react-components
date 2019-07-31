import React from 'react';
import { Skeleton } from 'antd';
import loadable from 'react-loadable';

/**
 * ==== 加载中 ===
 */
const loading = () => {
  return (
      <LoadPageStyle>
          <Skeleton loading={true} paragraph={{rows: 14}} title active/>
      </LoadPageStyle>
  )
}

export const AsyncLoad = (loader) => {
  return loadable({
      loader,
      loading
  })
}