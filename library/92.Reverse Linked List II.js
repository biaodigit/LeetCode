let reverseBetween = function (head, m, n) {
    if(!head) return null;
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i = 0; i < m - 1; i++) {
        prev = prev.next
    }
    let start = prev.next,
        then = start.next;

    for (let j = 0; j < n - m; j++) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }
    return dummy.next
};