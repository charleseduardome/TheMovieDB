import React, { useState, useEffect, useCallback } from 'react';
import {
  AiFillStar,
  AiOutlineLeftCircle,
  AiFillPlayCircle,
} from 'react-icons/ai';

import { getYear } from 'date-fns';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { Movie as MovieSelected } from '../../store/modules/Movies/types';

import { Container, Poster, DetailMovie } from './styles';

import Header from '../../components/Header';

interface ISearch {
  search: string;
}

const Movie: React.FC = () => {
  const { idMovie } = useParams();
  const history = useHistory();
  const [movieSelected, setMovieSelected] = useState<MovieSelected>();
  const [releaseDate, setDeleaseDate] = useState(0);

  const stateMovies = useSelector((state: any) => state.Movies);

  useEffect(() => {
    const selected = stateMovies.results.find((currentMovie: MovieSelected) => {
      if (currentMovie.id === Number(idMovie)) {
        return currentMovie;
      }
    });

    if (!selected) {
      history.push('/');
    }

    setMovieSelected(selected);
    setDeleaseDate(getYear(new Date(selected.release_date)));
  }, [stateMovies.results, idMovie, history]);

  const handleSearch = useCallback(async (data: ISearch) => {
    const { search } = data;
    console.log(search);
  }, []);

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
            src={`https://image.tmdb.org/t/p/original${movieSelected?.poster_path}`}
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
