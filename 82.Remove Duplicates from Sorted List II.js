const deleteDuplicates = function (head) {
    let dummyHead = new ListNode(null);
    dummyHead.next = head;

    let list = head,
        curr = dummyHead,
        val;

    while (list && list.next) {
        if (list.val === list.next.val) {
            val = list.val;
            while (list && list.val === val) {
                list = list.next
            }
            curr.next = list;
        } else {
            curr = curr.next;
            list = list.next
        }
    }
    return dummyHead.next
};