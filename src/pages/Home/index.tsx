import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { token } from "../../config/token.ts";
import { image_path } from "../../config/image_path.ts";
import { Container } from "../../components/Container";
import { MovieList } from "../../components/MovieList";
import { Movie } from "../../components/Movie";
import { Header } from "../../components/Header.tsx";
import { Footer, Linkedin } from "../../components/Footer.ts";
import { AreaPages } from "../../components/AreaPages.ts";
import { Pages } from "../../components/Pages.tsx";

function Home() {
  const { page } = useParams();
  const currentPage: string = page ? page : "1";
  const [movies, setMovies] = useState([]);
  const [newPage, setNewPage] = useState(+currentPage);

  console.log("newPage", newPage);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${newPage}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, [newPage]);

  const handleBack = () => {
    if (+newPage > 1) return setNewPage(newPage - 1);
  };

  const handleNext = () => {
    if (+newPage < 10) setNewPage(newPage + 1);
  };

  return (
    <Container>
      <Header />
      <h1>Mais Populares</h1>
      <MovieList>
        {!movies && (
          <div className="erro">
            Não foi possível baixar os filmes no momento.
          </div>
        )}
        {movies &&
          movies.map(({ id, title, poster_path }) => {
            return (
              <Movie key={id}>
                <Link to={`/details/${id}`}>
                  <img src={`${image_path}/${poster_path}`} alt={title} />
                </Link>
                <span>{title}</span>
              </Movie>
            );
          })}
      </MovieList>
      <AreaPages>
        <Pages page={newPage} back={handleBack} next={handleNext} />
      </AreaPages>
      <Footer>
        <Linkedin
          href="https://www.linkedin.com/in/mateusalvesds/"
          target="_blank"
        >
          © Developed by Mateus Alves
        </Linkedin>
      </Footer>
    </Container>
  );
}

export default Home;
