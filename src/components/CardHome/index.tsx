import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import { Container, Poster, DetailMovie } from './styles';

import { Movie } from '../../store/modules/Movies/types';

interface IProps {
  movie: Movie;
}

const CardHome: React.FC<IProps> = ({ movie }) => {
  return (
    <Container>
      <Poster>
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt=""
        />
      </Poster>
      <DetailMovie>
        <strong>{movie?.title}</strong>
        <div>
          <AiFillStar color="#f4f006" size={25} />
          <span>{movie?.vote_average}</span>
        </div>
        <p>{movie?.overview}</p>
      </DetailMovie>
    </Container>
  );
};

export default CardHome;
