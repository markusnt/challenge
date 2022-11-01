import styled from 'styled-components/native';
import { normalize, fontScale } from '../../../../utils';

export const Content = styled.View``;

export const ContentSubTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${normalize(20)}px;
`;

export const Title = styled.Text`
  font-size: ${fontScale(14)}px;
  color: ${(props) => props.theme.colors.text.gray};
  font-weight: 600;
`;
