let largestValues = function (root) {
    let res = [],
        queue = [root],
        queueLength = root ? 1 : 0;

    while (queueLength) {
        let maxVal = -Infinity
        for (let i = 0; i < queueLength; i++) {
            let node = queue.shift()
            maxVal = Math.max(maxVal, node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(maxVal)
        queueLength = queue.length
    }
    return res
};