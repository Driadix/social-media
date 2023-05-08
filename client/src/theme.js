export const colorTokens = {
  grey: {
    0: '#FFFFFF',
    10: '#F6F6F6',
    50: '#F0F0F0',
    100: '#E0E0E0',
    200: '#C2C2C2',
    300: '#A3A3A3',
    400: '#858585',
    500: '#666666',
    600: '#4D4D4D',
    700: '#333333',
    800: '#1A1A1A',
    900: '#0A0A0A',
    1000: '#000000',
  },
  primary: {
    50: '#F5F7FA',
    100: '#DDE4EB',
    200: '#BBD0DE',
    300: '#99BBD1',
    400: '#77A6C5',
    500: '#5580A8',
    600: '#3E5D7E',
    700: '#2A3D54',
    800: '#16242A',
    900: '#0A0F15',
  },
};

// mui theme settings
export const themeSettings = (theme) => ({
  palette: {
    theme,
    ...(theme === 'dark'
      ? {
        // palette values for dark theme
        primary: {
          dark: colorTokens.primary[200],
          main: colorTokens.primary[500],
          light: colorTokens.primary[800],
        },
        neutral: {
          dark: colorTokens.grey[100],
          main: colorTokens.grey[200],
          mediumMain: colorTokens.grey[300],
          medium: colorTokens.grey[400],
          light: colorTokens.grey[700],
        },
        background: {
          default: colorTokens.grey[900],
          alt: colorTokens.grey[800],
        },
      }
      : {
        // palette values for light theme
        primary: {
          dark: colorTokens.primary[700],
          main: colorTokens.primary[500],
          light: colorTokens.primary[50],
        },
        neutral: {
          dark: colorTokens.grey[700],
          main: colorTokens.grey[500],
          mediumMain: colorTokens.grey[400],
          medium: colorTokens.grey[300],
          light: colorTokens.grey[50],
        },
        background: {
          default: colorTokens.grey[10],
          alt: colorTokens.grey[0],
        },
      }),
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 40,
    },
    h2: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h3: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h4: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h5: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 16,
    },
    h6: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 14,
    },
  },
});
