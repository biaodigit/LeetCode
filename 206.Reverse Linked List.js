const reverseList = function (head) {
    let next, pre = null;
    while (head) {
        next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
};