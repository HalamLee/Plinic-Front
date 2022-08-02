const color = {
  navy: '#22577a',
  mint: '#38a3a5',
  green: '#57cc99',
  lightGreen: '#80ed99',
  white: '#ffffff',
  black: '#000000',
  warning: '#f63e3e',
  disabled: '#bcbcbc',
  gray: 'rgba(176,176,176,0.39)',
  darkGray: 'rgba(176,176,176,0.74)',
};

const font = {
  size: {
    10: 'font-size: 10px;',
    12: 'font-size: 12px;',
    14: 'font-size: 14px;',
    16: 'font-size: 16px;',
    20: 'font-size: 20px;',
    30: 'font-size: 30px;',
  },
  weight: {
    normal: 'font-weight: 400;',
    thick: 'font-weight: 500;',
    bold: 'font-weight: 700;',
  },
};

const align = {
  flexCenter: `
  display:flex;
  justify-content: center;
  align-items: center;
  `,
  flexCenterColumn: `
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `,
};

const theme = {
  color,
  font,
  align,
};

export default theme;
