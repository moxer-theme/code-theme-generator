import { IColorSet } from './interfaces';
export interface IVscodeJsonThemeSetting {
    name: string;
    scope: string | string[];
    settings: {
        foreground?: string;
        background?: string;
        fontStyle?: string;
    };
}
export declare type ColorFetcher = (colorSet: IColorSet) => string;
export declare type ColorGenerator = (color: string) => any;
export interface IRuleGenerator {
    color: ColorFetcher;
    generate: ColorGenerator;
}
export declare const globalRules: IRuleGenerator[];
export declare const tokenRules: IRuleGenerator[];
