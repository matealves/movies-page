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
  }

  span {
    font-weight: 600;
    text-align: center;
    font-size: 0.88rem;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;
