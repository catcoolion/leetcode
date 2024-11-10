/**********************************************************************************
 * 
 * Given two strings s and goal, return true if you can swap two letters in s so
 * the result is equal to goal, otherwise, return false.
 * 
 * *********************************************************************************/


/***********************************************************************************
 * 
 * equle and repeate
 * 
 * aabc
 * aabc
 * 
 * 
 * 
 * A: _________[1]__________[2]__________
 * 
 * B: _________[3]__________[4]__________
 * 
 * A[1] === B[4]
 * A[2] === B[3]
 * 
************************************************************************************/

const hasRepeate = s => {
    // the number of times the letters
    const times = new Array(26).fill(0)
    for (let i = 0 ; i < s.length; i ++) {
        // a~z letter index
        let idx = s[i].charCodeAt() - 'a'.charCodeAt()
        times[idx] += 1
        if (times[idx] > 1) return true
    }
    return false
}

const buddyStrings = (s, goal) => {
    if (s.length !== goal.length) return false
    if (s === goal) return hasRepeate(s)
    let i = 0, j
    while (s[i] === goal[i]) ++i
    j = i + 1
    while (j < s.length && s[j] === goal[j]) ++j
    if (s[i] !== goal[j] || s[j] !== goal[i]) return false
    j = j + 1
    while (j < s.length) {
        if (s[j] !== goal[j]) return false
        j++
    }
    return true
}
