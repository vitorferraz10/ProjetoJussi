import styled from "styled-components";

export const ContainerHeader = styled.div`
  max-width: 1400px;

  display: flex;
  justify-content: space-between;
  padding: 10px 24px;

  div {
    display: flex;
    gap: 33px;
    align-items: center;

    ul {
      display: flex;
      gap: 33px;
      list-style: none;

      font-size: 16px;
      font-weight: 500;
    }

    input {
      max-width: 240px;
      width: 100%;
      height: 40px;
      padding: 0 16px;
      display: flex;
      align-items: center;

      border: 1px solid #f2f2f2;
      border-radius: 24px;

      &::placeholder {
        font-size: 16px;
        line-height: 24px;
        color: #ee0e7d;
        text-transform: capitalize;
      }
    }

    button {
      max-width: 40px;
      width: 100%;
      height: 24px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: none;
      background-color: transparent;

      font-family: "Barlow";
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
