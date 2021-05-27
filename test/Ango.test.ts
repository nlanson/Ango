//Import testing dependencies
import 'mocha';
import { expect, assert } from 'chai';

//Import module to test
import { Angoka } from '../src/angoka';

describe('noHash check', () => {
    it('Returns the input parameter', () => {
        let input: string = 'Testinput123';
        let result = Angoka.noHash()(input);

        expect(result).to.equal(input);
    });
});

describe('VevoAngo encryption checks', () => {
    it(`Doesn't return the input parameter`, () => {
        let input: string = 'Testinput123';
        let result = Angoka.VevoAngo()(input);

        expect(result).to.not.equal(input);
    });

    it('Algorithm consistently generates same hash', () => {
        let prompt: Array<string> = ['nxcpxwpjn', 'jqeimz', 'wswrda'];
        let expected: Array<number> = [-1578157826, -1152806120, -778235532];

        assert(prompt.length == expected.length, 'Test dictionary lengths are equal.');

        for ( let i=0; i<prompt.length; i++ ) {
            let result = Angoka.VevoAngo()(prompt[i]);
            assert(result == expected[i], 'Hash is consistent');
        }
    });
});

