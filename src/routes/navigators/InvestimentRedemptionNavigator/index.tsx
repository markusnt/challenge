import withBaseNavigator from '../base-navigator';
import { Home, Details } from '../../../module/investmentRedemption';
import { SCREENS } from '../../constants/route-names';

const screens = [
  {
    name: SCREENS.INVESTMENT_REDEMPTION.HOME,
    component: Home,
    options: { gestureEnabled: false },
  },
  {
    name: SCREENS.INVESTMENT_REDEMPTION.DETAILS,
    component: Details,
    options: { gestureEnabled: false },
  },
];

export default function InvestmentRedemptionNavigator() {
  return withBaseNavigator(SCREENS.INVESTMENT_REDEMPTION.HOME, screens);
}
