import { Link } from "react-router-dom";

type Props = {
  page: number;
  back?: () => void;
  next?: () => void;
};

export const Pages = ({ page, back, next }: Props) => {
  return (
    <>
      <Link to={`/${page === 2 ? "" : page - 1}`}>
        <button onClick={back} disabled={page === 1 ? true : false}>
          ≪ Anterior
        </button>
      </Link>
      <span className="current-page">{page}</span>
      <Link to={`/${page + 1}`}>
        <button onClick={next} disabled={page === 10 ? true : false}>
          Próxima ≫
        </button>
      </Link>
    </>
  );
};
