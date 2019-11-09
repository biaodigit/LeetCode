let hasPathSum = function (root, sum) {
    if (!root) {
        return false
    }
    if (!root.left && !root.right) {
        return root.val === sum
    }
    if (hasPathSum(root.left, sum - root.val)) {
        return true
    }
    if (hasPathSum(root.right, sum - root.val)) {
        return true
    }
    return false
};