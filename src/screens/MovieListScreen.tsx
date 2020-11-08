import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";

import movieListData from "static/MoviesList.json";

import { MovieList } from "components/MovieList/MovieList";
import { ScreenContainer, ScreenTitle } from "components/styled";

export const MovieListScreen = () => {
  return (
    <ScrollView>
      <ScreenContainer>
        <View style={{ paddingHorizontal: 20 }}>
          <ScreenTitle>Movies List</ScreenTitle>
        </View>

        <MovieCardsContainer>
          <MovieList movies={movieListData.search} />
        </MovieCardsContainer>
      </ScreenContainer>
    </ScrollView>
  );
};

const MovieCardsContainer = styled.View`
  padding: 10px 0;
`;
