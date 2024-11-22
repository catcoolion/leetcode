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

const backspaceCompare = (s, t) => {
    const sStack = [],
          tStack = []
    for (let char of s) {
        if (char === '#') {
            sStack.length && sStack.pop()
        } else {
            sStack.push(char)
        }
    }
    for (let char of t) {
        if (char === '#') {
            tStack.length && tStack.pop()
        } else {
            tStack.push(char)
        }
    }
    return sStack.join() === tStack.join()
}
