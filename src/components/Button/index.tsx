import React, { useRef } from 'react';
import { Text } from 'react-native';

import * as S from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onPress: Function;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onPress, disabled }) => {
  return (
    <S.Button onPress={onPress}>
      <S.Text>{children}</S.Text>
    </S.Button>
  );
};
