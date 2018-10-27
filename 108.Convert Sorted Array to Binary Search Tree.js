let sortedArrayToBST = function (nums, start = 0, end = nums.length) {
    if (start >= end) return null;
    let mid = Math.floor((start + end) / 2),
        node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums, start, mid);
    node.right = sortedArrayToBST(nums, mid + 1, end);
    return node
};