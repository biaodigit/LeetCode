const removeNthFromEnd = function (head, n) {
    if (n <= 0 || !head) {
        return
    }
    let dummyHead = new ListNode(null);
    dummyHead.next = head;
    let p = dummyHead, q = dummyHead;
    while (n--) {
        p = p.next;
        if (!p) {
            return null
        }
    }
    while (p.next) {
        p = p.next;
        q = q.next
    }
    let delNode = q.next;
    q.next = delNode.next;
    delNode = null;
    let retNode = dummyHead.next;
    dummyHead = null;
    return retNode
};
