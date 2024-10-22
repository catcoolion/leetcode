/******************************************************************************
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You must solve the problem without modifying the values in the list's nodes 
 * (i.e., only nodes themselves may be changed.)
 * 
*******************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/***********************************************************
 * 
 *   1 -> 2 ->
 * head
 *        p
 * 
 * 
 *   1 -> 2 -> 3 -> 4 ->
 * head
 *        p
 * 
************************************************************/

const swapPairs = head => {
    if (head === null || head.next === null) return head
    let p = head.next
    head.next = swapPairs(p.next)
    p.next = head
    return p
}