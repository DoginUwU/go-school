import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 90px;
  padding: 1em;
  border-radius: 1em;
  transition: box-shadow 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    filter: contrast(0%);
  }

  &:hover {
    box-shadow: 0px 0px 43px -10px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 200px;
  }
`;

export { Container };
