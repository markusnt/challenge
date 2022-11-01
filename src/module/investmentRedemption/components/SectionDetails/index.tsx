import React, { useCallback, useEffect, useState } from 'react';
import { Keyboard, Text } from 'react-native';
import Input from '../../../../components/Input';
import { formatAsCurrency } from '../../../../utils';
import { Acoes } from '../../types/investment';
import { useAppDispatch } from '../../../../store/hooks/useAppDispatch';
import { investmentSetValue } from '../../../../store/investment/actions';

import * as S from './styles';

interface DetailsProps {
  totalValue: number;
  item: Acoes;
}

const SectionDetails: React.FC<DetailsProps> = ({ item, totalValue }) => {
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState<any>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [isFocusLabel, setIsFocusLabel] = useState<boolean>(false);

  const percent = item.percentual / 100;
  const balanceInvest = totalValue * percent;

  const subStringName = item.nome.substring(item.nome.indexOf('(') + 1, item.nome.lastIndexOf(')'));

  const submitValues = () => {
    dispatch(
      investmentSetValue({
        id: subStringName,
        nome: item.nome,
        valorAplicado: balanceInvest,
        valorResgate: amount,
        excedido: isError,
      }),
    );
  };

  useEffect(() => {
    setIsError(false);
    if (amount > balanceInvest) {
      return setIsError(true);
    }
  }, [amount]);

  return (
    <S.InvestmentBlock>
      <S.Section>
        <S.Text>Ação</S.Text>
        <S.Value>{subStringName}</S.Value>
      </S.Section>
      <S.Section>
        <S.Text>Saldo acumulado</S.Text>
        <S.Value>R$ {formatAsCurrency(balanceInvest)}</S.Value>
      </S.Section>
      <S.SectionInput>
        <S.Label focus={isFocusLabel}>Valor a resgatar</S.Label>
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
          includeRawValueInChangeText={true}
          onChangeText={(maskedText, rawText) => {
            setAmount(rawText);
          }}
          onFocus={() => {
            setIsFocusLabel(true);
          }}
          onEndEditing={() => {
            setIsFocusLabel(false);
            submitValues();
          }}
          onSubmitEditing={() => {
            Keyboard.dismiss;
            setIsFocusLabel(false);
            submitValues();
          }}
        />
        {isError && (
          <S.Error>Valor não pode ser maior que R$ {formatAsCurrency(balanceInvest)}</S.Error>
        )}
      </S.SectionInput>
    </S.InvestmentBlock>
  );
};

export default SectionDetails;
