import { Dimensions, PixelRatio } from 'react-native';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const normalize = (size: number, based = 'width') => {
  // based on iPhone 8's scale
  const wscale = SCREEN_WIDTH / 375;
  const hscale = SCREEN_HEIGHT / 667;

  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const horizontalScale = (size: number, based = 'width') => {
  const wscale = SCREEN_WIDTH / 375;
  const hscale = SCREEN_HEIGHT / 667;

  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const fontScale = (size: number, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

const formatAsCurrency = (amount: string | number) =>
  parseFloat(amount)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

const formatCurrencyToFLoat = (amount: string | number) =>
  parseFloat(amount.replace(/\./g, '').replace(',', '.'));

export { normalize, fontScale, formatAsCurrency, formatCurrencyToFLoat };
