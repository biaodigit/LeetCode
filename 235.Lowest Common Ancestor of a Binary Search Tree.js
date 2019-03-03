let lowestCommonAncestor = function (root, p, q) {
    if (!root || !p || !q) return null
    let curr = root;
    while (curr.val !== null) {
        if (curr.val > p.val && curr.val > q.val) {
            curr = curr.left
        } else if (curr.val < p.val && curr.val < q.val) {
            curr = curr.right
        } else {
            return curr
        }
    }
    return null
};