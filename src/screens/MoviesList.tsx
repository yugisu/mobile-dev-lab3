import React from "react";
import { Text, View } from "react-native";

type Props = {};

export const MoviesListScreen = ({}: Props) => {
  return (
    <View style={{ padding: 20, paddingVertical: 40 }}>
      <View>
        <Text style={{ fontWeight: "bold" }}>Movies List</Text>
      </View>
    </View>
  );
};
