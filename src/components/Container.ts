import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 1.2rem;
    text-align: center;
    margin: 2rem 0;
    color: #bf9e02;
    font-weight: 600;

    @media (max-width: 743px) {
      margin: 1.4rem 0;
      font-size: 1rem;
    }
  }

  .erro {
    text-align: center;
    margin-top: 2rem;
    font-size: 90%;
    opacity: 0.5;
  }
`;
