const preorderTraversal = (root) => {
    /**
     *  递归
     * @type {Array}
     */
//        let res = [];
//        const traversal = (root) => {
//            res.push(root.val)
//            traversal(root.left)
//            traversal(root.right)
//        }
//        traversal(root)
//        return res
    /**
     *  栈模拟递归
     * @type {Array}
     */
    let stack = [],
        res = [];
    if (root) {
        stack.push(root)
    }
    while (stack.length) {
        let temp = stack.pop()
        res.push(temp.val)
        if (temp.right) {
            stack.push(temp.right)
        }
        if (temp.left) {
            stack.push(temp.left)
        }
    }
    return res
}