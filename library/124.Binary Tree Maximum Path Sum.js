const maxPathSum = function (root) {
    let maxVal = -Infinity

    const findPath = function (node) {
        if (!node) return 0
        let leftVal = Math.max(0, findPath(node.left))
        let rightVal = Math.max(0, findPath(node.right))
        maxVal = Math.max(maxVal, leftVal + rightVal + node.val);
        return Math.max(leftVal, rightVal) + node.val
    }

    findPath(root)
    return maxVal
};