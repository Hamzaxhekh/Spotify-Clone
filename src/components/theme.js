import {createTheming} from '@callstack/react-theme-provider';

export const theme = {
  lightColor: {
    white: '#FFFFFF',
    black: '#000000',
    background: '#ECECEC',
    headingColor: '#787878',
    placeholderColor: '#777777',
    inputBg: '#E8E9EB',
    borderColor: '#f5f3f4',
    darkGray: '#dee2e6',
    bottomTabBg: '#DDDDDD',
    cardBg: '#F8F8F8',
    cardAvatorBg: '#F4F4F4',
    yellowColor: '#f1c40f',
    red: '#F81D1E',
    primary: '#0B7BC3',
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
    AvenirNextCyrDemiItalic:'AvenirNextCyr-DemiItalic',
    AvenirNextCyrHeavy:'AvenirNextCyr-Heavy',
    AvenirNextCyrHeavyItalic:'AvenirNextCyr-HeavyItalic',
    AvenirNextCyrItalic:'AvenirNextCyr-Italic',
    AvenirNextCyrLight:'AvenirNextCyr-Light',
    AvenirNextCyrLightItalic:'AvenirNextCyr-LightItalic',
    AvenirNextCyrMedium:'AvenirNextCyr-Medium',
    AvenirNextCyrRegular:'AvenirNextCyr-Regular',
    AvenirNextCyrThin:'AvenirNextCyr-Thin',
    AvenirNextCyrThinItalic:'AvenirNextCyr-ThinItalic',
    AvenirNextCyrUltraLight:'AvenirNextCyr-UltraLight',
    AvenirNextCyrUltraLightIt:'AvenirNextCyr-UltraLightIt'


    
   

   
  },
  animation: {
    scale: 1.0,
  },
};

const {ThemeProvider, withTheme, useTheme} = createTheming(theme);

export {ThemeProvider, withTheme, useTheme};
