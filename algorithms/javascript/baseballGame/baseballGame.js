/*****************************************************************************************
 * 
 * An integer x.
 * Record a new score of x.
 * '+'.
 * Record a new score that is the sum of the previous two scores.
 * 'D'.
 * Record a new score that is the double of the previous score.
 * 'C'.
 * Invalidate the previous score, removing it from the record.
 * Return the sum of all the scores on the record after applying all the operations.
 * 
*****************************************************************************************/

const calPoints = operations => {
    const stack = []
    let ret = 0
    for (let char of operations) {
        if (char === '+') {
            let sum = stack[stack.length - 1] + stack[stack.length - 2]
            ret += sum
            stack.push(sum)
        } else if (char === 'D') {
            let double = stack[stack.length - 1] * 2
            ret += double
            stack.push(double)
        } else if (char === 'C') {
            ret -= stack[stack.length - 1]
            stack.pop()
        } else {
            stack.push(char - '0')
            ret += stack[stack.length - 1]
        }
    }
    return ret
}
