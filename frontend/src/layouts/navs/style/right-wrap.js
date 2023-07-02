import styled from "styled-components";

const AuthRightNavWrap = styled.div`
  margin-top: 24px;
  position: sticky;
  top: 94px;
  
  .ant-card{
    border: none;
    background: linear-gradient(to top, rgb(240, 242, 245), rgb(247, 234, 244));
    .ant-card-body {
      padding: 20px 30px;
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
`

export default AuthRightNavWrap
