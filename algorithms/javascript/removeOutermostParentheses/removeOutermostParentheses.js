/********************************************************************************
 * 
 * Given a valid parentheses string s, consider its primitive decomposition:
 * s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
 * 
 * Return s after removing the outermost parentheses of every primitive string
 * in the primitive decomposition of s.
 * 
 *******************************************************************************/

/**
 * 
 * @param {String} s 
 * @return {String}
 */
const removeOuterParentheses = s => {
    let ret = ''
    /********************************************************************
     * 
     * top mock stack
     * 
     * +1: push
     * -1: pop
     * 0: stack empty
     *                      top
     *                       0
     * +---+---+---+---+---+---+---+---+---+---+
     * | ( | ( | ) | ( | ) | ) | ( | ( | ) | ) |
     * +---+---+---+---+---+---+---+---+---+---+
     *  pre                  i
     * 
     * 
     *                                      top
     *                                       0
     * +---+---+---+---+---+---+---+---+---+---+
     * | ( | ( | ) | ( | ) | ) | ( | ( | ) | ) |
     * +---+---+---+---+---+---+---+---+---+---+
     *                          pre          i
     * 
     *******************************************************************/
    for (let i = 0, pre = 0, top = 0; i < s.length; i ++) {
        if (s[i] === '(') top += 1
        else top -= 1
        if (top !== 0) continue
        ret += s.slice(pre + 1, i)
        pre = i + 1
    }
    return ret
}
