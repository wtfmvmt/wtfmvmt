import { create } from '@storybook/theming';
import logo from "./logo.svg"


export default create({
  colorPrimary: 'white',
  colorSecondary: 'purple',
  fontBase: '"Share Tech Mono", sans-serif',
  fontCode: 'monospace',
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: 'purple',
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
  base: 'dark',
  brandTitle: 'WTFMVMT',
  brandUrl: 'https://wtfmvmt.com',
  brandImage: logo,
  brandTarget: '_self',
});