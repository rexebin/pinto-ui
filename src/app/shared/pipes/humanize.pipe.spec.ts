import {HumanizePipe} from './humanize.pipe';

describe('HumanizePipe', () => {
    let pipe: HumanizePipe;
    beforeEach(() => {
        pipe = new HumanizePipe();
    });
    it('transforms "abc" to "Abc"', () => {
        expect(pipe.transform('abc')).toEqual('Abc');
    });
    it('transforms "abcDef" to "Abc Def"', () => {
        expect(pipe.transform('abcDef')).toEqual('Abc Def');
    });
    it('leave "ABC DEF" as it is', () => {
        expect(pipe.transform('ABC DEF')).toEqual('ABC DEF');
    });
    it('transforms "abc def" to "Abc def"', () => {
        expect(pipe.transform('abc def')).toEqual('Abc def');
    });
    it('transforms "Abc def" to "Abc def"', () => {
        expect(pipe.transform('Abc def')).toEqual('Abc def');
    });
    it('leave "ABCDEF" as it is', () => {
        expect(pipe.transform('ABCDEF')).toEqual('ABCDEF');

    });
    it('remove spaces before and after "   Abc def   "', () => {
        expect(pipe.transform('   Abc def   ')).toEqual('Abc def');
    });
})
;
