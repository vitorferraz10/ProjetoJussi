import styled from "styled-components";

export const AboutVtexContainer = styled.div`
  max-width: 1440px;

  padding: 136px 382px;
  background-color: #ee0e7d;

  h1 {
    color: #fff;
    max-width: 676px;

    text-transform: uppercase;
    font-family: "Barlow";
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    text-align: center;

    margin-bottom: 32px;
  }

  p {
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    font-family: "Barlow";
    font-weight: 500;
  }

  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    justify-content: center;
    font-size: 32px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
