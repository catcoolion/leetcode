/******************************************************************
 * 
 * Given two strings s and t, return true if they are equal
 * 
 * when both are typed into empty text editors.
 * 
 * '#' means a backspace character.
 * 
 * 
*******************************************************************/

const transform = (s, stack) => {
    for (let char of s) {
        if (char === '#') {
            stack.length && stack.pop()
        } else {
            stack.push(char)
        }
    }
}

const backspaceCompare = (s, t) => {
    const sStack = [],
          tStack = []
    transform(s, sStack)
    transform(t, tStack)
    while (sStack.length || tStack.length) {
        if (sStack[sStack.length - 1] !== tStack[tStack.length - 1]) return false
        sStack.pop()
        tStack.pop()
    }
    return true
}
