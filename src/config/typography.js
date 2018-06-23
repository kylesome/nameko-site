import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.87,
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h2: {
      letterSpacing: '0.9px',
    },
    h3: {
      letterSpacing: '1px',
    },
    p: {
      letterSpacing: '1px',
    },
  }),
  googleFonts: [
    {
      name: 'Comfortaa',
      styles: ['300'],
      text: 'Nameko',
    },
    {
      name: 'Open+Sans',
      styles: ['300', '300i', '400', '600'],
    },
  ],
});

export default typography;
