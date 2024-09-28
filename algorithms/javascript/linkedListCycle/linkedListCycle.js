/**********************************************************************************************
 * 141. Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * 
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * 
 * 
 * The fast pointer moves two steps
 * 
 * The slow pointer moves one step
 * 
 * Can they meet
 * 
**************************************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const hasCycle = head => {
    if (head === null || head.next === null) return false
    let p = head, q = head.next
    while (q && q.next && p !== q)  p = p.next, q = q.next.next
    return p === q
}
