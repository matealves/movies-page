import styled from "styled-components";

export const ContainerHeader = styled.header`
  box-shadow: 8px 3px 20px 5px rgb(0, 0, 0, 0.55);
  width: 100%;
  height: 90px;
  display: flex;
  padding: 0 5rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 743px) {
    height: 80px;
    padding: 0 2.5rem;
    max-width: 100vw;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex: 2;
  height: 45%;

  a {
    display: flex;
  }

  .logo {
    cursor: pointer;

    @media (max-width: 743px) {
      height: 32px;
    }
  }

  @media (max-width: 743px) {
    flex: 1;
    height: 45%;
  }
`;

export const MenuList = styled.ul`
  height: 45%;
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 1rem;
  color: #aaa;
  flex: 1;

  @media (max-width: 743px) {
    display: none;
  }
`;

export const Menu = styled.li`
  height: 45%;
  display: flex;
  margin: 0 1rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

export const Search = styled.div`
  height: 45%;
  display: flex;
  justify-content: right;
  flex: 2;

  .search {
    cursor: pointer;
  }

  @media (max-width: 743px) {
    flex: 1;
  }
`;
