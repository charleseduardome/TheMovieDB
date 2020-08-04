import React, { useEffect, useCallback } from 'react';
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

  useEffect(() => {
    dispatch(MoviesActions.LoadMoviesRequest());
  }, [dispatch]);

  const stateMovies = useSelector((state: any) => state.Movies);

  const handleSearch = useCallback(async (data: ISearch) => {
    const { search } = data;
    console.log(search);
  }, []);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
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
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
              <strong>{movie.title}</strong>
              <div>
                <AiFillStar color="#f4f006" size={20} />
                <span>{movie.vote_average}</span>
              </div>
            </li>
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
