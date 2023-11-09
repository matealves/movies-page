import { useNavigate } from "react-router-dom";
import { Movie } from "../types/Movie";

type Props = {
  movie: Movie;
};

export const CurrentMovie = ({ movie }: Props) => {
  const navigate = useNavigate();

  const backPage = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="movie">
        <img src={movie.poster_path} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Visão geral: {movie.overview}</span>
          <span>Nota: {movie.vote_average?.toFixed(1)}</span>
          <span className="release-date">
            Data de lançamento:
            {` ${new Date(movie.release_date).toLocaleString().split(",")[0]}`}
          </span>
          <button onClick={backPage}>Voltar</button>
        </div>
      </div>
    </>
  );
};
