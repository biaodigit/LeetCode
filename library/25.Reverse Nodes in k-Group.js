let reverseKGroup = function (head, k) {
    let size = 0,
        cur = head;
    while (cur) {
        size++;
        cur = cur.next;
    }
    let dummyHead = new ListNode(-1),
        nums = Math.floor(size / k);
    dummyHead.next = head;
    let prev = dummyHead,
        start = dummyHead.next;
    while (nums) {
        let count = k,
            tail = start,
            p = start,
            q = start.next;
        while (--count) {
            let next = q.next;
            q.next = p;
            p = q;
            q = next;
        }
        prev.next = p;
        start = q;
        tail.next = start;
        prev = tail;
        nums--;
    }
    return dummyHead.next
};
