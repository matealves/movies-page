import styled from "styled-components";

export const Footer = styled.footer`
  box-shadow: 8px 3px 20px 5px rgb(0, 0, 0, 0.55);
  width: 100%;
  height: 90px;
  display: flex;
  padding: 0 5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 743px) {
    height: 80px;
    padding: 0 2.5rem;
  }
`;

export const Linkedin = styled.a`
  position: relative;
  text-decoration: none;
  color: #aaa;
  font-size: 0.7rem;
  padding-bottom: 2px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0%;
    height: 0.1px;
    background: #aaa;
    transition: 0.5s ease-out;
  }

  &:hover::after {
    left: 0%;
    width: 100%;
  }
`;
