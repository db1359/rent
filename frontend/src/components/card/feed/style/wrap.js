import styled from "styled-components";
import {Card} from "antd";

const FeedCardWrap = styled(Card)`
  .ant-card-body {
    padding: 24px;
    align-items: center;
  }

  .ant-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e0e0e0;

    span {
      line-height: 1 !important;
    }
  }

  .feeds-content {
    white-space: pre-wrap;
    word-break: break-all;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.6;
    padding: 10px;

    a {
      color: #9701fc;
      font-weight: 600;
    }
  }

  .feed-image {
    margin-bottom: 12px;
  }

  .content-wrap {
    display: grid;
    //grid-template-columns: 50px auto;
    grid-gap: 16px;

    .feed-header {
      align-items: center;
      justify-content: space-between;
      display: flex;
      margin-bottom: 4px;

      button {
        background: none;
        border: none;
        padding: 0;
        font-size: 24px;
        cursor: pointer;
        line-height: 1;
        color: #aaaaaa;
      }

      & > div {
        align-items: center;
        justify-content: space-between;
        display: flex;
        grid-gap: 12px;

        h4 {
          font-weight: 800;
          font-size: 14px;
          margin: 0;
        }

        p {
          margin: 0;
          font-size: 12px;
          // font-weight: 600;
          color: #989898;
        }
      }
    }

    .feed-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 14px;

      & > div {
        display: flex;
        grid-gap: 24px;

        button {
          background: none;
          border: none;
          font-size: 12px;
          display: flex;
          align-items: center;
          grid-gap: 8px;
          color: #aaaaaa;
          cursor: pointer;
          padding: 0;

          svg {
            width: 20px;
            height: 20px;
            line-height: 16px;
          }

          :hover, &.active {
            color: #9701fc;
          }
        }
      }
    }
  }
`

export default FeedCardWrap
