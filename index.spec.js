import { xtest } from '@jest/globals';
import { tagChecker, findTags, SuccessMessage } from './index'

describe('tagChecker', () => {

    test('findTags function should be able to match tags', () => {
        const input = '<A></A><B></B>'
        const expected = ['<A>', '</A>', '<B>', '</B>']
        const result = findTags(input)
        expect(result).toStrictEqual(expected)
    });

    test('should Expected </A> found </B>', () => {
        const test = '<A><B></A></B>'
        const expected = 'Expected </A> found </B>'
        const result = tagChecker(test)
        expect(result).toEqual(expected)
    });

    test('should Expected </A> found </B>', () => {
        const test = '<A><B></A></B>'
        const expected = 'Expected </A> found </B>'
        const result = tagChecker(test)
        expect(result).toEqual(expected)
    });

    test('should return SuccessMessage', () => {
        const test = '<B>This <\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence'
        const result = tagChecker(test)
        const expected = SuccessMessage
        expect(result).toEqual(expected)
    });

    test('should Expected </C> found </B', () => {
        const test = '<B><C> This should be centred and in boldface, but thetagsare wrongly nested </B></C>'
        const result = tagChecker(test)
        const expected = 'Expected </C> found </B>'
        expect(result).toEqual(expected)
    });

    xtest('should Expected # found </C>', () => {
        const test = '<B>This should be in boldface, but there is an extra closingtag</B></C>'
        const result = tagChecker(test)
        const expected = 'Expected # found </C>'
        expect(result).toEqual(expected)
    });

    xtest('should Expected </B> found #', () => {
        const test = '<B><C>This should be centred and in boldface, but there isa missing closing tag</C>'
        const result = tagChecker(test)
        const expected = 'Expected </B> found #'
        expect(result).toEqual(expected)
    });
})
