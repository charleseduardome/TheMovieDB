import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { BsSearch } from 'react-icons/bs';

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
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ISearch) => {
      handleSearch(data);
    },
    [handleSearch],
  );

  return (
    <Container>
      <img src={Logo} alt="" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="search" placeholder="Procurar filme" icon={BsSearch} />
      </Form>
    </Container>
  );
};

export default Header;
