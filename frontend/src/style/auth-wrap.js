import styled from "styled-components";
import {Card} from "antd";

const AuthWrap = styled(Card)`
  margin-top: 32px;
  margin-bottom: 52px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border: none;
  border-radius: 0;

  h2 {
    font-size: 24px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 12px;
  }
`

export default AuthWrap
