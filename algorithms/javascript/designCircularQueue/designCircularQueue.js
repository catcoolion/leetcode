/****************************************************************
 * 
 * Design your implementation of the circular queue
 * 
*****************************************************************/

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

class MyCircularQueue {
    constructor (k) {
        this.head = 0
        this.tail = 0
        this.cnt = 0
        this.queue = new Array(k)
    }

    /** 
     * @param {number} value
     * @return {boolean}
     */
    enQueue (value) {
        if (this.isFull()) return false
        this.queue[this.tail++] = value
        this.tail %= this.queue.length
        this.cnt += 1
        return true
    }

    /** 
     * @return {boolean}
     */
    deQueue () {
        if (this.isEmpty()) return false
        this.head += 1
        this.head %= this.queue.length
        this.cnt -= 1
        return true
    }

    /**
     * @return {number}
     */
    Front () {
        if (this.isEmpty()) return -1
        return this.queue[this.head]
    }

    /**
     * @return {number}
     */
    Rear () {
        if (this.isEmpty()) return -1
        return this.queue[(this.tail - 1 + this.queue.length) % this.queue.length]
    }

    /** 
     * @return {boolean}
     */
    isEmpty () {
        return this.cnt === 0
    }

    /**
     * @return {boolean}
     */
    isFull () {
        return this.queue.length === this.cnt
    }
}
