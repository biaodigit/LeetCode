let rightSideView = function (root) {
    if (!root) return [];
    let res = [], count = 0;
    let getRightSide = function (el, level) {
        if (!el) return;

        if (count < level) {
            res.push(el.val);
            count++
        }
        getRightSide(el.right, level + 1)
        getRightSide(el.left, level + 1)
    };
    getRightSide(root, 1);
    return res
};