import styled from "styled-components";

export const MovieList = styled.ul`
  min-height: calc(100vh - 360px);
  padding: 0 5rem 2rem 5rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  column-gap: 1rem;
  row-gap: 4rem;

  @media (max-width: 743px) {
    min-height: calc(100vh - 310px);
    padding: 0 2rem 2rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;
