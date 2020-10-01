

const SuccessMessage = 'Correctly tagged paragraph'

function generateClosingTag(tag) {
    return `</${tag.substr(1)}`
}

function generateStartTag(tag) {
    return `<${tag.substr(2)}`
}


function tagMatches(startTag, closingTag) {
    const expectedClosingTag = generateClosingTag(startTag)
    return expectedClosingTag === closingTag
}

function findStartTags(input) {
    const regex = new RegExp('<[A-Z]>', 'g')
    return input.match(regex)
}

function findEndTags(input) {
    const regex = new RegExp('</[A-Z]>', 'g')
    return input.match(regex)
}

function tagChecker(input) {
    let startTag
    let endTag
    let expectedTag
    let startTagList = findStartTags(input)
    let endTagList = findEndTags(input).reverse()
    const expectedEndTags = startTagList.map(generateClosingTag)
    
    console.log(startTagList, endTagList, expectedEndTags)
    while(startTagList.length > 0 && endTagList.length > 0){

        startTag = startTagList.pop()
        expectedTag = expectedEndTags.pop()
        endTag = endTagList.pop()     
        if(!tagMatches(startTag, endTag) && startTagList.length === 0){
            console.log('1startTag', startTag, 'expected', expectedTag, 'end', endTag)
            console.log(startTagList, endTagList, expectedEndTags)
            return `Expected # found ${endTag}`
        }
        if(!tagMatches(startTag, endTag) && endTagList.length === 0){
            console.log('2startTag', startTag, 'expected', expectedTag, 'end', endTag)
            console.log(startTagList, endTagList, expectedEndTags)
            return `Expected ${expectedTag} found #`
        }
        if(!tagMatches(startTag, endTag) && endTagList.length > 0 && startTagList.length > 0){
            console.log('3startTag', startTag, 'expected', expectedTag, 'end', endTag)
            console.log(startTagList, endTagList, expectedEndTags)
            return `Expected ${expectedTag} found ${endTag}`
        }
    }
    return SuccessMessage
}

// pivot
function tagChecker2(input){
    let open
    let close 
    let expected
    let found
    const closeRegex = new RegExp('</[A-Z]>', 'g')
    const openRegex = new RegExp('<[A-Z]>', 'g')
    let openTags = input.match(openRegex)
    let closeTags = input.match(closeRegex).reverse()

    while(openTags.length > 0 && closeTags.length > 0){
        open = openTags.pop()
        close = closeTags.pop()
        
        
        if (!open && close){
            return `Expected # found ${close}`
        } else if(!close && open) {
            return `Expected ${generateClosingTag(open)} found #`
        }
        
        if (open !== generateStartTag(close)){
            return `Expected ${generateClosingTag(open)} found ${close}`
        } else if (close !== generateStartTag(open)) {
            return `Expected ${close} found ${generateClosingTag(open)}`
        }
    }
    return SuccessMessage
}



function main(){
    const test1 = 'The following text<C><B>is centred and in boldface</B></C>'
    const test2 = '<B>This <\g>is <B>boldface</B> in <<*> a</B> <\6> <<d>sentence'
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

    console.log('#1')
    console.log(result1, result1 === expected1)
    console.log('#2')
    console.log(result2, result2 === expected2)
    console.log('#3')
    console.log(result3, result3 === expected3)
    console.log('#4')
    console.log(result4, result4 === expected4)
    console.log('#5')
    console.log(result5, result5 === expected5)
}

main()