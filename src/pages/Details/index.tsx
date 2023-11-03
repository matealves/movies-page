import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { token } from "../../config/token.js";
import { image_path } from "../../config/image_path.ts";
import { Movie } from "../../types/Movie.ts";
import { MovieDetails } from "../../components/MovieDetails.ts";
import { ContainerLoad, Loader } from "../../components/Loader.ts";
import { CurrentMovie } from "../../components/CurrentMovie.tsx";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({} as Movie);
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
      .then(
        ({
          title,
          overview,
          poster_path,
          release_date,
          vote_average,
        }: Movie) => {
          const movie = {
            id,
            title,
            overview,
            release_date,
            poster_path: `${image_path}${poster_path}`,
            vote_average,
          };
          setMovie(movie);
          setTimeout(() => setLoad(false), 400);
        }
      )
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <MovieDetails>
      {load && (
        <ContainerLoad>
          <Loader />
        </ContainerLoad>
      )}
      {!load && <CurrentMovie movie={movie} />}
    </MovieDetails>
  );
}

export default Details;
