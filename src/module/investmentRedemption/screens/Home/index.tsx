import React, { useEffect, useState } from 'react';
import { Button, StatusBar, Text } from 'react-native';
import { SCREENS } from '../../../../routes/constants/route-names';
import { useTheme } from 'styled-components/native';

import * as S from './styles';
import { BasePage } from '../../../../components/BasePage';
import SectionInvestment from '../../components/SectionInvestment';

import { ListaInvestimentos } from '../../types/investment';
import api from '../../../../services/api';

const Home: React.FC = ({ navigation }: any) => {
  const [fetchInvestments, setFetchInvestments] = useState<any>([]);

  const handleGoDetails = () => {
    navigation.navigate(SCREENS.INVESTMENT_REDEMPTION.DETAILS);
  };

  const fetchApi = async () => {
    const response = await api
      .get('v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653')
      .then(({ data }) => {
        setFetchInvestments(data?.response?.data);
      })
      .catch((err) => {
        setFetchInvestments([]);
      });
  };

  const RenderInvestmentList = () => {
    return (
      <>
        {fetchInvestments.listaInvestimentos?.map((item: ListaInvestimentos, index: any) => (
          <SectionInvestment
            key={index}
            list={item}
            navigation={navigation}
            disabled={item.indicadorCarencia === 'S'}
          />
        ))}
      </>
    );
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <BasePage title="Resgate">
      <S.Content>
        <S.ContentSubTitle>
          <S.Title>INVESTIMENTOS</S.Title>
          <S.Title>R$</S.Title>
        </S.ContentSubTitle>
      </S.Content>
      <RenderInvestmentList />
    </BasePage>
  );
};

export default Home;
