import styled from "styled-components";

const RecallItemWrap = styled.div`
  .recall-card {
    background-color: #f0f0f0;
    border: none;
  }

  .ant-card {
    // background: linear-gradient(to top, rgb(247, 234, 244), rgb(247, 234, 244));
  }

  .recall-label {
    text-align: center;
    font-weight: 600;
    margin-top: 12px;
  }

  .ant-progress {
    padding-right: 0;
    width: 100%;

    .ant-progress-steps-outer {
      display: flex;
      width: 100%;

      .ant-progress-steps-item {
        width: calc(10% - 2px) !important;
      }
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    margin-bottom: 8px;
  }

  .recall-info {
    display: flex;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 12px;
    font-weight: 700;
    color: #cd3dae;
    grid-gap: 4px;
    flex-wrap: wrap;
    text-transform: uppercase;
    span {
      display: inline-flex;
      align-items: center;
      grid-gap: 4px;
      margin-right: 12px;
      svg {
        font-size: 16px;
      }
    }
  }
  
  .recall-description{
    font-size: 14px;
    line-height: 1.5;
  }
`

export default RecallItemWrap
