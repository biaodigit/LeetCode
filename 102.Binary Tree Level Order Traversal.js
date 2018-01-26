const levelOrder = function (root) {
    if (!root) {
        return []
    }
    let res = [],
        queue = [];
    queue.push(root)
    while (queue.length) {
        let size = queue.length,
            temp = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            temp.push(node.val)
        }
        res.push(temp)
    }
    return res
};