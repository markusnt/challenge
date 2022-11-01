import styled from 'styled-components/native';
import { fontScale, normalize } from '../../../../utils';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.SafeAreaView``;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${normalize(12)}px ${normalize(20)}px;
  background-color: ${(props) => props.theme.colors.card.background};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.background};
`;

export const InvestmentBlock = styled.View`
  margin-bottom: ${normalize(15)}px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text.gray};
  font-weight: 600;
  margin: ${normalize(20)}px;
  font-size: ${fontScale(16)}px; ;
`;

export const Text = styled.Text`
  font-weight: 600;
  font-size: ${fontScale(16)}px; ;
`;

export const Value = styled.Text`
  font-weight: 600;
  font-size: ${fontScale(16)}px;
  color: ${(props) => props.theme.colors.text.gray};
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.gray};
  font-size: ${fontScale(16)}px;
`;

export const TInput = styled(TextInputMask)`
  font-weight: 600;
  font-size: ${fontScale(16)}px;
  color: ${(props) => props.theme.colors.text.gray};
  margin: ${normalize(5)}px ${normalize(0)}px;
`;
