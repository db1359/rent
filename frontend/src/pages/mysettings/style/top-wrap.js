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
