import styled from "styled-components";
import {Card} from "antd";

const MyPostInputWrap = styled(Card)`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0 10px 40px -3px, rgba(0, 0, 0, 0.05) 0px 4px 60px -2px;
  textarea {
    border-radius: 0;
    border: none;
    background-color: #f0f0f0;
    min-height: 120px;
    padding: 20px;
  }
`

export default MyPostInputWrap
