import styled from "styled-components";

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 1rem;
    box-shadow: 8px 3px 20px 5px rgb(0, 0, 0, 0.8);

    @media (max-width: 743px) {
      margin-bottom: 0.5rem;
      width: 150px;
    }
  }

  span {
    font-weight: 600;
    text-align: center;
    font-size: 0.88rem;
    width: 180px;

    @media (max-width: 743px) {
      font-size: 0.8rem;
      width: 150px;
    }
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;
