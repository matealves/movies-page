import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { token } from "../../config/token.js";
import { image_path } from "../../config/image_path.ts";
import { Movie } from "../../types/Movie.ts";
import { MovieDetails } from "../../components/MovieDetails.ts";
import { ContainerLoad, Loader } from "../../components/Loader.ts";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | any>({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR&page=1`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then(({ title, overview, poster_path, release_date, vote_average }) => {
        const movie = {
          id,
          title,
          overview,
          releaseDate: release_date,
          image: `${image_path}${poster_path}`,
          vote_average,
        };
        setMovie(movie);
        setTimeout(() => setLoad(false), 400);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <MovieDetails>
      {load && (
        <ContainerLoad>
          <Loader />
        </ContainerLoad>
      )}
      {!load && (
        <div className="movie">
          <img src={movie.image} alt={movie.title} />
          <div className="details">
            <h1>{movie.title}</h1>
            <span>Visão geral: {movie.overview}</span>
            <span>Nota: {movie.vote_average?.toFixed(1)}</span>
            <span className="release-date">
              Data de lançamento:
              {` ${new Date(movie.releaseDate).toLocaleString().split(",")[0]}`}
            </span>
            <Link to="/">
              <button>Voltar</button>
            </Link>
          </div>
        </div>
      )}
    </MovieDetails>
  );
}

export default Details;
