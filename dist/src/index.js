"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const vscodeThemeGenerator_1 = require("./vscodeThemeGenerator");
function generateTheme(themeName, colorSet, outputFile) {
    const themeJson = new vscodeThemeGenerator_1.VscodeThemeGenerator().generateTheme(themeName, colorSet);
    fs.writeFileSync(outputFile, themeJson);
}
exports.generateTheme = generateTheme;
//# sourceMappingURL=index.js.map