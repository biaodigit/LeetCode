let pathSum = function (root, sum) {
    let res = [];
    let totalPath = (root, sum, arr) => {
        arr.push(root.val);
        if (!root.left && !root.right && sum === root.val) {
            res.push(arr.slice(0));
        }
        if (root.left) totalPath(root.left, sum - root.val, arr);
        if (root.right) totalPath(root.right, sum - root.val, arr);
        arr.pop();
    };
    totalPath(root, sum, []);
    return res
};
