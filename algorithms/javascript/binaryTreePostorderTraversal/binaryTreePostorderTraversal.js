/*******************************************************************************************
 * 
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 *
 * *****************************************************************************************/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * const postorder = root => {
 *      if (!root) return
 *      postorder(root.left)  // 0
 *      postorder(root.right) // 1
 *      console.log(root)     // 2
 *      return
 * }
 * 
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const postorderTraversal = root => {
    const ret = []
    const stack = []
    const state = [] // 0 traverse the tree of left node
                     // 1 traverse the tree of right node
                     // 2 output root val
    stack.push(root)
    state.push(0)
    while (stack.length) {
        const st = state.pop()
        switch (st) {
            case 0: {
                state.push(1)
                const top = stack[stack.length - 1]
                if (top && top.left) {
                    stack.push(top.left)
                    state.push(0)
                }
            } break
            case 1: {
                state.push(2)
                const top = stack[stack.length - 1]
                if (top && top.right) {
                    stack.push(top.right)
                    state.push(0)
                }
            } break
            case 2: {
                const top = stack.pop()
                top && ret.push(top.val)
            } break
        }
    }
    return ret
}
