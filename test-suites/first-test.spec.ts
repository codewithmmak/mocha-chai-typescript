import { hello } from '../page-objects/first-test.po';
import { expect } from 'chai';
import 'mocha';

describe('First Hellow World Test: ', () => {
    it('Should return Hello World', () => {
        const result = hello();
        expect(result).to.equal('Hello world!');
    });
})