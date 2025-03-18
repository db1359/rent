import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6, a, p, div, li, button {
    font-family: "Open Sans", sans-serif;
  }

  .ant-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
    font-weight: 600;
    grid-gap: 4px;

    &.ant-btn-primary {
      // color: #ffffff;

      :hover {
        color: #f7ce07;
      }
    }

    &.ant-btn-donate {
      background-color: #f7ce07;
      color: #000000;
      font-weight: bold;

      :hover {
        background-color: #ffffff;
        color: #000000;
        font-weight: bold;
      }
    }

    &.ant-btn-headerlink {
      color: #ffffff;
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 14px;ƒ
      padding: 0 8px;

      :hover, &.active {
        color: #f7ce07;
      }
    }

    &.ant-btn-communitylink {
      // background-color: #F0F2F5;
      text-align: center;
      padding-top: 32px;
      padding-bottom: 30px;
      padding-left: 0px;
      padding-right: 0px;

      color: #000000;
      font-weight: 600;
      font-size: 16px;

      :hover, &.active {
        color: #9701fc;
      }
    }

    &.ant-btn-leftcolumnlink {
      // background-color: #F0F2F5;
      justify-content: left;
      padding-top: 0px;
      padding-bottom: 0px;
      padding-left: 0px;
      padding-right: 0px;

      color: #000000;
      font-weight: 600;
      font-size: 20px;

      :hover, &.active {
        color: blue;
      }
    }

    &.ant-btn-lg {
      height: 50px;
      grid-gap: 8px;

      svg {
        width: 24px;
        height: 24px;
      }

      &.ant-btn-circle {
        width: 50px;
      }
    }

    &.btn-middle {
      height: 42px;
      font-size: 16px;

      &.ant-btn-circle {
        width: 42px;

        svg {
          font-size: 18px;
        }
      }
    }
  }

  .ant-layout {
    .ant-layout-header {
      background: #000000;
      padding: 0;
      min-height: 72px;

      a {
        color: #ffffff;
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 15px;
      }

      &.fixed-header {
        background: none;
        position: fixed;
        width: 100%;
      }

      &.auth-header {
        position: sticky;
        top: 0;
        background-color: #ffffff;
        z-index: 1000;

        a {
          color: #9701fc;
          letter-spacing: 1px;
        }
      }
    }

    .ant-layout-content {
      min-height: calc(100vh - 170px);
    }

    .ant-layout-footer {
      min-height: 82px;
      background: #f0f2f5;

      &.fixed-footer {
        background: none;
        position: fixed;
        width: 100%;
        bottom: 0;
      }

      a {
        color: #000000;
        // font-weight: 500;
        font-size: 15px;

        :hover, &.active {
          color: #9701fc;
        }
      }
    }
  }

  .icon-button {
    background: transparent;
    border: none;
    font-size: 28px;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  .ant-input-lg {
    height: 50px;
  }

  .ant-input-affix-wrapper {
    padding-top: 0;
    padding-bottom: 0;
  }

  .upload-form-icon {
    font-size: 60px;
    margin: 0;
    line-height: 1;
    color: #f7ce07;
  }

  .upload-form-text {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .upload-form-hint {
    font-size: 12px;
    color: #b4b3b3;
    max-width: 360px;
    margin: auto auto 12px;
  }

  .upload-form-title {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .image-form-preview {
    position: relative;

    button {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 42px;
      height: 42px;
      font-size: 24px;
      padding: 0;
      border-radius: 30px;
      background: rgba(255, 255, 255, .3);
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      color: #f7ce07;
      cursor: pointer;
    }
  }

  .header-image-edit {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 42px;
    height: 42px;
    padding: 0;
    font-size: 24px;
    border-radius: 40px;
  }

  .share-drop-content {
    border-radius: 2px !important;

    li {
      width: 32px;
      height: 32px;
      padding: 3px !important;
      display: flex;
      grid-gap: 0;
      align-items: center;
      justify-content: center;
      line-height: 1;

      .social-share-button {
        width: 32px;
        margin-inline-end: 0 !important;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 20px;
          height: 20px;
          margin-right: 0 !important;
        }
      }

    }
  }

  .ant-form-item-label {
    padding-bottom: 0 !important;

    & > label {
      font-size: 16px !important;
      // text-transform: uppercase;
      // font-weight: 700;
      line-height: 12px;
    }
  }

  .link-preview-card-horizontal {
    border-radius: 16px;
    display: grid;
    grid-template-columns: 150px auto;
    border-color: #c9c9c9;
    cursor: pointer;

    .ant-card-cover {
      background-color: #9701fc;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
        opacity: .9;
      }
    }

    .ant-card-body {
      padding: 12px 20px;

      h4 {
        font-size: 14px;
        font-weight: 700;
        line-height: 1.5;
      }

      p {
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        margin-bottom: 0;
      }
    }
  }

  .link-preview-card {
    border-radius: 16px;
    border-color: #c9c9c9;
    cursor: pointer;

    .ant-card-cover {
      background-color: #9701fc;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;

      img {
        object-fit: cover;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        opacity: .9;
        height: 300px;
      }
    }

    .ant-card-body {
      padding: 12px 20px;

      h4 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
      }

      p {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
      }
    }
  }

  .ant-modal {
    .ant-modal-content {
      border-radius: 0;

      .ant-modal-confirm-btns {
        .ant-btn {
          border-radius: 0;

          &.ant-btn-primary {
            // background-color: #f7ce07;
            background-color: #9701fc;
          }
        }
      }
    }
  }

  .ant-upload-wrapper .ant-upload-drag .ant-upload {
    padding: 0;
  }

  .my-network-status {
    .ant-card-head {
      background-color: #9701fc;

      .ant-card-head-title {
        color: #ffffff;
      }
    }
  }

  .right-menu {
    display: flex;
    flex-direction: column;
    grid-gap: 18px;

    .right-menu-item {
      color: #9701fc;
      font-size: 18px;
      display: flex;
      align-items: center;
      grid-gap: 12px;
      font-weight: 600;

      svg {
        font-size: 24px;
      }
    }
  }

  .highcharts-credits {
    display: none;
  }

  .ant-tabs-top {
    .ant-tabs-nav {
      margin-bottom: 0;
      border-bottom: none;

      &::before {
        border: 0.4px solid #9701fc;
      }

      .ant-tabs-nav-wrap {
        .ant-tabs-nav-list {
          .ant-tabs-tab {
            width: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            border: 1px solid #9701fc;
            margin-left: 0 !important;

            &.ant-tabs-tab-active {
              border: 1px solid #9701fc;
              background-color: #9701fc;

              .ant-tabs-tab-btn {
                color: #ffffff;
              }
            }

            .ant-tabs-tab-btn {
              color: #9701fc;
              font-weight: 700;
              background-color: transparent;
              border: none;
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }

  .ant-select-lg {
    height: 50px;

    .ant-select-selector {
      height: 50px !important;
      padding: 0 12px;
      display: flex;
      align-items: center;

      .ant-select-selection-search {
        height: 50px;

        input {
          height: 50px !important;
        }
      }

      .ant-select-selection-item {
        height: 40px;
        display: inline-flex;
        align-items: center;
      }
    }
  }

  .side-user-card {
    display: flex;
    grid-gap: 12px;
    align-items: center;

    .ant-avatar {
      background-color: #e0e0e0;
      cursor: pointer;
    }

    .info-area {
      display: flex;
      flex-direction: column;
      grid-gap: 8px;

      h3 {
        font-size: 18px;
        font-weight: 700;
        line-height: 18px;
        margin-bottom: 0;
      }

      p {
        font-size: 12px;
        line-height: 12px;
        font-weight: 600;
        margin: 0;
        display: flex;
        align-items: center;
        grid-gap: 4px;
        color: #9701fc;
      }
    }
  }

  .editor-toolbar {
    .rdw-option-wrapper {
      width: 32px;
      height: 32px;

      &.rdw-option-active, :hover {
        background-color: blue;
        border: 1px solid #6c6c6c;
        box-shadow: none;
      }
    }
  }

  .side-feed-area {
    margin-top: 24px;
    position: sticky;
    top: 94px;

    .ant-card {
      .ant-card-head {
        background-color: #9701fc;

        .ant-card-head-title {
          color: #ffffff;
        }
      }

      .ant-card-body {
        .feed-side-card {
          display: flex;
          grid-gap: 8px;

          img {
            object-fit: cover;
          }

          p {
            font-size: 12px;
            font-weight: 700;
          }
        }
      }
    }
  }

  .criminal-card {
    padding: 30;
    border: none;
    text-align: center;

    .ant-card-body {
      padding: 50;
      border: none;
      box-shadow: none;

      img {
        width: 150px;
        height: 150px;
        //border-bottom-left-radius: 32px;
        //border-top-right-radius: 32px;
        //border-top-left-radius: 32px;
        border-radius: 150px;
        max-width: 100%;
        margin-bottom: 12px;
        //box-shadow: rgba(255, 0, 0, 0.4) 2px 2px, rgba(255, 0, 0, 0.3) 4px 4px, rgba(255, 0, 0, 0.2) 6px 6px, rgba(255, 0, 0, 0.1) 8px 8px, rgba(255, 0, 0, 0.05) 10px 10px;
      }

      h3 {
        font-size: 24px;
        margin-bottom: 8px;
        font-weight: 700;
      }

      h5 {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: #868686;

        svg {
          width: 18px;
          height: 18px;
          margin-right: 4px;
        }
      }

      p {
        font-size: 16px;
        color: #000000;
        line-height: 1.4;
      }
    }
  }

  .pdf-card {
    background: none;
    border: none;

    .ant-card-body {
      padding: 32px 0;

      p {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 8px;
      }
    }

    .ant-card-cover {
      border: 1px solid #333;
      outline: 3px solid #333;
      outline-offset: 2px;
      cursor: alias;

      a {
        img {
          max-width: 100%;
        }
      }
    }
  }

  .repost-wrap {
    display: grid;
    //grid-template-columns: 50px auto;
    //grid-gap: 16px;
    //padding: 12px;
    //border: 1px solid #e3e3e3;
    border: 1px solid #fec5e5;
    border-radius: 16px;

    .feed-header {
      align-items: center;
      justify-content: space-between;
      display: flex;
      padding: 5px;
      margin-bottom: 4px;

      button {
        background: none;
        border: none;
        padding: 0;
        font-size: 24px;
        cursor: pointer;
        line-height: 1;
        color: #aaaaaa;
      }

      & > div {
        align-items: center;
        justify-content: space-between;
        display: flex;
        grid-gap: 12px;

        h4 {
          font-weight: 800;
          font-size: 14px;
          margin: 0;
        }

        p {
          margin: 0;
          font-size: 12px;
          //font-weight: 600;
          color: #989898;
        }
      }
    }

    .feed-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 14px;

      & > div {
        display: flex;
        grid-gap: 24px;

        button {
          background: none;
          border: none;
          font-size: 12px;
          display: flex;
          align-items: center;
          grid-gap: 8px;
          color: #aaaaaa;
          cursor: pointer;
          padding: 0;

          svg {
            width: 20px;
            height: 20px;
            line-height: 16px;
          }

          :hover, &.active {
            color: #9701fc;
          }
        }
      }
    }
  }

  a.active {
    color: #9701fc;
  }
`

export default GlobalStyle
