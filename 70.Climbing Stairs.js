const climbStairs = (n) => {
    if (n === 0 || n === 1) return n

    let a = 1, b = 1, result;
    for (let i = 2; i <= n; i++) {
        result = a + b
        a = b
        b = result
    }
    return result
};