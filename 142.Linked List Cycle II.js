let detectCycle = (head) => {
    if(!head) return null
    let fast = head,
        slow = head;
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(slow === fast){
            slow = head
            while(slow !== fast){
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return null
};