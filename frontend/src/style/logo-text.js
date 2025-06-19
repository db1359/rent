import styled from "styled-components"

const LogoText = styled.h1`
margin-bottom: 0!important;
a {
  font-family: "Pico";
  color: #ffffff;
  font-size: 32px!important;
  font-weight: 500!important;
}
`

export const LogoTextLight = styled.h1`
  margin: 0;
  margin-left: 0;
  line-height: 1;
  text-align: left;
  a {
    color: #9701fc;
    font-family: 'arial black',sans-serif;
    font-size: 32px;
    :focus, :hover {
      text-decoration: none;
    }
  }
`

export default LogoText
