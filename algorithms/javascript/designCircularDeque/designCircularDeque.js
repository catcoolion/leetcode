/********************************************************************************
 * 
 * Design your implementation of the circular double-ended queue (deque).
 * 
********************************************************************************/

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

class MyCircularDeque {
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
    insertFront (value) {
        if (this.isFull()) return false
        this.head = (this.head - 1 + this.queue.length) % this.queue.length
        this.queue[this.head] = value
        this.cnt += 1
        return true
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    insertLast (value) {
        if (this.isFull()) return false
        this.queue[this.tail ++] = value
        this.tail %= this.queue.length
        this.cnt += 1
        return true
    }

    /**
     * @return {boolean}
     */
    deleteFront () {
        if (this.isEmpty()) return false
        this.head = (this.head + 1) % this.queue.length
        this.cnt -= 1
        return true
    }

    /**
     * @return {boolean}
     */
    deleteLast () {
        if (this.isEmpty()) return false
        this.tail = (this.tail - 1 + this.queue.length) % this.queue.length
        this.cnt -= 1
        return true
    }

    /**
     * @return {number}
     */
    getFront () {
        if (this.isEmpty()) return -1
        return this.queue[this.head]
    }

    /**
     * @return {number}
     */
    getRear () {
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
        return this.cnt === this.queue.length
    }
}