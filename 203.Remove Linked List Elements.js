const removeElements = function (head, val) {
    let virtualHead = new ListNode(null);
    virtualHead.next = head
    let cur = virtualHead;
    while (cur.next) {
        if (cur.next.val === val) {
            let del = cur.next
            cur.next = del.next
            del = null
        } else {
            cur = cur.next
        }
    }
    let ret = virtualHead.next
    virtualHead = null
    return ret
};