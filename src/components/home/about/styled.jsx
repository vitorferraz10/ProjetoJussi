import styled from "styled-components";

export const AboutStyled = styled.div`
  max-width: 1440px;

  padding: 64px 208px;
  background-color: #fff;
  display: flex;
  gap: 107px;

  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    h1 {
      margin: 0;
      color: #000;

      font-family: "Barlow";
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      text-transform: uppercase;
      max-width: 241px;
    }
    p {
      color: #000;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500px;
      font-family: "Barlow";

      max-width: 241px;

      margin: 0;
    }
    button {
      margin: 0;
      max-width: 162px;
      height: 48px;

      background-color: #fff;
      border: 1px solid #000;
      border-radius: 6px;

      color: #000;
      font-family: "Barlow";
      font-weight: 500;

      cursor: pointer;
      transition: 0.9s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.25);
        border: none;
      }
    }
  }

  img {
    width: 676px;
    height: 520px;
  }
`;
