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
import { Skeleton } from "../../components/Skeleton.tsx";

function Home() {
  const { page } = useParams();
  const pageParam: string = page || "1";
  const [movies, setMovies] = useState([]);
  const [initial, seInitial] = useState(true);
  const [currentPage, setCurrentPage] = useState(+pageParam);

  useEffect(() => {
    scrollToTop();
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${currentPage}`,
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
        if (initial) {
          setTimeout(() => {
            seInitial(false);
            setMovies(data.results);
          }, 1800);
        } else {
          setMovies(data.results);
        }
      })
      .catch((err) => console.error(err));
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBack = () => {
    scrollToTop();
    if (+currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    scrollToTop();
    if (+currentPage < 10) setCurrentPage(currentPage + 1);
  };

  const home = () => {
    setCurrentPage(1);
  };

  return (
    <Container>
      <Header page="/" home={home} />
      <h1 className={`${!movies ? "hide" : ""}`}>Mais Populares</h1>
      <MovieList>
        {!movies && (
          <div className="erro">
            Não foi possível baixar os filmes no momento.
          </div>
        )}
        {!movies.length && initial && <Skeleton />}
        {!!movies.length &&
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
        <Pages page={currentPage} back={handleBack} next={handleNext} />
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
