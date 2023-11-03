import styled from "styled-components";

export const MovieList = styled.ul`
  padding: 0 5rem 6rem 5rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  column-gap: 1rem;
  row-gap: 4rem;

  @media (max-width: 743px) {
    padding: 0 2rem 3rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;
