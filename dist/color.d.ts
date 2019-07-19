import { IColorSet, IBaseColorSet } from './interfaces';
export declare function lighten(color: string, amount: number): string;
export declare function darken(color: string, amount: number): string;
export declare function addAlpha(color: string, alpha: number): string;
export declare function contast(color: string): string;
export declare function generateFallbackColorSet(s: IBaseColorSet, type: 'light' | 'dark'): IColorSet;
