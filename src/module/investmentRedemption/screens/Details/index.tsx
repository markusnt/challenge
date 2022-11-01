import React, { useEffect, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NAVIGATORS, SCREENS } from '../../../../routes/constants/route-names';

import * as S from './styles';
import { BasePage } from '../../../../components/BasePage';
import { ListaInvestimentos, Acoes } from '../../types/investment';
import { Button } from '../../../../components/Button';
import { formatAsCurrency } from '../../../../utils';
import SectionDetails from '../../components/SectionDetails';
import { useAppSelector } from '../../../../store/hooks/useAppSelector';
import { useAppDispatch } from '../../../../store/hooks/useAppDispatch';
import { investmentClear } from '../../../../store/investment/actions';
import Modal from '../../../../components/Modal';

interface InvestProps {}

const Details: React.FC = ({ route, navigation }: any) => {
  const dispatch = useAppDispatch();
  const { resgate } = useAppSelector((store) => store.investment);

  const geral: ListaInvestimentos = route.params?.geral;
  const items: Acoes[] = route.params?.items;

  const [totalAmount, setTotalAmount] = useState<any>(0);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>();
  const [modalDescription, setModalDescription] = useState<string>();
  const [modalButtonText, setModalButtonText] = useState<string>();
  const [isValidResquest, setIsValidRequest] = useState<boolean>(true);

  const calcRedemptionValue = () => {
    let total = 0;
    resgate?.map((item) => (total += item.valorResgate));

    return setTotalAmount(total);
  };

  const handleMenssageModal = () => {
    if (isValidResquest) {
      setModalTitle('RESGATE EFETUADO!');
      setModalDescription('O valor solicitado estará em sua conta em até 5 dias úteis!');
      setModalButtonText('NOVO RESGATE');
    } else {
      const excedentes = resgate?.map((item) =>
        item.excedido === true
          ? `\n${item.id}: Valor máximo de R$ ${formatAsCurrency(item.valorResgate)}`
          : '',
      );

      setModalTitle('DADOS INVÁLIDOS');
      setModalDescription(
        `Voçê preencheu um ou mais campos com valor acima do permitido:\n${excedentes}`,
      );
      setModalButtonText('CORRIGIR');
    }
  };

  const handleOpenModal = () => {
    setIsModal(true);
    handleMenssageModal();
  };

  const onClose = () => {
    setIsModal(false);
  };

  useEffect(() => {
    if (resgate.some((i) => i.excedido === true)) {
      setIsValidRequest(false);
    } else {
      setIsValidRequest(true);
    }
    if (resgate.length > 0) {
      calcRedemptionValue();
    }
  }, [resgate]);

  return (
    <>
      <BasePage title="Resgate" isScrollView>
        <>
          <S.Title>INVESTIMENTOS</S.Title>

          <S.Section>
            <S.Text>Nome</S.Text>
            <S.Value>{geral.nome}</S.Value>
          </S.Section>
          <S.Section>
            <S.Text>Saldo total disponível</S.Text>
            <S.Value>R$ {formatAsCurrency(geral.saldoTotal)}</S.Value>
          </S.Section>

          <S.Title>RESGATE DO SEU JEITO</S.Title>

          {items?.map((item: Acoes, index) => (
            <SectionDetails key={index} item={item} totalValue={geral.saldoTotal} />
          ))}

          <S.InvestmentBlock>
            <S.Section>
              <S.Text>Valor total a resgatar</S.Text>
              <S.TInput
                type={'money'}
                options={{
                  precision: 2,
                  separator: ',',
                  delimiter: '.',
                  unit: 'R$ ',
                  suffixUnit: '',
                }}
                value={totalAmount}
                editable={false}
              />
            </S.Section>
          </S.InvestmentBlock>
        </>

        <Button onPress={() => handleOpenModal()}>CONFIRMAR RESGATE</Button>
      </BasePage>
      <Modal
        visible={isModal}
        title={modalTitle}
        description={modalDescription}
        buttonText={modalButtonText}
        onClose={onClose}
      />
    </>
  );
};

export default Details;
