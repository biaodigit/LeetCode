let isBalanced = (root) => {
    let calHeight = (node) => {
        if (node === null) return 0;

        let left = calHeight(node.left),
            right = calHeight(node.right);

        return 1 + Math.max(left, right)
    };

    return !root || isBalanced(root.left) && isBalanced(root.right) && Math.abs(calHeight(root.left) - calHeight(root.right)) <= 1
};
