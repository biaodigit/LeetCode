const numSquares = function (n) {
    let queue = [],
        visited = [];
    queue.push([n, 0])
    for (let i = 0; i < n + 1; i++) {
        visited[i] = false
    }
    visited[n] = true
    while (queue.length) {
        let node = queue.shift(),
            num = node[0],
            distance = node[1];
        if (num === 0) {
            return distance
        }

        for (let i = 1; num - i * i >= 0; i++) {
            if (!visited[num - i * i]) {
                queue.push([num - i * i, distance + 1])
                visited[num - i * i] = true
            }
        }
    }
};