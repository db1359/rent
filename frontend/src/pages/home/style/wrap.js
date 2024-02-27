import styled from "styled-components"
//import BgImage from "../../../assets/img/arianna-poster.jpg"
// import BgImage from "../../../assets/img/kids.jpg"
// import BgImage from "../../../assets/img/kids2.jpeg"
// import BgImage from "../../../assets/img/kids11.jpg"
// import BgImage from "../../../assets/img/pink.jpeg"
import BgImage from "../../../assets/img/courtfraud.jpg"

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
