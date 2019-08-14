import * as path from "path";
import { generateTheme, IColorSet } from "../dist";

const sapphireColors = {
  red: "#DA6771",
  redLight: "#e5949b",
  green: "#4EB071",
  greenDim: "#275839",
  yellow: "#fff099",
  blue: "#399EF4",
  blueLight: "#9fcff9",
  pink: "#B168DF",
  teal: "#21C5C7",
  grey: "#4A5160"
};

const sapphireColorSet: IColorSet = {
  type: "dark",
  base: {
    background: "#12171f",
    foreground: "#efefef",
    color1: sapphireColors.blue,
    color2: sapphireColors.red,
    color3: sapphireColors.green,
    color4: sapphireColors.yellow
  },
  syntax: {
    identifier: sapphireColors.blueLight,
    string: sapphireColors.red,
    number: sapphireColors.redLight,
    keyword: sapphireColors.blue,
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
    markdownQuote: "#c0c0c0"
  },
  ui: {
    cursor: "#ffffff",
    guide: "#263040",
    invisibles: "#263040",
    rangeHighlight: "#263040",
    // Bright red 50% opacity
    findMatchHighlight: "#cb606080",
    // Brighter red 50% opacity
    currentFindMatchHighlight: "#ff777780",
    selection: "#153958",
    // Blue 50% opacity
    selectionHighlight: "#2b74b380",
    // White with ~10% opacity
    wordHighlight: "#ffffff18",
    wordHighlightStrong: "#ffffff18",
    activeLinkForeground: sapphireColors.blue
  },
  terminal: {
    black: "#666666",
    red: sapphireColors.red,
    green: sapphireColors.green,
    yellow: sapphireColors.yellow,
    blue: sapphireColors.blue,
    magenta: sapphireColors.pink,
    cyan: sapphireColors.teal,
    white: "#efefef",
    brightBlack: "#666666",
    brightRed: sapphireColors.red,
    brightGreen: sapphireColors.green,
    brightYellow: sapphireColors.yellow,
    brightBlue: sapphireColors.blue,
    brightMagenta: sapphireColors.pink,
    brightCyan: sapphireColors.teal,
    brightWhite: "#efefef"
  },
  overrides: {
    "editorError.foreground": "#ff0000"
  },
  syntaxOverrides: [
    {
      name: "String, Symbols, Inherited Class, Markup Heading",
      scope: [
        "string",
        "constant.other.symbol",
        "constant.other.key",
        "entity.other.inherited-class",
        "markup.heading",
        "markup.inserted.git_gutter",
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
      ],
      settings: {
        fontStyle: "normal",
        foreground: "#00ff00"
      }
    }
  ]
};

const minimalDarkColorSet: IColorSet = {
  type: "dark",
  base: {
    background: "#22272f",
    foreground: "#efefef",
    color1: sapphireColors.blue,
    color2: sapphireColors.red,
    color3: sapphireColors.green,
    color4: sapphireColors.yellow
  }
};

const minimalLightColorSet: IColorSet = {
  type: "light",
  base: {
    background: "#efefff",
    foreground: "#000011",
    color1: sapphireColors.blue,
    color2: sapphireColors.red,
    color3: sapphireColors.green,
    color4: sapphireColors.yellow
  }
};

const minimalCoverageColorSet: IColorSet = {
  type: "dark",
  base: {
    background: "#FF0000",
    foreground: "#0000FF",
    color1: "#00FF00",
    color2: "#00FF00",
    color3: "#00FF00",
    color4: "#00FF00"
  }
};

generateTheme(
  "Generated Theme",
  sapphireColorSet,
  path.join(__dirname, "theme.json")
);
generateTheme(
  "Generated Theme (minimal, dark)",
  minimalDarkColorSet,
  path.join(__dirname, "theme-minimal-dark.json")
);
generateTheme(
  "Generated Theme (minimal, light)",
  minimalLightColorSet,
  path.join(__dirname, "theme-minimal-light.json")
);
generateTheme(
  "Generated Theme (minimal, coverage)",
  minimalCoverageColorSet,
  path.join(__dirname, "theme-minimal-coverage.json")
);
