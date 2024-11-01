/********************************************************************
 * 
 * A linked list of length n is given such that each node contains an additional random pointer, 
 * which could point to any node in the list, or null.
 * 
 * Retuen a deep copy of the list.
 * 
*********************************************************************/



/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */


/**
 *       +-------------+                         
 *       |             v                         
 *    +-------+    +-------+    +-------+        
 *    | node1 |----> node2 |----> node3 |--->NULL
 *    +-------+    +-------+    +-------+        
 *      ^  ^           |           |             
 *      |  +-----------+           |             
 *      +--------------------------+
 * 
 *  
 *  1) to copy the list
 * 
 *       +-------------------------+                                     
 *       |                         v                                     
 *    +--+----+     +-----+    +-------+     +-----+    +-------+     +-----+     
 *    | node1 |---> | NEW |----> node2 |---> | NEW |----> node3 |---> | NEW | ---> NULL
 *    +-------+     +-----+    +---+---+     +-----+    +--+----+     +-----+ 
 *      ^  ^                       |                       |             
 *      |  +-----------------------+                       |             
 *      +--------------------------------------------------+   
 * 
 *  2) change the new node's random pointer
 * 
 *  3) split the list, return the new list
 *    
*/


const copyRandomList = head => {
    if (head === null) return null
    let p = head, q, newHead
    // copy the node and insert the list
    while (p) {
        q = new _Node(p.val, p.next, null)
        p.next = q
        p = q.next
    }

    // change random pointer
    p = head
    while (p) {
        q = p.next
        if (p.random) q.random = p.random.next
        p = p.next && p.next.next
    }

    // split the list
    p = head
    newHead = head.next
    while (p) {
        q = p.next
        p.next = q.next
        if (p.next) q.next = p.next.next
        p = p.next
    }
    return newHead
}
