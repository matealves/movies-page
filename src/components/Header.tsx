import {
  ContainerHeader,
  Logo,
  MenuList,
  Menu,
  Search,
} from "./ContainerHeader.ts";

export const Header = () => {
  return (
    <div>
      <ContainerHeader>
        <Logo>
          <img src="../../public/logo.png" alt="logo" className="logo" />
        </Logo>
        <MenuList>
          <Menu>Filmes</Menu>
          <Menu>Séries</Menu>
          <Menu>Gênero</Menu>
        </MenuList>
        <Search>
          <img
            src="../../public/lupa.png"
            alt="search"
            className="search"
            title="Pesquisar"
          />
        </Search>
      </ContainerHeader>
    </div>
  );
};
