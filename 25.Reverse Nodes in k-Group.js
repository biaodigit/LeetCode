let reverseKGroup = function (head, k) {
    let size = 0,
        cur = head;
    while (cur) {
        size++;
        cur = cur.next;
    }
    let preHead = new ListNode(-1),
        nums = Math.floor(size / k);
    preHead.next = head;
    let prev = preHead,
        start = preHead.next;
    while (nums) {
        let count = k,
            reverseTail = start,
            p = start,
            q = start.next;
        while (--count) {
            let temp = q.next;
            q.next = p;
            p = q;
            q = temp;
        }
        prev.next = p;
        start = q;
        reverseTail.next = start;
        prev = reverseTail;
        nums--;
    }
    return preHead.next
};