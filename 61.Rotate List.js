let rotateRight = function (head, k) {
    if (!head || !head.next) return head;

    let cur = head,
        len = 0;

    while (cur) {
        cur = cur.next;
        len++
    }

    k = k % len;
    cur = head;

    for (let i = 1; i < len - k; i++) {
        cur = cur.next
    }

    let tail = cur;
    while (tail && tail.next) {
        tail = tail.next
    }

    tail.next = head;
    let result = cur.next;
    cur.next = null;
    return result
};