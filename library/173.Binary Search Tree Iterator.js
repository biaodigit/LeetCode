var BSTIterator = function(root) {
    this.queue = this.inOrder(root)
    this.nextId = 0
};

BSTIterator.prototype.inOrder = function(root) {
    var queue = [],
        stack = [];
    while(true){
       while(root){
           stack.push(root)
           root = root.left
       }
       if(!stack.length) break;
       root = stack.pop()
       queue.push(root.val)
       root = root.right
    }        
    return queue
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.queue[this.nextId++]
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.nextId < this.queue.length
};