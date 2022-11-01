import React, { useState } from 'react';
import { TextInputProps, ViewStyle, StyleProp, TextStyle, EasingFunction } from 'react-native';
import { formatAsCurrency, formatCurrencyToFLoat } from '../../utils';
import * as S from './styles';

interface InputProps extends TextInputProps {
  label: string;
  editable?: boolean;
}

const Input: React.FC<InputProps> = ({ label, editable }) => {
  const [amount, setAmount] = useState<any>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [isFocusLabel, setIsFocusLabel] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Label focus={isFocusLabel}>{label}</S.Label>
      <S.TInput
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$ ',
          suffixUnit: '',
        }}
        value={amount}
        onChangeText={(text) => {
          setAmount(text);
        }}
        onFocus={() => {
          setAmount(0);
          setIsFocusLabel(true);
        }}
        onBlur={() => {
          setIsFocusLabel(false);
        }}
        editable={editable}
      />
      {isError && <S.Error>Valor não pode ser maior que R$</S.Error>}
    </S.Container>
  );
};

export default Input;
