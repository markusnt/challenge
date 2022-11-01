import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import { fontScale, normalize } from '../../utils';

interface Props {
  focus: boolean;
}

export const Container = styled.View``;

export const Label = styled.Text<Props>`
  font-size: ${fontScale(14)}px;
  font-weight: 600;
  color: ${(props) =>
    props.focus ? props.theme.colors.text.emphasis : props.theme.colors.text.gray};
`;

export const TInput = styled(TextInputMask)`
  font-weight: 700;
  font-size: ${fontScale(16)}px;
  color: ${(props) => props.theme.colors.text.default};
  margin: ${normalize(5)}px ${normalize(0)}px;
`;

export const Error = styled.Text`
  font-size: ${fontScale(14)}px;

  color: ${(props) => props.theme.colors.text.error};
`;
