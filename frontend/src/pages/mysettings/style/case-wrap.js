import styled from 'styled-components'

const CaseDetailsWrap = styled.div`
  margin-top: 24px;
  h1 {
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    margin-bottom: 24px;
  }
  
  p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 14px;
  }
  
  h2 {
    font-size: 24px;
    text-align: center;
  }
  
  .player-wrap{
    padding-top: 56.25%;
    position: relative;
    margin-bottom: 24px;
    
    &>div {
      position: absolute;
      width: 100% !important;
      height: 100% !important;
      top: 0;
      left: 0;
    }
  }
  
  .person-card{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    
    grid-gap: 12px;
    
    h3 {
      font-size: 18px;
      font-weight: 700;
      line-height: 18px;
      margin-bottom: 0;
    }
  }
`

export default CaseDetailsWrap
