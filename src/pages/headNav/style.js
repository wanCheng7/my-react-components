import styled from 'styled-components';

export const NavWrap = styled.div`
  width: 100%;
  height: 100px;
  line-height: 100px;
  background: #eee;
  .content_wrap {
    width: 1200px;
    margin: 0 auto;
    padding: 0;
    li {
      float: left;
      margin-right: 50px;
      list-style: none;
      a {
        font-size: 14px;
        color: #4183c4;
      }
    }
  }
`