import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { BsSearch } from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import * as MoviesActions from '../../store/modules/Movies/actions';

import { Container, Form } from './styles';

import Input from '../../components/Input';
import Logo from '../../assets/logo.png';

interface ISearch {
  search: string;
}

interface IProps {
  handleSearch(data: ISearch): void;
}

const Header: React.FC<IProps> = ({ handleSearch }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ISearch) => {
      handleSearch(data);
    },
    [handleSearch],
  );

  const handleRefresh = () => {
    dispatch(MoviesActions.LoadMoviesRequest());
    history.push('/');
  };

  return (
    <Container>
      <button onClick={handleRefresh}>
        <img src={Logo} alt="" />
      </button>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="search" placeholder="Search movie" icon={BsSearch} />
      </Form>
    </Container>
  );
};

export default Header;
