import styled from "styled-components";

export const ContainerNewsletter = styled.div`
  max-width: 1440px;
  padding: 136px 382px;

  background-color: #000000;

  h1 {
    color: #fff;
    max-width: 676px;

    line-height: 40px;
    text-align: center;
    text-transform: uppercase;

    font-family: "Barlow";
    font-weight: 700;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 93px;
    max-width: 502px;
    margin: 0 auto;

    border-bottom: 1px solid #03ffa5;
    padding-bottom: 5px;

    input {
      max-width: 320px;
      width: 100%;
      margin: 0 auto;
      background-color: transparent;
      color: #fff;
      font-family: "Barlow";
      line-height: 24px;
      height: 60px;
      border: none;
      height: 40px;

      &::placeholder {
        font-family: "Barlow";
        color: #fff;
        font-weight: 500;
        line-height: 24px;
        border: none;
      }

      &:focus {
        border-top: none;
        padding: 0 10px;
      }
    }

    button {
      background-color: transparent;
      color: #03ffa5;
      font-family: "Barlow";
      font-weight: 500;
      display: flex;
      align-items: center;
      border: none;
      height: 40px;

      justify-self: flex-start;
      cursor: pointer;

      transition: 0.9s;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
