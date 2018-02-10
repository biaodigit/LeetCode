const climbStairs = (n) => {
    if (n === 0 || n === 1 || n === 2) return n

    let a = 1, b = 2, result;
    for (let i = 3; i <= n; i++) {
        result = a + b
        a = b
        b = result
    }
    return result
};

// const climbStairs = (n) => {
//     if (n === 0 || n === 1) return n
//
//     const memo = []
//     memo[1] = 1, memo[2] = 2
//     for (let i = 3; i <= n; i++) {
//         memo[i] = memo[i - 1] + memo[i - 2]
//     }
//     return memo[n]
// };