/*************************************************************************
 * 
 * Given two integer arrays pushed and popped each with distinct values,
 * return true if this could have been the result of a sequence of
 * push and pop operations on an initially empty stack, or false otherwise.
 * 
 * 
*************************************************************************/

const validateStackSequences = (pushed, popped) => {
    const stack = []
    for (let i = 0, j = 0; i < popped.length; i ++) {
        // If the top-of-stack element does not equal that the element to be popped from the popped stack
        while (j < popped.length && (!stack.length || stack[stack.length - 1] !== popped[i])) {
            stack.push(pushed[j++])
        }
        if (stack[stack.length - 1] !== popped[i]) return false
        // otherwise, the element pop from the stack
        stack.pop()
    }
    return true
}
