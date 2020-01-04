/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
let mergeKLists = (lists) => {
    if (!lists || !lists.length) return null;
    let left = 0,
        right = lists.length;
    while (right) {
        while (left < right) {
            lists[left] = merge(lists[left], lists[right]);
            left++;
            right--;
        }
        left = 0;
    }

    return lists[0]
};

let merge = (list1, list2) => {
    let dummyHead = new ListNode(0);
    let cur = dummyHead;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next
        } else {
            cur.next = list2;
            list2 = list2.next
        }
        cur = cur.next
    }
    if (list1) cur.next = list1;
    if (list2) cur.next = list2;
    return dummyHead.next
};
