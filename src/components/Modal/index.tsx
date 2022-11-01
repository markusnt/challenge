import React from 'react';
import { Text } from 'react-native';
import { Button } from '../Button';

import * as S from './styles';

interface ModalProps {
  visible?: boolean;
  onClose?: Function;
  title?: string;
  description?: string;
  buttonText?: string;
  onPress?: Function;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  title,
  description,
  onPress,
  onClose,
  buttonText,
}) => {
  if (visible) {
    return (
      <S.Container>
        <S.Modal>
          {/* <S.Modal animationType="slide" transparent={true} visible={true}> */}
          <S.TextContainer>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </S.TextContainer>
          <Button onPress={onClose}>{buttonText}</Button>
        </S.Modal>
      </S.Container>
    );
  }

  return null;
};

export default Modal;
