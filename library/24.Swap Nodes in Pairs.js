const swapPairs = function (head) {
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;
    let p = dummyHead;
    while (p.next && p.next.next) {
        let node1 = p.next,
            node2 = p.next.next,
            next = node2.next;
        node2.next = node1;
        node1.next = next;
        p.next = node2;
        p = node1
    }
    let list = dummyHead.next;
    dummyHead = null;
    return list
};
