import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

const defaultScreenOptions = {
  headerShown: false,
};

export default function withBaseNavigator(initialRouteName: any, screens: any, screenOptions = {}) {
  const options = {
    ...defaultScreenOptions,
    ...screenOptions,
  };

  return (
    <Navigator initialRouteName={initialRouteName} screenOptions={options}>
      {screens.map((screen: any) => (
        <Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ gestureEnabled: false, ...screen.options }}
        />
      ))}
    </Navigator>
  );
}
