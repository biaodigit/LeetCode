let recoverTree = function (root) {
    let curr = root,
        stack = [],
        p1 = null,
        p2 = null,
        prev = null;

    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left
        }
        curr = stack.pop();
        if (prev && curr.val < prev.val) {
            p1 = curr;
            if (!p2) p2 = prev
        }
        prev = curr;
        curr = curr.right
    }

    let temp = p1.val;
    p1.val = p2.val;
    p2.val = temp
};
