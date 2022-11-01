import styled from 'styled-components/native';
import { normalize, fontScale } from '../../utils';

export const Container = styled.SafeAreaView`
  flex: 1;
  position: absolute;
  justify-content: center;
  align-items: center;
  /* height '100%'; */
  /* height: ${normalize(50)}px; */
  height: 100%;
  width: 100%;
  padding: ${normalize(50)}px ${normalize(50)}px;
  background-color: #00000050;
`;

export const Modal = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  width: 90%;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: ${normalize(30)}px;
  margin-bottom: ${normalize(15)}px;
  font-size: ${fontScale(22)}px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

export const Description = styled.Text`
  margin-bottom: ${normalize(50)}px;
  padding: ${normalize(0)}px ${normalize(10)}px;
  font-size: ${fontScale(14)}px;
  color: ${(props) => props.theme.colors.text.emphasis};
  text-align: left;
`;
