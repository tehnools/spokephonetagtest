const tagRegex = new RegExp('<\/*[A-Z]>', 'g')
const tagCloseRegex = new RegExp('</[A-Z]>', 'g')
const tagOpenRegex = new RegExp('<[A-Z]>', 'g')

const SuccessMessage = 'Correctly tagged paragraph'

export function openToCloseTag(tag) {
    return `</${tag.substr(1)}`
}

export function closeToOpenTag(tag) {
    if (tag === '#') return tag
    return `<${tag.substr(2)}`
}

export function findTags(input) {
    return input.match(tagRegex)
}

// pivot
function tagChecker(input) {
    // let open

    // let openTags = input.match(openRegex)
    // let closeTags = input.match(closeRegex).reverse()
    let tags = input.match(tagRegex)
    console.log('Tags', tags)
    for (let i; i < tags.length; i++) {

    }
    while (tags.length > 0) {
        let pointer = 0;
        let expected = '#';
        let found = '#';
        const tag = tags.pop();
        if (tag.match(tagOpenRegex)) {
            expected = openToCloseTag(tag)
        } else if (tag.match(tagCloseRegex)) {
            found = tag
        }
        // open = openTags.pop() || '#'
        // expected = generateClosingTag(open) || '#'
        // found = closeTags.pop() || '#'
        if (expected !== found) {
            return `Expected ${expected} found ${found}`
        }
    }
    return SuccessMessage
}



function main() {
    const test1 = 'The following text<C><B>is centred and in boldface</B></C>'
    const test2 = '<B>This <\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence'
    const test3 = '<B><C> This should be centred and in boldface, but thetagsare wrongly nested </B></C>'
    const test4 = '<B>This should be in boldface, but there is an extra closingtag</B></C>'
    const test5 = '<B><C>This should be centred and in boldface, but there isa missing closing tag</C>'

    const expected1 = SuccessMessage
    const expected2 = SuccessMessage
    const expected3 = 'Expected </C> found </B>'
    const expected4 = 'Expected # found </C>'
    const expected5 = 'Expected </B> found #'

    const result1 = tagChecker(test1)
    const result2 = tagChecker(test2)
    const result3 = tagChecker(test3)
    const result4 = tagChecker(test4)
    const result5 = tagChecker(test5)

    console.log(result1, result1 === expected1)
    console.log(result2, result2 === expected2)
    console.log(result3, result3 === expected3)
    console.log(result4, result4 === expected4)
    console.log(result5, result5 === expected5)
}

main()