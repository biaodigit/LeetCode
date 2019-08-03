let generateTrees = function (n) {
    if (n === 0) return [];
    return gen(1, n)
};

let gen = function (s, e) {
    if (s > e) return [null];
    let result = [], treeL, treeR, root;
    for (let i = s; i <= e; i++) {
        treeL = gen(s, i - 1);
        treeR = gen(i + 1, e);
        for (let m = 0; m < treeL.length; m++) {
            for (let n = 0; n < treeR.length; n++) {
                root = new TreeNode(i);
                root.left = treeL[m];
                root.right = treeR[n];
                result.push(root)
            }
        }
    }
    return result
};
