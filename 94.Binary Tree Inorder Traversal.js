/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const inorderTraversal = function (root) {
    /**
     * 递归
     * @type {Array}
     */
//        let res = []
//        const traversal = (node) => {
//            if(node){
//                traversal(node.left)
//                res.push(node.val)
//                traversal(node.right)
//            }
//        }
//        traversal(root)
//        return res
    /**
     * 栈模拟递归
     * @type {Array}
     */
    let stack = [],
        res = [];
    while (true) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        if (stack.length === 0) break
        let node = stack.pop()
        res.push(node.val)
        root = node.right
    }
    return res
};