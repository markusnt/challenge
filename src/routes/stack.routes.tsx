import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NAVIGATORS } from './constants/route-names';
import InvestimentRedemptionNavigator from './navigators/InvestimentRedemptionNavigator';

const { Screen, Navigator } = createNativeStackNavigator();

import ScreenA from '../module/investmentRedemption/screens/Home';

export const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="S?creenA"
        initialRouteName={NAVIGATORS.INVESTMENT_REDEMPTION_NAVIGATOR}
      >
        <Screen
          // name="ScreenA"
          // component={ScreenA}
          // options={{ gestureEnabled: false }}
          name={NAVIGATORS.INVESTMENT_REDEMPTION_NAVIGATOR}
          component={InvestimentRedemptionNavigator}
          options={{ gestureEnabled: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
