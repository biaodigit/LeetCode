const deleteNode = function(node) {
    if(!node){
        return null
    }
    if(!node.next){
        node = null
        return
    }
    node.val = node.next.val
    let delNode = node.next
    node.next = delNode.next
    delNode = null
    return
};