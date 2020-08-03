import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import * as MoviesActions from '../../store/modules/Movies/actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MoviesActions.LoadMoviesRequest());
  }, [dispatch]);

  return <h1>Casa</h1>;
};

export default Home;
