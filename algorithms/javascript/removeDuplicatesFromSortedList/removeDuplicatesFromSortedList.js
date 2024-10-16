/*************************************************************************
 * 83.Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
 *  Return the linked list sorted as well.
 * 
 * 1 -> 1 -> 2 -> 3 -> 3 -> 
 * p
 * 
**************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const deleteDuplicates = head => {
    if (head === null) return head
    let p = head
    while (p.next) {
        if (p.val === p.next.val) // if equal, delete next
            p.next = p.next.next
        else
            p = p.next // move a step
    }
    return head
}
