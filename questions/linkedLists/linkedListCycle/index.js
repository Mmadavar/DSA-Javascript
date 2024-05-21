/** Linked List Cycle **
 * 
 * Return true if there is a cycle in the given linked list.
 * Otherwise return false.  
 *  
 * @example
 * listCycle(1 -> 2 -> 3 -> 1) -> true
 * listCycle(10 -> 20 -> 30) -> false
 * listCycle(100 -> 200 -> 300 -> 100) -> true
 * 
 */

 const listCycle = (head) => {
        let list = new Set();
        let curr = head;
        while (curr) {
            if (list.has(curr)) {
                return true;
            }
            list.add(curr);
            curr = curr.next
        }

        return false;


}


module.exports = listCycle;