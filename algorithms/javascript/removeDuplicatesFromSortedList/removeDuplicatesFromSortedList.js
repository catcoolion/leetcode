/****************************************************
 * 83. 给定一个已排序的链表的头 head，删除所有重复的元素，
 *     使每个元素只出现一次 。返回 已排序的链表 。
 * 
 * 1 -> 1 -> 2 -> 3 -> 3 -> 
 * p
 * 
*/

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
        if (p.val === p.next.val)
            p.next = p.next.next
        else
            p = p.next
    }
    return head
}
