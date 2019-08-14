import { IColorSet, IThemeGenerator } from './interfaces';
import { IVscodeJsonThemeSetting } from './rules';
export interface IVscodeJsonTheme {
    name?: string;
    settings?: IVscodeJsonThemeSetting[];
    tokenColors?: IVscodeJsonThemeSetting[];
    colors?: {
        [key: string]: string;
    };
}
export declare class VscodeThemeGenerator implements IThemeGenerator {
    generateTheme(name: string, colorSet: IColorSet): string;
    private _applyWorkbenchColors;
}
