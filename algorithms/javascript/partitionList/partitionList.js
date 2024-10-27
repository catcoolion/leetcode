/***********************************************************************
 * Given the head of a linked list and a value x, partition it such that
 * 
 * all nodes less than x come before nodes greater than or equal to x.
 * 
 * You should preserve the original relative order of the nodes in each of the two partitions.
 * 
 * 
***********************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * small: <= x
 * 
 * large: > x
 * 
*/

const partition = (head, x) => {
    let large = new ListNode(), small = new ListNode()
    let p1 = large, p2 = small, p = head, q
    while (p) {
        q = p.next
        if (p.val > x) {
            p.next = p1.nexxt
            p1.next = p
            p1 = p
        } else {
            p.next = p2.next
            p2.next = p
            p2 = p
        }
        p = q
    }
    p2.next = large.next
    return small.next
}
