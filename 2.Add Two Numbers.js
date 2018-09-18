const addTwoNumbers = function (l1, l2) {
    let list = new ListNode(0),
        head = list,
        carry = 0,
        sum = 0;
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next
        }
        if (sum >= 10) {
            carry = 1;
            sum -= 10
        }
        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0
    }
    return list.next
};