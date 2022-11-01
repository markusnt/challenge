import styled from 'styled-components/native';
import { fontScale, normalize } from '../../../../utils';

interface Props {
  disabled: boolean;
}

export const Section = styled.TouchableOpacity<Props>`
  flex-direction: row;
  justify-content: space-between;
  padding: ${normalize(20)}px;
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.card.backgroundDisabled
      : props.theme.colors.card.background};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.background};
`;

export const Titles = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text<Props>`
  font-weight: 600;
  font-size: ${fontScale(16)}px;
  color: ${(props) =>
    props.disabled ? props.theme.colors.text.disabled : props.theme.colors.text.default};
`;
export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.gray};
  font-size: ${fontScale(14)}px;
`;
