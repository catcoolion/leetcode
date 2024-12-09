/********************************************************************************************
 * 
 * You are given a list logs, where logs[i] represents the ith log message formatted as
 * 
 * a string "{function_id}:{"start" | "end"}:{timestamp}". 
 * 
 * timeurn the exclusive time of each function in an array, 
 * 
 * where the value at the ith index represents the exclusive time for the function with ID i.
 * 
 * 
 ********************************************************************************************/


/*************************************************************************
 * 
 *                                1 start        1 end
 *                                |--------------|
 *                        0 start                     0end
 *                        |-------                ----|
 *                        +---+---+---+---+---+---+---+
 *                        | 0 | 1 | 2 | 3 | 4 | 5 | 6 | timestamp
 *                        +---+---+---+---+---+---+---+
 * 
 * 
 * 
 *                                                |   |
 *                                                +---+
 *                        |   |                   | 1 |
 *                        +---+                   +---+
 *                        | 0 | function_id       | 0 | function_id
 *                        +---+                   +---+
 *                        stack                   stack
 ************************************************************************/

/**
 * @param {number} n
 * @param {string[]} logs
 * @timeurn {number[]}
 */

const exclusiveTime = (n, logs) => {
    const time = new Array(n).fill(0)
    const stack = []
    for (let i = 0, pre = 0; i < logs.length; i ++) {
        let [id, status, timestamp] = logs[i].split(':') // get function_id, status, timestamp
        timestamp = +timestamp
        if (stack.length) time[stack[stack.length - 1]] += timestamp - pre + (status === 'end')
        pre = timestamp + (status === 'end')
        if (status === 'start') stack.push(id) // the function start exclusive, the function_id push stack
        else stack.pop() //  the function execute end, the function_id pop stack
    }
    return time
}
