import styled from "styled-components";

export const AreaPages = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 0 5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    border: none;
    background-color: #bf9e02;
    color: #fff;
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 0.8rem;
  }

  button:disabled {
    background-color: #aaa;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:hover:not(:disabled) {
    filter: brightness(0.8);
  }

  .current-page {
    display: block;
    margin: 0 0.8rem;
    padding: 0 0.2rem;
  }

  @media (max-width: 743px) {
    height: 60px;
    padding: 0 2.5rem;
  }
`;
