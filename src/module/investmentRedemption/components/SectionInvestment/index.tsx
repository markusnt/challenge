import React from 'react';
import { Text } from 'react-native';
import { SCREENS } from '../../../../routes/constants/route-names';
import { formatAsCurrency } from '../../../../utils';

import { ListaInvestimentos } from '../../types/investment';

import * as S from './styles';

interface SectionInvestmentProps {
  list: ListaInvestimentos;
  navigation: any;
  disabled: boolean;
}

const SectionInvestment: React.FC<SectionInvestmentProps> = ({ list, navigation, disabled }) => {
  const handleGoDetails = () => {
    navigation.navigate(SCREENS.INVESTMENT_REDEMPTION.DETAILS, {
      // acoes: list.acoes,
      geral: list,
      items: list.acoes,
    });
  };

  return (
    <S.Section disabled={disabled} onPress={handleGoDetails}>
      <S.Titles>
        <S.Title disabled={disabled}>{list.nome}</S.Title>
        <S.SubTitle>{list.objetivo}</S.SubTitle>
      </S.Titles>
      <S.Title disabled={disabled}>{formatAsCurrency(list.saldoTotal)}</S.Title>
    </S.Section>
  );
};

export default SectionInvestment;
