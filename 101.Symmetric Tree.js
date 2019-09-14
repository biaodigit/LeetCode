let isSymmetric = function (root) {
    let Symmetric = function (node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (node1.val !== node2.val) return false;

        return Symmetric(node1.left, node2.right) && Symmetric(node1.right, node2.left)
    };

    return Symmetric(root, root)
};
