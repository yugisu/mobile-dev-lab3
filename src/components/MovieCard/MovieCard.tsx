import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

import { TMovie } from "types/Movie.type";

type Props = {
  movie: TMovie;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <Container>
      <Text>{movie.title}</Text>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 20px;

  padding: 10px;

  background-color: ${(props) => props.theme.movieCard.background};
`;
