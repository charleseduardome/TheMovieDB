import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  input {
    flex: 1;
    height: 30px;
    padding: 0 12px;
    background: none;
    color: #fff;
    border: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;
