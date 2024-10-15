/**************************************************************
 * 25. Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
 *  
 *  k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
 * 
 *  You may not alter the values in the list's nodes, only nodes themselves may be changed.
 * 
****************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// reverse n nodes
const reverseN = (head, n) => {
    if (n === 1) return head
    let tail = head.next, p = reverseN(head.next, n - 1)
    head.next = tail.next
    tail.next = head
    return p
}

// Are there enough k nodes
const needReverse = (head, n) => {
    let p = head, cnt = n
    while (-- n && p) p = p.next
    if (p === null) return head // not enough
    return reverseN(head, cnt) // enough
}

const reverseKGroup = (head, k) => {
    let ret = new ListNode(0, head),
        p = ret, // the previous node before reverse
        q = p.next // the tail node after reverse, or the head node before reverse
    while ((p.next = needReverse(q, k)) !== q) { // reversed
    /**
     * 0 -> 1 -> 2 -> 3 -> 4 -> 5 ->
     * ret  q
     * p
     * 
     * 0 -> 2 -> 1 -> 3 -> 4 -> 5 ->
     * ret       q
     * p
    */
        p = q
        q = p.next
    }
    return ret.next
}