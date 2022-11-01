import styled from 'styled-components/native';
import { fontScale, normalize } from '../../utils';

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: ${normalize(15)}px ${normalize(20)}px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Text = styled.Text`
  font-weight: 800;
  font-size: ${fontScale(18)}px;
  color: ${(props) => props.theme.colors.primary};
`;
