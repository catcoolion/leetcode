/***************************************************************************************
 * 
 * Design a queue that supports push and pop operations in the front, middle, and back.
 * 
****************************************************************************************/

class _Node {
    constructor (val = 0, next = null, pre = null) {
        this.val = val
        this.next = next
        this.pre = pre
    }

    /**
     * 
     *         pre                            pre      pre
     *        +----+                        +-----+  +-----+
     *        v    |                        v     |  v     |
     * ----+----+----+----+---      --+--------+--------+-------+--
     *      head tail                   head        p     tail
     * ----+----+----+----+---      --+--------+--------+-------+--
     *        |    ^                      |       ^  |     ^
     *        +----+                      +-------+  +-----+
     *         next                         next      next
    */
    // insert p to the front node of the current pointer
    insertPre (p) {
        p.next = this
        p.pre = this.pre
        if (this.pre) this.pre.next = p
        this.pre = p
        return
    }
    // insert p to the back node of the current pointer
    insertNext (p) {
        p.pre = this
        p.next = this.next
        if (this.next) this.next.pre = p
        this.next = p
        return
    }
    // delete the front node of the current pointer
    deletePre () {
        if (this.pre === null) return
        this.pre = this.pre.pre
        if (this.pre) this.pre.next = this
        return
    }
    // delete the back node of the current pointer
    deleteNext () {
        if (this.next === null) return
        this.next = this.next.next
        if (this.next) this.next.pre = this
        return
    }
}

class DoubleEndedQueue {
    head = new _Node
    tail = new _Node
    constructor () {
        this.cnt = 0
        this.head.next = this.tail
        this.tail.pre = this.head
    }

    pushFront (val) {
        this.head.insertNext(new _Node(val))
        this.cnt += 1
        return
    }

    pushBack (val) {
        this.tail.insertPre(new _Node(val))
        this.cnt += 1
        return
    }

    popFront () {
        if (this.isEmpty()) return -1
        const ret = this.head.next.val
        this.head.deleteNext()
        this.cnt -= 1
        return ret
    }

    popBack () {
        if (this.isEmpty()) return -1
        const ret = this.tail.pre.val
        this.tail.deletePre()
        this.cnt -= 1
        return ret
    }

    isEmpty () {
        return this.head.next === this.tail
    }

    front () {
        return this.head.next.val
    }

    back () {
        return this.tail.pre.val
    }

    size () {
        return this.cnt
    }
}

class FrontMiddleBackQueue {
    q1 = new DoubleEndedQueue // front double ended queue
    q2 = new DoubleEndedQueue // back double ended queue
    // if the queue's size is odd, q1's size > q2's size
    // is even, q1's size === q2's size
    constructor () {
    }
    
    pushFront (val) {
        this.q1.pushFront(val)
        this.update()
        return
    }

    pushMiddle (val) {
        if (this.q1.size() > this.q2.size()) {
            this.q2.pushFront(this.q1.back())
            this.q1.popBack()
        }
        this.q1.pushBack(val)
        this.update()
        return
    }

    pushBack (val) {
        this.q2.pushBack(val)
        this.update()
        return
    }

    popFront () {
        if (this.isEmpty()) return -1
        const ret = this.q1.popFront()
        this.update()
        return ret
    }

    popMiddle () {
        if (this.isEmpty()) return -1
        const ret = this.q1.popBack()
        this.update()
        return ret
    }

    popBack () {
        if (this.isEmpty()) return -1
        let ret
        // if q2 empty, call q1's popBack
        if (this.q2.isEmpty()) {
            ret = this.q1.popBack()
        } else {
            ret = this.q2.popBack()
        }
        this.update()
        return ret
    }

    update () {
        if (this.q1.size() < this.q2.size()) {
            this.q1.pushBack(this.q2.front())
            this.q2.popFront()
        }
        if (this.q1.size() === this.q2.size() + 2) {
            this.q2.pushFront(this.q1.back())
            this.q1.popBack()
        }
        return
    }

    isEmpty () {
        return this.q1.size() === 0
    }
}
