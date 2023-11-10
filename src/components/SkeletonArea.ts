import styled from "styled-components";

export const SkeletonArea = styled.ul`
  min-height: calc(100vh - 360px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  column-gap: 1rem;
  row-gap: 4rem;

  @media (max-width: 743px) {
    min-height: calc(100vh - 310px);
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;
