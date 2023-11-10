import styled from "styled-components";

export const SkeletonItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  .item {
    width: 180px;
    height: 271px;

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
    height: 21px;
    border-radius: 0.5rem;

    @media (max-width: 743px) {
      font-size: 0.8rem;
      width: 150px;
    }
  }

  .item,
  span {
    opacity: 0.28;
    background-image: linear-gradient(
      90deg,
      #333 0px,
      rgba(204, 204, 204, 0.25) 40px,
      #333 80px
    );
    background-size: 600px;
    animation: shine-avatar 1.6s infinite linear;
  }

  @keyframes shine-lines {
    0% {
      background-position: -100px;
    }
    40%,
    100% {
      background-position: 140px;
    }
  }
  @keyframes shine-avatar {
    0% {
      background-position: -32px;
    }
    40%,
    100% {
      background-position: 208px;
    }
  }
`;
