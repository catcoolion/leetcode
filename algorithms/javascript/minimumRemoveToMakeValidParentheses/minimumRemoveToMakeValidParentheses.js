/*******************************************************************************
 * 
 * Given a string s of '(' , ')' and lowercase English characters.
 * 
 ******************************************************************************/


/******************************************************************************
 * 
 *         +---+---+---+---+---+---+---+---+---+---+---+---+---+
 *         | l | e | e | ( | t | ( | c | ) | o | ) | d | e | ) |
 *         +---+---+---+---+---+---+---+---+---+---+---+---+---+
 *  stack                3       4      pop     pop
 *  set                                                      11
 * 
 * 
 *         +---+---+---+---+
 *         | ) | ) | ( | ( |
 *         +---+---+---+---+
 *  stack            2   3
 *                  pop pop
 *  set      0   1   2   3
 * 
 *****************************************************************************/


/**
 * 
 * @param {String} s 
 * @return {String}
 */

const minRemoveToMakeValid = s => {
    const stack = []
    const set = new Set
    for (let i = 0; i < s.length; i ++) {
        // If the character is not `(` or `)`, jump out of the loop
        if (s[i] !== '(' && s[i] !== ')') continue
        // If the character is `(`, push the stack
        if (s[i] === '(') stack.push(i)
        else {
            !stack.length ?
                set.add(i) :
                stack.pop()
        }
    }
    while (stack.length) {
        set.add(stack.pop())
    }
    let ret = ''
    for (let i = 0; i < s.length; i ++) {
        if (set.has(i)) continue
        ret += s[i]
    }
    return ret
}
