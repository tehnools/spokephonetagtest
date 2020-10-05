import { tagChecker, findTags} from './index'

describe('tagChecker', () => {

    it('findTags function should be able to match tags', () => {
        const input = '<A></A><B></B>'
        const expected = ['<A>', '</A>', '<B>', '</B>']
        const result = findTags(input)
        expect(result).toBe(expected)
    });  

    it.skip('should ', () => {
        const test = '<A><B></A></B>'
        const expected = 'Expected </A> found </B>'
        const result = tagChecker(test)
        expect(expected).toBe(result)
    });

    it.skip('should ', () => {
        const test = '<A><B></A></B>'
        const expected = 'Expected </A> found </B>'
        const result = tagChecker(test)
        expect(expected).toBe(result)
    });
    
    it.skip('should ', () => {
        const test = '<B>This <\g>is <B>boldface</B> in <<*> a</B> <\6> <<d>sentence'
        const result = tagChecker(test)
        const expected = SuccessMessage
        expect(expected).toBe(result)
    });
    
    it.skip('should ', () => {
        const test = '<B><C> This should be centred and in boldface, but thetagsare wrongly nested </B></C>'
        const result = tagChecker(test)
        const expected = 'Expected </C> found </B>'
        expect(result).toBe(expected)
    });
    
    it.skip('should ', () => {
        const test = '<B>This should be in boldface, but there is an extra closingtag</B></C>'
        const result = tagChecker(test)
        const expected = 'Expected # found </C>'
        expect(result).toBe(expected)
    });
    
    it.skip('should ', () => {
        const test = '<B><C>This should be centred and in boldface, but there isa missing closing tag</C>'
        const result = tagChecker(test)
        const expected = 'Expected </B> found #'
        expect(result).toBe(expected)
    });
})
