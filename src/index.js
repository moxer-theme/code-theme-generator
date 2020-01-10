"use strict";
exports.__esModule = true;
var fs = require("fs");
var vscodeThemeGenerator_1 = require("./vscodeThemeGenerator");
function generateTheme(themeName, colorSet, outputFile) {
    var themeJson = new vscodeThemeGenerator_1.VscodeThemeGenerator().generateTheme(themeName, colorSet);
    fs.writeFileSync(outputFile, themeJson);
}
exports.generateTheme = generateTheme;
