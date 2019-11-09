let partition = function (head, x) {
    let result = new ListNode(0),
        temp = result,
        current = head,
        previous = null;
    while (current !== null) {
        while (current !== null && current.val < x) {
            temp.next = new ListNode(current.val);
            temp = temp.next;
            current = current.next
        }

        if (previous === null) {
            head = current;
        } else {
            previous.next = current
        }

        previous = current
        current = current === null ? null : current.next
    }
    temp.next = head;
    return result.next
};