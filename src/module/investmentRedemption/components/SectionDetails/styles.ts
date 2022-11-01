import styled from 'styled-components/native';
import { fontScale, normalize } from '../../../../utils';
import { TextInputMask } from 'react-native-masked-text';

interface Props {
  focus: boolean;
}

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${normalize(12)}px ${normalize(20)}px;
  background-color: ${(props) => props.theme.colors.card.background};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.background};
`;

export const SectionInput = styled.View`
  flex-direction: column;
  justify-content: space-between;
  padding: ${normalize(12)}px ${normalize(20)}px;
  background-color: ${(props) => props.theme.colors.card.background};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.background};
`;

export const InvestmentBlock = styled.View`
  margin-bottom: ${normalize(15)}px;
`;

export const Text = styled.Text`
  font-weight: 600;
  font-size: ${fontScale(16)}px;
`;

export const Value = styled.Text`
  font-weight: 600;
  font-size: ${fontScale(16)}px;
  color: ${(props) => props.theme.colors.text.gray};
`;

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
