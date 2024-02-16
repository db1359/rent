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
  line-height: 1;
  text-align: center;
  a {
    color: #9701fc;
    font-family: 'Kaushan Script', cursive;
    font-size: 32px;
    :focus, :hover {
      text-decoration: none;
    }
  }
`

export default LogoText
