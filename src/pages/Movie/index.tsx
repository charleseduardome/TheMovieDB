import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

import {
  AiFillStar,
  AiOutlineLeftCircle,
  AiFillPlayCircle,
} from 'react-icons/ai';

import { getYear } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { Movie as MovieSelected } from '../../store/modules/Movies/types';

import { Container, Poster, DetailMovie } from './styles';

import * as MoviesActions from '../../store/modules/Movies/actions';
import Header from '../../components/Header';

interface ISearch {
  search: string;
}

const Movie: React.FC = () => {
  const dispatch = useDispatch();
  const { idMovie } = useParams() as {
    idMovie: string;
  };
  const history = useHistory();
  const [movieSelected, setMovieSelected] = useState<MovieSelected>();
  const [releaseDate, setDeleaseDate] = useState(0);

  const stateMovies = useSelector((state: any) => state.Movies);

  useEffect(() => {
    // eslint-disable-next-line
    const selected = stateMovies.results.find((currentMovie: MovieSelected) => {
      if (currentMovie.id === Number(idMovie)) {
        return currentMovie;
      }
    });

    if (!selected) {
      history.push('/');
    }

    setMovieSelected(selected);
    setDeleaseDate(getYear(new Date(selected?.release_date)));
  }, [stateMovies.results, idMovie, history, stateMovies]);

  const handleSearch = debounce(async (data: ISearch) => {
    dispatch(MoviesActions.SearchMoviesRequest(data.search));
  }, 500);

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Link to={'/'}>
        <AiOutlineLeftCircle
          color="#fff"
          size={30}
          style={{ marginLeft: 50, marginTop: 30 }}
        />
      </Link>
      <Container>
        <Poster>
          <img
            src={`${process.env.REACT_APP_BASE_URL_IMAGEM}${movieSelected?.poster_path}`}
            alt=""
          />
        </Poster>
        <DetailMovie>
          <strong>{movieSelected?.title}</strong>
          <h3>{releaseDate}</h3>
          <div>
            <AiFillStar color="#f4f006" size={25} />
            <span>{movieSelected?.vote_average}</span>
          </div>
          <p>{movieSelected?.overview}</p>

          <button>
            <h2>Trailer</h2>
            <AiFillPlayCircle color="#b71313" size={50} />
          </button>
        </DetailMovie>
      </Container>
    </>
  );
};

export default Movie;
