import styled from 'styled-components/native';
import { normalize, fontScale } from '../../utils';

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${normalize(10)}px;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom-width: ${normalize(5)}px;
  border-bottom-color: ${(props) => props.theme.colors.secondary};
`;

export const Title = styled.Text`
  font-size: ${fontScale(20)}px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.white};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ContentScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;
