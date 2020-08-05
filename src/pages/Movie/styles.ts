import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 80%;

  justify-content: center;
`;

export const Poster = styled.div`
  img {
    width: 100%;
    max-width: 700px;
    height: auto;
  }
`;

export const DetailMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  strong {
    color: #fff;
    font-size: 35px;
    font-weight: bold;
  }

  h3 {
    color: #fff;
    font-size: 15px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      color: #fff;
      font-size: 35px;
      margin-left: 20px;
    }
  }

  p {
    color: #fff;
    font-size: 16px;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: none;
    border: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;

    h2 {
      font-size: 40px;
    }

    svg {
      margin-left: 20px;
    }
  }
`;
