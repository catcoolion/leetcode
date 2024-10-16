/****************************************************************
 * 82. Given the head of a sorted linked list, delete all nodes that
 *  have duplicate numbers, leaving only distinct numbers from the original list.
 *  Return the linked list sorted as well.
 * 
 * 
*****************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 0 -> 1 -> 1 -> 2 -> 3 -> 4 ->
 * r          
 * p
 *           q
*/

const deleteDuplicates = head => {
    let ret = new ListNode(0, head),
        p = ret,
        q
    while (p.next) {
        if (p.next.val === p.next.next.val) {
            q = p.next.next
            while (q && q.val === p.next.val) q = q.next // find no-repeat node
            p.next = q
        } else {
            p = p.next
        }
    }
    return ret.next
}
