import styled from "styled-components";

const TableContent = styled.div`
  border-right: 1px solid #bfbfbf;
  border-top: 1px solid #bfbfbf;
  &>div {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 2fr 2fr 2fr 1fr;
    @media(max-width: 768px) {
      grid-template-columns: 1fr;
    }
    &:nth-child(even) {
      // background-color: #9701fc;
      background-color: #f0f2f5;
    }
    &>div {
      border-left: 1px solid #bfbfbf;
      border-bottom: 1px solid #bfbfbf;
      padding: 2px 6px;
      color: #000;
      font-size: 15px;
      line-height: 1.5;
      min-height: 32px;
    }

    a {
      color: #9701fc;
      font-weight: 500;
      font-size: 15px;

      :hover, &.active {
        color: #000000;
      }
    }
  }
`

export default TableContent