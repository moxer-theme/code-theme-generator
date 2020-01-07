"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRgb(color) {
    return [
        parseInt(color.substr(1, 2), 16),
        parseInt(color.substr(3, 2), 16),
        parseInt(color.substr(5, 2), 16)
    ];
}
function toCssString(rgb) {
    var result = '#';
    result += (rgb[0].toString(16).length === 1 ? '0' : '') + rgb[0].toString(16);
    result += (rgb[1].toString(16).length === 1 ? '0' : '') + rgb[1].toString(16);
    result += (rgb[2].toString(16).length === 1 ? '0' : '') + rgb[2].toString(16);
    return result;
}
function lighten(color, amount) {
    var MAX = 255;
    var r = parseInt(color.substr(1, 2), 16);
    var g = parseInt(color.substr(3, 2), 16);
    var b = parseInt(color.substr(5, 2), 16);
    r = Math.min(Math.floor(r + (r * amount)), MAX);
    g = Math.min(Math.floor(g + (g * amount)), MAX);
    b = Math.min(Math.floor(b + (b * amount)), MAX);
    return toCssString([r, g, b]);
}
exports.lighten = lighten;
function darken(color, amount) {
    return lighten(color, -amount);
}
exports.darken = darken;
function addAlpha(color, alpha) {
    if (color.length !== 7) {
        throw new Error('addAlpha only supports adding to #rrggbb format colors');
    }
    var alphaHex = Math.round(alpha * 255).toString(16);
    if (alphaHex.length === 1) {
        alphaHex = '0' + alphaHex;
    }
    return color + alphaHex;
}
exports.addAlpha = addAlpha;
function contast(color) {
    var rgb = getRgb(color);
    var luminance = rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114;
    return luminance > 192 ? '#000000' : '#ffffff';
}
exports.contast = contast;
function generateFallbackColorSet(s, type) {
    return {
        type: type,
        base: {
            background: null,
            foreground: null,
            color1: null,
            color2: null,
            color3: null,
            color4: null
        },
        syntax: {
            boolean: s.color1,
            function: s.color3,
            functionCall: s.color4,
            identifier: (type === 'light' ? darken : lighten)(s.color1, 0.5),
            keyword: s.color1,
            number: s.color4,
            storage: s.color1,
            string: s.color2,
            stringEscape: (type === 'light' ? darken : lighten)(s.color2, 0.5),
            comment: (type === 'light' ? darken : lighten)(s.background, 2.0),
            class: s.color3,
            classMember: s.color3,
            type: s.color3,
            modifier: null,
            cssClass: s.color1,
            cssId: s.color2,
            cssTag: s.color3,
            markdownQuote: null,
            variable: s.foreground,
            otherKeyword: null
        },
        ui: {
            cursor: null,
            invisibles: (type === 'light' ? darken : lighten)(s.background, 0.2),
            guide: (type === 'light' ? darken : lighten)(s.background, 0.2),
            lineHighlight: null,
            findMatchHighlight: null,
            currentFindMatchHighlight: null,
            findRangeHighlight: null,
            rangeHighlight: null,
            selectionHighlight: null,
            selection: null,
            wordHighlight: null,
            wordHighlightStrong: null,
            activeLinkForeground: null
        },
        terminal: {
            black: null,
            red: null,
            green: null,
            yellow: null,
            blue: null,
            magenta: null,
            cyan: null,
            white: null,
            brightBlack: null,
            brightRed: null,
            brightGreen: null,
            brightYellow: null,
            brightBlue: null,
            brightMagenta: null,
            brightCyan: null,
            brightWhite: null
        }
    };
}
exports.generateFallbackColorSet = generateFallbackColorSet;
