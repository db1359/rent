import styled from "styled-components";

const AuthLeftNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  margin-top: 24px;
  position: sticky;
  top: 94px;
  // font-size: 20px;
  // font-weight: 600;
  color: #000000;

  .ant-card{
    border: none;
    // background: linear-gradient(to top, rgb(240, 242, 245), rgb(247, 234, 244));
    .ant-card-body {
      padding: 320px 20px 20px 0px;
      h3 {
        font-size: 18px;
        font-weight: 700;
        text-align: left;
      }
      
      img {
        max-width: 100%;
        object-fit: cover;
      }
    }
  }

  .child-area{
    display: flex;
    flex-direction: column;
    grid-gap: 12px;
    .child-link {
      font-size: 14px;
      padding-top: 5px;
      // padding-left: 12px;
      color: #8f3dce;
    }
  }
`

export default AuthLeftNavWrap
