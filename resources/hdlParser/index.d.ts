import { RawHdlModule, Macro, RawSymbol } from '../../src/hdlParser/common';
import { HdlLangID } from '../../src/global/enum';

type AbsPath = string;
type RelPath = string;
type Path = AbsPath | RelPath;

interface Fast {
    content: RawHdlModule[]
    languageId: HdlLangID
    macro: Macro
}

interface All {
    content: {
        error: string[]
        symbols: RawSymbol[]
    }
    languageId: HdlLangID
    macro: Macro
}

export function vlogFast(path: AbsPath): Promise<Fast | undefined>;
export function vlogAll(path: AbsPath): Promise<All | undefined>;
export function vhdlFast(path: AbsPath): Promise<Fast | undefined>;
export function vhdlAll(path: AbsPath): Promise<All | undefined>;
export function svFast(path: AbsPath): Promise<Fast | undefined>;
export function svAll(path: AbsPath): Promise<All | undefined>;