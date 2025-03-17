import styled from "styled-components";

export const Styles = styled.div`

  height: 50px;

  .container {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      align-items: center;
      grid-gap: 32px;
      height: 100%;
      margin: 0;
      padding: 0;

      li {
        list-style: none;
        position: relative;
        height: 100%;

        a {
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          height: 100%;
          align-items: center;
        }

        .dropdown-content {
          top: 40px;
          position: absolute;
          width: 800px;
          right: 0;
          background-color: #f0f0f0;
          display: none;
          z-index: 10;
          border-radius: 8px;
          padding: 42px;

          &::after {
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            background-color: #f0f0f0;
            transform: rotate(45deg);
            top: -8px;
            right: 30px;
          }

          .drop-wrap {
            display: flex;
            justify-content: space-around;
            ul {
              display: flex;
              flex-direction: column;
              padding: 0;
              margin: 0;
              align-items: flex-start;
              grid-gap: 14px;
              li {
                h4 {
                  font-size: 24px;
                  font-weight: 700;
                }
                a {
                  padding-left: 8px;
                  font-size: 16px;
                  color: gray;
                  font-weight: 500;
                  :hover {
                    color: #cc0000;
                  }
                }
              }
            }
          }
        }
        :hover {
          .dropdown-content {
            display: block;
          }
        }
      }
    }
  }

.header {
    //box-shadow: 0px 3px 5px 0px #cc0000;
  }
  .header.active {
    box-shadow: 0px 3px 5px 0px #00000026;
}
`;