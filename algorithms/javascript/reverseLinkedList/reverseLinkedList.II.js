/******************************************************************************************************
 * 92. Given the head of a singly linked list and two integers left and right where left <= right,
 *  reverse the nodes of the list from position left to position right, and return the reversed list.
 * 
 * 
 * Locate the previous node of the linked list to be reversed
 * 
 * If left  is 1, create a virtual node
 * 
 * reverse the nodes of the list from position left to position right
 * 
*********************************************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 
 * 1 -> 2 -> 3 -> 4 ->
 *    head   tail
 * 
 * 1 -> 2   4 -> 3-> 
 *    head  p   tail
*/
const reverseN = (head, n) => {
    if (n === 1) return head
    let tail = head.next,
        p = reverseN(head.next, n - 1)
    head.next = tail.next
    tail.next = head
    return p
}

const reverseBetween = (head, left, right) => {
    let p = new ListNode(0, head),
        q = p,
        cnt = right - left + 1
    while (-- left) q = q.next
    q.next = reverseN(q.next, cnt)
    return p.next
}
