import styled from "styled-components";

export const ContainerFooter = styled.div`
  max-width: 1440px;
  padding: 0 208px;
  height: 80px;
  align-items: center;

  background-color: #000;
  display: flex;
  justify-content: space-between;

  div {
    img + img {
      margin-left: 10px;
    }
  }
`;
