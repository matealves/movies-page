import { Link } from "react-router-dom";

type Props = {
  page: number;
  back?: () => void;
  next?: () => void;
};

export const Pages = ({ page, back, next }: Props) => {
  return (
    <>
      <Link to={`/${page}`}>
        <button onClick={back}>≪ Anterior</button>
      </Link>
      <span className="current-page">{page}</span>
      <Link to={`/${page}`}>
        <button onClick={next}>Próxima ≫</button>
      </Link>
    </>
  );
};
