import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    black: '#000000',
    oxfordBlue: '#14213d',
    orange: '#fca311',
    platinum: '#e5e5e5',
    white: '#ffffff',
    // グラデーション用の追加色
    darkGray: '#1a1a1a',
    lightGray: '#f8f9fa',
  },
};

const styles = {
  global: {
    'html, body, #root': {
      height: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #000000 0%, #14213d 35%, #000000 70%, #1a1a1a 100%)',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      color: 'brand.white',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    '*': {
      scrollBehavior: 'smooth',
    },
    'html': {
      scrollPaddingTop: '80px',
    },
    '::selection': {
      background: 'brand.orange',
      color: 'brand.black',
    },
    a: { 
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    // カスタムスクロールバー
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      background: 'brand.black',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'brand.orange',
      borderRadius: '4px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#e09400',
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(252, 163, 17, 0.3)',
      },
      _active: {
        transform: 'translateY(0)',
      },
    },
    variants: {
      solid: {
        bg: 'brand.orange',
        color: 'brand.black',
        _hover: {
          bg: '#e09400',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 25px rgba(252, 163, 17, 0.4)',
        },
      },
      outline: {
        border: '2px solid',
        borderColor: 'brand.orange',
        color: 'brand.orange',
        _hover: {
          bg: 'brand.orange',
          color: 'brand.black',
          transform: 'translateY(-2px)',
        },
      },
      ghost: {
        color: 'brand.white',
        _hover: {
          bg: 'rgba(252, 163, 17, 0.1)',
          color: 'brand.orange',
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: '700',
      letterSpacing: '-0.025em',
    },
  },
  Text: {
    baseStyle: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: '1.6',
    },
  },
  Box: {
    baseStyle: {
      transition: 'all 0.3s ease',
    },
  },
};

const theme = extendTheme({ 
  colors, 
  styles, 
  components,
  fonts: { 
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
  },
  shadows: {
    'glow': '0 0 20px rgba(252, 163, 17, 0.3)',
    'glow-lg': '0 0 40px rgba(252, 163, 17, 0.4)',
    'elegant': '0 4px 20px rgba(0, 0, 0, 0.15)',
    'elegant-lg': '0 8px 40px rgba(0, 0, 0, 0.25)',
  },
});

export default theme;
