/************************************************************
 * 
 * 19. 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *                     n
 *      1 -> 2 -> 3 -> 4 -> 5 -> null
 *      p0             
 * h -> 
 * q1             p1
 *                q2              p2
 * 
 * 想要删除倒数第 n 个结点，需要找到倒数第 n - 1 个结点 p1
 * 
 * p 结点从 p0 向后走 n 步至 p1
 * 
 * 引入虚拟头结点 h【删除结点有可能会改变头结点】q 指向 h
 * 
 * p、q 同时向后移动，p 移动至 p2 时，q 移动至倒数 n - 1 个结点 q2
 * 
*************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const removeNthFromEnd = (head, n) => {
  let h = new ListNode(0, head)
  let p = h.next, q = h
  while (n --) p = p.next
  while (p) p = p.next, q = q.next
  q.next = q.next.next
  return h.next
}
