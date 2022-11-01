import React from 'react';
import { SafeAreaView, ScrollView, View, ViewStyle, TextStyle, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

interface BasePageProps {
  title: string;
  children?: React.ReactNode;
  styleStatusBarColor?: string;
  styleStatusBarColorText?: 'light-content' | 'dark-content';
  statusBarIsTranslucent?: boolean;
  bounce?: boolean;
  onBackPress?: Function;
  isScrollView?: boolean;
}

export const BasePage: React.FC<BasePageProps> = ({
  title,
  children,
  styleStatusBarColor = useTheme().colors.primary,
  styleStatusBarColorText = 'light-content',
  statusBarIsTranslucent,
  bounce,
  onBackPress,
  isScrollView,
}) => {
  return (
    <>
      <StatusBar
        barStyle={styleStatusBarColorText}
        backgroundColor={styleStatusBarColor}
        translucent={statusBarIsTranslucent}
      />
      <S.Container>
        <S.Header>
          <S.Title>{title}</S.Title>
        </S.Header>
      </S.Container>
      {isScrollView ? (
        <S.ContentScrollView
          bounces={bounce}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </S.ContentScrollView>
      ) : (
        <S.Content>{children}</S.Content>
      )}
    </>
  );
};
