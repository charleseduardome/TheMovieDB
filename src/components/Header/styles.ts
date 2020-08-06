import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;

  button {
    background: none;
    border: none;
    img {
      width: 100px;
      height: auto;
    }
  }
`;

export const Form = styled(Unform)`
  align-items: center;
  width: 230px;
  display: flex;

  svg {
    color: #fff;
    margin-right: 10px;
  }
`;
