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

    .btnOpenModal {
      border: #f2f2f2 1px solid;
      width: max-content;
      min-width: max-content;
      padding: 20px;
      border-radius: 10px;
      color: red;
      transition: 0.9s;

      &:hover {
        border: solid 1px #ee0e7d;

        cursor: pointer;
      }

      span {
        margin-left: 10px;
        text-transform: uppercase;
      }
    }

    .modal {
      position: absolute;
      top: 20px;
      border-radius: 25px;
      right: 497px;
      bottom: 40px;
      z-index: 21;
      max-width: 300px;
      width: 100%;
      background-color: #f2f2f2;

      max-height: 500px;
      overflow-y: scroll;
      overflow-x: hidden;

      button {
        font-size: 30px;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        position: relative;
        left: 250px;
        bottom: 42%;
        cursor: pointer;
      }
    }
  }
`;
