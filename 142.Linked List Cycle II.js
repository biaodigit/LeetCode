var detectCycle = function(head) {
    if(!head || !head.next) return null

    var list1 = head,
        list2 = head,
        isCycle = false;
    while(list1 !== null && list2 !== null){
        list1 = list1.next
        if(list2.next == null) return null
        list2 = list2.next.next
        if(list1.val === list2.val){
            isCycle = true;
            break;
        }
    }
    if(!isCycle) return null
    list1 = head
    while(list1 !== list2){
        list1 = list1.next
        list2 = list2.next
    }
    return list1
};