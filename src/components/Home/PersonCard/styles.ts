import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 1rem;

  background: ${props => props.theme.palette.text.primary};
  border: 1px solid rgba(0, 0, 0, 0.19);
  border-radius: 0.5rem;
  padding: 1rem 2rem;

  width: 18rem;
  height: 20rem;

  overflow-wrap: anywhere;

  h2 {
    justify-self: start;
    margin-bottom: 1.2rem;
    font-size: 1.2rem;
  }

  img {
    border-radius: 50%;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export { Container };
