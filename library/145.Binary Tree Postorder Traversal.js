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
    if (!root) return [];
    let stack = [],
        res = [],
        cur = root,
        right = null;
    stack.push(cur);
    while (stack.length) {
        while (cur.left) {
            stack.push(cur.left);
            cur = cur.left;
        }
        cur = stack.pop();
        while(!cur.right || cur.right === right){
            res.push(cur);
            right = cur;
            cur = stack.pop();
        }
        stack.push(cur)
        cur = cur.right
    }
    return res
}