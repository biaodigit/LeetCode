/**
 * Definition for a binary tree root.
 * function Treeroot(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const inorderTraversal = function (root) {
    /**
     * 递归
     * @type {Array}
     */
    // let res = []
    // const traversal = (root) => {
    //     if (root) {
    //         traversal(root.left)
    //         res.push(root.val)
    //         traversal(root.right)
    //     }
    // }
    // traversal(root)
    // return res
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
        root = stack.pop()
        res.push(root.val)
        root = root.right
    }
    return res
};