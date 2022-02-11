import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  .top {
    height: 70px;
    .link {
      padding: 0 19px;
      :hover {
        background-color: #000;
        color: #ccc;
      }
    }

    .active {
      background-color: #000;
      position: relative;
      ::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -6px;
        top: 64px;
        width: 12px;
        height: 7px;
        background: url(${require('assets/images/sprite-01.png')});
        background-position: -105px -70px;
        background-size: 120px auto;
      }
    }
  }

  .line {
    height: 5px;
    background-color: #c20c0c;
  }

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    font-size: 14px;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    font-size: 12px;
    color: #ccc;
    :hover {
      border-color: #fff;
    }
  }
`
export const Logo = styled.div`
  width: 177px;
  height: 69px;
  background-position: 0 0;
`

export const HotIcon = styled.div`
  position: absolute;
  left: 100px;
  top: 21px;
  width: 28px;
  height: 19px;
  background-position: -190px 0;
`
