import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import { StackRoutes } from './routes/stack.routes';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <NavigationContainer></NavigationContainer>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StackRoutes />
      </ThemeProvider>
    </Provider>
  );
}
