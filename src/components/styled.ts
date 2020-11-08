import styled from "styled-components/native";

export const ScreenContainer = styled.View`
  padding: 50px 0 30px;

  background-color: ${(props) => props.theme.app.background};
`;

export const ScreenTitle = styled.Text`
  color: #444;
  font-size: 30px;
  font-weight: bold;
`;
