import styled from "styled-components";

const ProfileTopWrap = styled.div`
  .ant-avatar {
    margin-top: -100px;
    background-color: #e0e0e0;
    border: 5px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 60px;
      line-height: 1!important;
    }
  }
  img {
    object-fit: cover;
  }
  
  .profile-title {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 0;
    margin-top: 12px;
  }
  
  .profile-username {
    font-size: 14px;
    color: #CD3DAE;
    font-weight: 500;
  }
  
  .profile-description{
      white-space: pre-wrap;
  }

  .editing {
    cursor: pointer;
  }
  
`

export default ProfileTopWrap
