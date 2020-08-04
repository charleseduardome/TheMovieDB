import React, { useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as MoviesActions from '../../store/modules/Movies/actions';

import { Container } from './styles';
import Header from '../../components/Header';

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

  return (
    <Container>
      <Header handleSearch={handleSearch} />

      <h1>{stateMovies.total_results}</h1>
    </Container>
  );
};

export default Home;
