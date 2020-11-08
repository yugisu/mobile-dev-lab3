import React from "react";
import { View } from "react-native";

import type { TMovie } from "types/Movie.type";

import { MovieCard } from "components/MovieCard/MovieCard";

type Props = {
  movies: TMovie[];
};

export const MovieList = ({ movies }: Props) => {
  return (
    <View>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </View>
  );
};
