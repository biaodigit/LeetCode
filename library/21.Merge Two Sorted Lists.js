const mergeTwoLists = function(l1, l2) {
    let vlist = new ListNode(null),
        cur = vlist;
    while(l1 && l2){
        if(l1.val < l2.val){
            cur.next = l1
            l1 = l1.next
        }else if(l1.val === l2.val){
            cur.next = l1
            l1 = l1.next
        }else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    if(l1){
        cur.next = l1
    }
    if(l2){
        cur.next = l2
    }
    cur = vlist.next
    vlist = null
    return cur
};