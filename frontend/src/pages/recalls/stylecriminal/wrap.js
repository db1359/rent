import styled from 'styled-components'

const RecallSingleWrap = styled.div`
  padding: 24px 0;
  
  h1 {
    font-size: 32px;
    text-align: center;
    line-height: 42px;
    font-weight: 700;
  }
  
  h3{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }
  
  h4{
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 16px;
  }
  
  .content{
    font-size: 14px;
    line-height: 2;
    white-space: pre-wrap;
  }
  
  .pdf-link {
    outline: rgb(51, 51, 51) solid 3px;
    display: block;
    padding-top: 120%;
    position: relative;

    &>div {
      pointer-events: none;
      border: 1px solid rgb(51, 51, 51);
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      padding: 1px ;
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  }
`

export default RecallSingleWrap
