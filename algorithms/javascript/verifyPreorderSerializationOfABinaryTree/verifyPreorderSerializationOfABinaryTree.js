/************************************************************************************
 * 
 * Given a string of comma-separated values preorder,
 * 
 * return true if it is a correct preorder traversal serialization of a binary tree.
 * 
 ************************************************************************************/


/************************************************************************************
 * 
 * 9,3,4,#,#,1,#,#,2,#,6,#,#
 * 
 *                    9
 *                 /     \
 *               3        2
 *             /   \     /   \
 *            4     1   #     6
 *           / \   / \       / \
 *          #   # #   #     #   #
 * 
 * 
 * 9,3,4,#,#
 * 9,3,#,1,#,#
 * 9,3,#,#
 * 9,#,2,#,6,#,#
 * 9,#,2,#,#
 * 9,#,#
 * #
 * 
 *************************************************************************************/


/**
 * 
 * @param {String} preorder 
 * @return {Boolean}
 */

const isValidSerialization = preorder => {
    const stack = []
    for (let char of preorder.split(',')) {
        stack.push(char)
        while (stack.length >= 3 &&
            stack[stack.length - 1] === '#' &&
            stack[stack.length - 2] === '#' &&
            stack[stack.length - 3] !== '# '
        ) {
            stack.pop()
            stack.pop()
            stack[stack.length - 1] = '#'
        }
    }
    return stack.length === 1 && stack[0] === '#'
}
