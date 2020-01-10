import * as path from 'path';
import {generateTheme} from '../src';
import {IColorSet} from '../src';

const sapphireColors = {
  red: '#DA6771',
  redLight: '#e5949b',
  green: '#4EB071',
  greenDim: '#275839',
  yellow: '#fff099',
  blue: '#399EF4',
  blueLight: '#9fcff9',
  pink: '#B168DF',
  teal: '#21C5C7',
  grey: '#4A5160'
};

const sapphireColorSet: IColorSet = {
  type: 'dark',
  base: {
    background: '#12171f',
    foreground: '#efefef',
    color1: sapphireColors.blue,
    color2: sapphireColors.red,
    color3: sapphireColors.green,
    color4: sapphireColors.yellow
  },
  syntax: {
    identifier: sapphireColors.blueLight,
    string: sapphireColors.green,
    number: sapphireColors.redLight,
    keyword: sapphireColors.red,
    boolean: sapphireColors.blue,
    function: sapphireColors.teal,
    functionCall: sapphireColors.yellow,
    storage: sapphireColors.blue,
    comment: sapphireColors.grey,
    class: sapphireColors.teal,
    classMember: sapphireColors.teal,
    type: sapphireColors.green,
    cssClass: sapphireColors.blue,
    cssId: sapphireColors.red,
    cssTag: sapphireColors.teal,
    markdownQuote: '#c0c0c0',
    otherKeyword: sapphireColors.pink,
    punctuation: sapphireColors.yellow
  },
  ui: {
    cursor: '#ffffff',
    guide: '#263040',
    invisibles: '#263040',
    rangeHighlight: '#263040',
    // Bright red 50% opacity
    findMatchHighlight: '#cb606080',
    // Brighter red 50% opacity
    currentFindMatchHighlight: '#ff777780',
    selection: '#153958',
    // Blue 50% opacity
    selectionHighlight: '#2b74b380',
    // White with ~10% opacity
    wordHighlight: '#ffffff18',
    wordHighlightStrong: '#ffffff18',
    activeLinkForeground: sapphireColors.blue
  },
  terminal: {
    black: '#666666',
    red: sapphireColors.red,
    green: sapphireColors.green,
    yellow: sapphireColors.yellow,
    blue: sapphireColors.blue,
    magenta: sapphireColors.pink,
    cyan: sapphireColors.teal,
    white: '#efefef',
    brightBlack: '#666666',
    brightRed: sapphireColors.red,
    brightGreen: sapphireColors.green,
    brightYellow: sapphireColors.yellow,
    brightBlue: sapphireColors.blue,
    brightMagenta: sapphireColors.pink,
    brightCyan: sapphireColors.teal,
    brightWhite: '#efefef'
  },
  workbench: {
  }
  // CustomTokens: []
};

generateTheme('Generated Theme', sapphireColorSet, path.join(__dirname, 'theme.json'));
