import styled from "styled-components";

export const Banner = styled.div`
  background-color: #03ffa5;
  max-width: 100%;
  min-height: 560px;
  display: flex;

  padding-left: 166px;

  section {
    max-width: 451px;

    div {
      padding-top: 80px;

      h1 {
        font-size: 64px;
        font-weight: 500;
        max-width: 451px;
        line-height: 76.8px;
        font-family: "Barlow";
        color: #000;
        text-transform: uppercase;

        margin-top: 0;
        margin-bottom: 6px;
      }

      p {
        font-family: "Barlow";
        font-size: 16px;
        line-height: 24px;
        color: #000;

        max-width: 329px;
        margin-bottom: 40px;
      }

      button {
        background-color: transparent;
        border: solid 1px #000;

        color: #000;
        font-weight: 500;
        font-family: "Barlow";
        font-size: 16px;
        line-height: 24px;

        border-radius: 6px;
        max-width: 209px;
        width: 100%;
        height: 48px;
        transition: 0.7s;
        cursor: pointer;

        &:hover {
          background-color: rgba(0, 0, 0, 0.25);
          border: none;
        }
      }
    }
  }

  main {
    display: flex;
    align-items: center;
    max-width: 250px;
    max-height: 271px;
    margin: auto 0;
    position: relative;
    top: 50px;
    div {
      min-width: 209px;

      height: 271px;

      background-color: #fff;
      border-radius: 8px;
      z-index: 0;
      box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);

      display: flex;
      flex-direction: column;

      justify-content: center;

      img {
        max-width: 128.64px;
        height: 134px;
        margin: 0 auto;
      }

      button {
        background-color: transparent;
        border: 1px solid #ee0e7d;
        font-size: 15px;
        max-width: 130px;
        margin: 0 auto;
        border-radius: 24px;
        min-width: 176px;
        min-height: 48px;
        color: #ee0e7d;
        margin-top: 10px;
        margin-bottom: 10px;

        transition: 0.7s;
        cursor: pointer;

        &:hover {
          background-color: #ee0e7d;
          border: none;
          color: #fff;
        }
      }
    }

    .zindex {
      position: relative;
      top: -140px;
      z-index: 2;
      max-width: 209px;
      width: 100%;
    }
    .left {
      position: relative;
      right: -90px;
    }
    .right {
      position: relative;
      left: -90px;
      top: 50px;
    }
  }
`;
