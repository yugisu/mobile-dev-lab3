import styled from "styled-components/native";

export const ScreenContainer = styled.View`
  padding: 40px 0;

  background-color: ${(props) => props.theme.app.background};
`;

export const ScreenTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
