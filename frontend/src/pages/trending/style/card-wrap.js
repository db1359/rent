import styled from "styled-components";
import {Card} from "antd";

const ProfileCardWrap = styled(Card)`
  border: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .ant-card-cover {
    img {
      
    }
  }

  .ant-card-body {
    text-align: center;

    .ant-avatar {
      margin-top: -80px;
      border: 3px solid #ffffff;
      margin-left: auto;
      background-color:#e0e0e0;
      .ant-avatar-string{
        font-size: 42px;
      }
    }

    h3 {
      font-size: 18px;
      font-weight: 800;
      margin-top: 12px;
      margin-bottom: 8px;
      line-height: 18px;
    }

    p {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 4px;
      font-weight: 500;
      color: #b4b4b4;

      &.profile-description {
        min-height: 35px;
      }
      &.followings {
        margin-top: 18px;
        margin-bottom: 12px;
        color: #8f3dce;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 8px;
      }
    }

    .ant-btn {
      width: 150px;
    }
  }
`

export default ProfileCardWrap
