/**
 * 动态规划
 * @param n
 * @returns {*}
 */
const numSquares = (n) => {
    let memo = []
    for (let i = 0; i <= n; i++) {
        memo[i] = Infinity
    }
    memo[0] = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; i - j * j >= 0; j++) {
            memo[i] = Math.min(memo[i], memo[i - j * j] + 1)
        }
    }
    return memo[n]
}

/**
 * 记忆搜索
 * @param n
 * @returns {*}
 */
// const numSquares = function (n) {
//     let queue = [],
//         visited = [];
//     queue.push([n, 0])
//     for (let i = 0; i < n + 1; i++) {
//         visited[i] = false
//     }
//     visited[n] = true
//     while (queue.length) {
//         let node = queue.shift(),
//             num = node[0],
//             distance = node[1];
//         if (num === 0) {
//             return distance
//         }
//
//         for (let i = 1; num - i * i >= 0; i++) {
//             if (!visited[num - i * i]) {
//                 queue.push([num - i * i, distance + 1])
//                 visited[num - i * i] = true
//             }
//         }
//     }
// };
// const numSquares = (n) => {
//     const memo = [],
//         queue = [];
//     for (let i = 0; i <= n + 1; i++) {
//         memo[i] = false
//     }
//     queue.push([0, 0])
//     while (queue.length) {
//         let node = queue.shift(),
//             num = node[0],
//             distance = node[1];
//         if (num === n) return distance
//
//         for (let i = 1; num + i * i <= n; i++) {
//             if (!memo[num + i * i]) {
//                 queue.push([num + i * i, distance + 1])
//                 memo[num + i * i] = true
//             }
//         }
//     }
// }