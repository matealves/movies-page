import styled from "styled-components";

export const MovieDetails = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  @media (max-width: 743px) {
    height: 100%;
  }

  h1 {
    margin: 2rem 0;
    font-size: 1.8rem;

    @media (max-width: 743px) {
      font-size: 1.2rem;
      text-align: center;
      margin: 2rem 0 1.2rem 0;
    }
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 743px) {
      flex-direction: column;
    }
  }

  img {
    width: 300px;
    border-radius: 1rem;
    box-shadow: 8px 3px 20px 15px rgb(0, 0, 0, 0.5);

    @media (max-width: 743px) {
      width: 200px;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3rem;
    max-width: 50%;

    @media (max-width: 743px) {
      margin-left: 0;
      max-width: 65%;
    }
  }

  button {
    background-color: #bf9e02;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: #fff;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 0.8rem;
    transition: all 0.3s;
  }

  button:hover {
    filter: brightness(0.8);
  }

  span {
    line-height: 160%;
    margin-bottom: 1rem;
    font-size: 0.9rem;

    @media (max-width: 743px) {
      font-size: 0.8rem;
      // text-align: justify;
    }
  }

  .release-date {
    opacity: 0.5;
    font-size: 0.8rem;
  }
`;
