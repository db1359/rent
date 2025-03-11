import styled from "styled-components";
import {Button} from "antd";

const CircleButton = styled(Button)`
  height: 40px;
  width: 40px;
  padding: 0;
  background-color: rgb(249, 147, 4);
  border-color: rgb(249, 147, 4);
  border-radius: 40px!important;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  :hover, :focus, :active {
    background-color: #fb02c5;
    border-color: #fb02c5;
    color: #fff;
  }
`

export default CircleButton