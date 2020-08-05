import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import Pagination from '@material-ui/lab/Pagination';

import { useSelector, useDispatch } from 'react-redux';
import * as MoviesActions from '../../store/modules/Movies/actions';

import Header from '../../components/Header';
import CardHome from '../../components/CardHome';

import { Movie } from '../../store/modules/Movies/types';
import { Container, ContentMovies, ContentPagination } from './styles';

interface ISearch {
  search: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const stateMovies = useSelector((state: any) => state.Movies);

  useEffect(() => {
    if (stateMovies.page !== 1) {
      return;
    }

    dispatch(MoviesActions.LoadMoviesRequest());
  }, [dispatch]);

  const handleSearch = useCallback(async (data: ISearch) => {
    const { search } = data;
    console.log(search);
  }, []);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    dispatch(MoviesActions.UpdatePageRequest(value));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Container>
        <CardHome movie={stateMovies.results[0]} />
        <h1>Top Rated</h1>

        <ContentMovies>
          {stateMovies.results.map((movie: Movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
              <strong>{movie.title}</strong>
              <div>
                <AiFillStar color="#f4f006" size={20} />
                <span>{movie.vote_average}</span>
              </div>
            </Link>
          ))}
        </ContentMovies>
        <ContentPagination>
          <Pagination
            style={{
              marginTop: 30,
              marginBottom: 30,
            }}
            color="secondary"
            count={stateMovies.total_pages}
            page={stateMovies.page}
            onChange={handleChangePage}
            size="large"
          />
        </ContentPagination>
      </Container>
    </>
  );
};

export default Home;
