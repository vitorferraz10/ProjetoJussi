import styled from "styled-components";

export const SliderContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 56px 208px;

  background-color: #fff;

  h1 {
    text-transform: uppercase;
    font-family: "Barlow";
    font-weight: 700;

    font-size: 32px;
    margin-top: 0;

    &::before {
      content: "//";
      font-size: 32px;
      color: #03ffa5;
      margin-right: 5px;
    }
  }

  section {
    display: flex;
    gap: 13px;

    div {
      max-width: 241px;

      border-radius: 4px;

      background-color: #fff;
      border: 1px solid #f2f2f2;

      display: flex;
      flex-direction: column;

      padding: 0 16px;
      //f2f2f2
    }

    img {
      width: 183px;
      height: 190px;
      margin: 0 auto;
    }

    h3 {
      font-size: 16px;
      line-height: 24px;
      font-family: "Barlow";
      font-weight: 500;
      margin: 16px 0;
    }

    p {
      color: #ee0e7d;
      font-size: 14px;
      margin-top: 0;
      margin-bottom: 16px;
      font-family: "Barlow";
    }

    ul {
      padding: 0 16px;
      margin-top: 0;

      font-size: 12px;
      color: #5b5b5b;
      font-family: "Barlow";
    }

    button {
      max-width: 209px;
      width: 100%;
      min-height: 48px;

      border: none;

      border-radius: 6px;

      background-color: #03ffa5;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: "Barlow";
      font-size: 16px;
      font-weight: 500;

      transition: 0.9s;
      cursor: pointer;
      margin-bottom: 8px;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
