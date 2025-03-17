import styled from "styled-components"
import BgImage from "../../../assets/img/landingpage.jpg"

const HomeWrap = styled.div`
  background-image: url(${BgImage});
  background-size: cover;
  background-position: center center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export default HomeWrap
