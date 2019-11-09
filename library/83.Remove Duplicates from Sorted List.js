const deleteDuplicates = function (head) {
    let list = head;
    while (list && list.next) {
        if (list.val === list.next.val) {
            let curr = list.next;
            while (curr.next && curr.val === curr.next.val) {
                curr = curr.next;
            }
            list.next = curr.next;
        }
        list = list.next;

    }
    return head;
};