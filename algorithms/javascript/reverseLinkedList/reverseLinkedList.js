/***********************************************************************************************
 * 206. Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * 
 * null  1 -> 2 -> 3 -> 4 -> 5 -> 
 * pre  cur   p
 * 
 * null <- 1   2 -> 3 -> 4 -> 5 ->
 *        pre cur   p
 * 
*************************************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

const reverseList1 = head => {
    if (head === null) return head
    let pre = null,
        cur = head,
        p = cur.next
    while (cur) {
        cur.next = pre
        pre = cur
        cur = p
        p = p && p.next
    }
    return pre
}

/**
 * 1 -> 2 -> 3 -> 4 ->
 * 
 *    head  tail
 * 
 * 1 -> 2    4 -> 3 ->
 *     head  p  tail
 * 
*/

const reverseList2 = head => {
    if (head === null || head.next === null) return head
    let tail = head.next, // the tail node of reverse list
        p = reverseList2(head.next) // the head of reverse list
    head.next = tail.next
    tail.next = head
    return p
}
