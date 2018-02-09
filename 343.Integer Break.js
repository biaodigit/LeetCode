const integerBreak = (n) => {
    const memo = []
    for (let i = 0; i <= n + 1; i++) {
        memo[i] = -1
    }

    memo[1] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= n - 1; j++) {
            memo[i] = Math.max(memo[i], j * (i - j), j * memo[i - j])
        }
    }
    return memo[n]
}

// const integerBreak = function (n) {
//     let memo = []
//     for (let i = 0; i <= n + 1; i++) {
//         memo[i] = -1
//     }
//     let breakInteger = (n) => {
//         if (n === 1) return 1
//         if (memo[n] !== -1) {
//             return memo[n]
//         }
//         let res = -1
//         for (let i = 1; i <= n - 1; i++) {
//             res = Math.max(res, i * (n - i), i * breakInteger(n - i))
//         }
//         memo[n] = res
//         return res
//     }
//     return breakInteger(n)
// };