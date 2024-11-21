/********************************************************************
 * 
 * 实现一个MyQueue类，该类用两个栈来实现一个队列。
 * 
*********************************************************************/


class MyQueue {
    constructor () {
        this.pushedStack = [] // push queue
        this.popedStack = [] // pop queue
    }

    /*************************************************
     * pop                              push
     * ---+---+---+---+     +---+---+---+---
     *    |   |   |   |     | 1 | 2 | 3 |
     * ---+---+---+---+     +---+---+---+---
     * 
     * 
     * pop                              push
     * ---+---+---+---+     +---+---+---+---
     *    | 3 | 2 | 1 |     |   |   |   |
     * ---+---+---+---+     +---+---+---+---
     * 
    ***************************************************/

    push (x) {
        while (this.popedStack.length) {
            this.pushedStack.push(this.popedStack.pop())
        }
        this.pushedStack.push(x)
    }

    pop () {
        while (this.pushedStack.length) {
            this.popedStack.push(this.pushedStack.pop())
        }
        return this.popedStack.pop()
    }

    peek () {
        while (this.pushedStack.length) {
            this.popedStack.push(this.pushedStack.pop())
        }
        return this.popedStack[this.popedStack.length - 1]
    }

    empty () {
        return !this.pushedStack.length && !this.popedStack.length
    }
}

