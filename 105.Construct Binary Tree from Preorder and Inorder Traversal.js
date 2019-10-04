let buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    let index = inorder.indexOf(preorder[0]),
        left = inorder.slice(0, index),
        right = inorder.slice(index + 1),
        node = new TreeNode(preorder[0]);

    node.left = buildTree(preorder.slice(1, index + 1), left);
    node.right = buildTree(preorder(index + 1), right);
    return node
};
