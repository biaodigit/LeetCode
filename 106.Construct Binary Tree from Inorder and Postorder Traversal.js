let buildTree = function (inorder, postorder) {
    if (!inorder.length || !postorder.length) return null;

    let index = inorder.indexOf(postorder.pop()),
        left = inorder.slice(0, index),
        right = inorder.slice(index + 1),
        node = new TreeNode(inorder[index]);
    node.left = buildTree(left, postorder.slice(0, left.length));
    node.right = buildTree(right, postorder.slice(left.length));
    return node
};
