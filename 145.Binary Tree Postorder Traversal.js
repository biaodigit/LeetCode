/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = (root) => {
    /**
     * 递归
     * @type {Array}
     */
//        let res = []
//        const traversal = (node) => {
//            if(node){
//                traversal(node.left)
//                traversal(node.right)
//                res.push(node.val)
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
    if (root) {
        stack.push(root)
    }
    while (stack.length) {
        let temp = stack.pop()
        res.push(temp.val)
        if (temp.left) {
            stack.push(root.left)
        }
        if (temp.right) {
            stack.push(root.right)
        }
    }
    return res.reverse()
}