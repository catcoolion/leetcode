/**********************************************************************************
 * 142. Given the head of a linked list, return the node where the cycle begins. 
 * 
 * If there is no cycle, return null.
 * 
 * 
 * 
 * Whether there are cycle
 * 
 * has cycle, find the cycle begins
 * 
 * 
 * 
 *  If slow pointer moves n steps to the cycle begins, at this time, fast pointer moves 2n steps
 * 
 *  If cycle's length is x + n, the distance between fast and slow pointer is x
 * 
 *  Fast pointer moves 2x steps and slow pointer moves x steps before meeting
 * 
 *  where it meets: cycle's length - x, and distance cycle begins at n
 * 
 *  Fast pointer needs to be moved n steps to cycle begins
 * 
 *  Slow pointer back to start position
 * 
 *  Let them moves n steps together to the cycle begins
 * 
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const detectCycle = head => {
    if (head === null || head.next === null) return null
    let p = q = head
    do {
        p = p.next
        q = q.next.next
    } while (q && q.next && p !== q)
    if (q === null || q.next === null) return null
    // has cycle
    p = head
    while (p !== q) p = p.next, q = q.next
    return p
}