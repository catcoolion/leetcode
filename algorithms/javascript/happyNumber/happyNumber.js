/****************************************************************
 * Write an algorithm to determine if a number n is happy.
 * 
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * 
 * Return true if n is a happy number, and false if not.
 * 
 * 
 * The repeatition process can be thought of as every node of a linked list
 * 
 * So, we can understand it as juding whether the linked list has cycle
 * 
*****************************************************************/

const getNext = n => {
    let sum = 0
    while (n) {
        let x = n % 10
        n = (n - x) / 10
        sum += x ** 2
    }
    return sum
}

const isHappy = n => {
    if (n === 1) return true
    let p = q = n
    do {
        p = getNext(p)
        q = getNext(getNext(q))
    } while (p !== q && q !== 1)
    return q === 1
}
