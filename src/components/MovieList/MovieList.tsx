import React from "react";
import styled from "styled-components/native";

import type { TMovie } from "types/Movie.type";

import { MovieCard } from "components/MovieCard/MovieCard";

type Props = {
  movies: TMovie[];
};

export const MovieList = ({ movies }: Props) => {
  return (
    <Container>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </Container>
  );
};

const Container = styled.View`
  padding: 0 20px;
`;
