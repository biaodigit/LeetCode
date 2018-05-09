let rightSideView = function (root) {
    if (!root) return [];
    let res = [];
    let getRightSide = function (el, level) {
        if (!el) return;

        if (res.length < level) {
            res.push(el.val)
        }
        getRightSide(el.right, level + 1)
        getRightSide(el.left, level + 1)
    };
    getRightSide(root, 1);

    return res
};