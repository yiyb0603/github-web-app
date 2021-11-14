export const darkTheme = {
  font: {
    light: '#8b949e',
    medium: '#c3c7d2',
    bold: '#ffffff',
  },
  background: {
    light: '#161b22',
    medium: '#0d1117',
    bold: '#010409',
  },
};

export type ThemeColor = typeof darkTheme;

export type Theme = {
  color: ThemeColor;
}