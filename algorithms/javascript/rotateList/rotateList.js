/*****************************************************************
 * Given the head of a linked list, rotate the list to the right by k places.
 * 
 * 
 * 1 -> 2 -> 3 -> 4 -> 5 ->
 * head
 *                     p // p.next = head
 * 
******************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const rotateRight = (head, k) => {
    if (head === null) return head
    let p = head, n = 1
    while (p.next) { // calculate the length of the linked list
        p = p.next
        n += 1
    }
    p.next = head // structure cycle
    k = k % n
    let m = n - k // move steps
    while (m--) {
        p = p.next
        head = head.next
    }
    p.next = null
    return head
}
