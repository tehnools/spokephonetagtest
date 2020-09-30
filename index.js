
// Plan
// Find all tags in input
// Tags seem to be <anyUpperCaseLetter> and <closing tag anyUpperCaseLetter>
// List all starting tags first in a list
// once all tags found start finding starting from top


// variables
// need to just store the original input some where
// need an object of symbols and their indexes. Use index as the key.

// functions
// function that finds the corrosponding closing tag. If not found then return false.
// if no issue is found return Success if not return failed message on first occurence 
// refactor optimise

const SuccessMessage = 'Correctly tagged paragraph'

function generateClosingTag(tag) {
    return `</${tag.substr(1)}`
}

function generateStartTag(tag) {
    return `<${tag.substr(2)}`
}


function findCorospondingTag(startTags, endTags) {

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
    let startTagList = findStartTags(input)
    let endTagList = findEndTags(input)
    const expectedEndTags = startTagList.map(generateClosingTag)
    const expectedStartTags = endTagList.map(generateStartTag)
    
    console.log(startTagList, endTagList, expectedEndTags, expectedStartTags)
    // while(startTagList.length > 0 && endTagList > 0){

    // }
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

    console.log(result1, result1 === expected1)
    console.log(result2, result2 === expected2)
    console.log(result3, result3 === expected3)
    console.log(result4, result4 === expected4)
    console.log(result5, result5 === expected5)
}

main()