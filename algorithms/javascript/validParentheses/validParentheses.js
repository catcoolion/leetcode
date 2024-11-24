/******************************************************************************************************************************
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * 
********************************************************************************************************************************/

/**
 * If the character is '(', '[' or '{', push the stack.
 * 
 * If the character of top-of-stack equal the current character, pop from the stack,
 * 
 * otherwise, return false
 * 
*/
const isValid = s => {
    const stack = []
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let char of s) {
        switch (char) {
            case '(':
            case '[':
            case '{':
                stack.push(map[char])
                break
            case ')':
            case ']':
            case '}':
                if (stack[stack.length - 1] === char) {
                    stack.pop()
                } else {
                    return false
                }
            default:
                break
        }
    }
    return stack.length === 0
}
