import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px 30px 0 30px;

  h1 {
    color: #fff;
    font-size: 35px;
    margin-top: 20px;
  }
`;

export const ContentMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  object-fit: cover;
  grid-gap: 10px;
  list-style: none;
  margin-top: 30px;
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border-radius: 4px;
    padding: 10px;

    img {
      width: 100%;
      height: auto;
    }

    strong {
      margin-top: 10px;
      color: #fff;
    }

    div {
      display: flex;
      flex-direction: table-row;
      align-items: center;
      margin-top: auto;
      span {
        color: #fff;
        margin-left: 20px;
      }
    }
  }
`;

export const ContentPagination = styled.div`
  display: flex;
  justify-content: center;
`;
