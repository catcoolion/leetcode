/***************************************************************************************************
 * 
 * Given a string s which represents an expression, evaluate this expression and return its value. 
 * 
 * The integer division should truncate toward zero. 
 * 
***************************************************************************************************/

/*************************************************************
 * 
 * 3 + 2 * 2
 * 
 * (3 + (2 * 2)) // `(` => push  `)` => pop
 * 
 * 
 * values    [3, 2, 2]
 * operators [+, *]
*************************************************************/

/**
 * @param {string} s
 * @return {number}
 */

const level = op => {
    switch (op) {
        case '$': return -Infinity
        case '+':
        case '-': return 1
        case '*':
        case '/': return 10
    }
    return 0
}

const calcExpression = (x, op, y) => {
    switch (op) {
        case '+': return x + y
        case '-': return x - y
        case '*': return x * y
        case '/': return (x - x % y) / y
    }
    return 0
}

const calculate = s => {
    const values = []
    const operators = []
    s += '$' // end of string
    let n = 0
    for (let c of s) {
        if (c === ' ') continue
        if (level(c) === 0) {
            n = n * 10 + Number(c)
            continue
        }
        values.push(n)
        n = 0
        // the priority of the top-of-stack operator >= current operator, calculate expression
        while (operators.length && level(operators[operators.length - 1]) >= level(c)) {
            const y = values.pop()
            const x = values.pop()
            values.push(calcExpression(x, operators[operators.length - 1]), y)
            operators.pop()
        }
        operators.push(c)
    }
    return values[values.length - 1]
}
