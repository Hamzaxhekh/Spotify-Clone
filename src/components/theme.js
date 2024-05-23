import {createTheming} from '@callstack/react-theme-provider';

export const theme = {
  lightColor: {
    white: '#FFFFFF',
    black: '#000000',
    darkGray: '#303030',
    green: '#1ED760',
    gray: '#777777',
    
  },
  darkColor: {},
  fontWeight: {
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '900',
  },
  fontFamily: {
    AvenirNextCyrBold: 'AvenirNextCyr-Bold',
    AvenirNextCyrBoldItalic: 'AvenirNextCyr-BoldItalic',
    AvenirNextCyrDemi: 'AvenirNextCyr-Demi',
    AvenirNextCyrDemiItalic: 'AvenirNextCyr-DemiItalic',
    AvenirNextCyrHeavy: 'AvenirNextCyr-Heavy',
    AvenirNextCyrHeavyItalic: 'AvenirNextCyr-HeavyItalic',
    AvenirNextCyrItalic: 'AvenirNextCyr-Italic',
    AvenirNextCyrLight: 'AvenirNextCyr-Light',
    AvenirNextCyrLightItalic: 'AvenirNextCyr-LightItalic',
    AvenirNextCyrMedium: 'AvenirNextCyr-Medium',
    AvenirNextCyrRegular: 'AvenirNextCyr-Regular',
    AvenirNextCyrThin: 'AvenirNextCyr-Thin',
    AvenirNextCyrThinItalic: 'AvenirNextCyr-ThinItalic',
    AvenirNextCyrUltraLight: 'AvenirNextCyr-UltraLight',
    AvenirNextCyrUltraLightIt: 'AvenirNextCyr-UltraLightIt',
  },
  animation: {
    scale: 1.0,
  },
};

const {ThemeProvider, withTheme, useTheme} = createTheming(theme);

export {ThemeProvider, withTheme, useTheme};
