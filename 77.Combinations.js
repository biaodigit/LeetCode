let combine = function (n, k) {
    if (n <= 0 || k <= 0 || k > n) return []
    let res = []
    let generateCombination = function (n, k, start, arr) {
        if (arr.length === k) {
            res.push(arr.slice(0))
            return
        }
        for (let i = start; i <= n - (k - arr.length) + 1; i++) {
            arr.push(i)
            generateCombination(n, k, i + 1, arr)
            arr.pop()
        }
    }
    generateCombination(n, k, 1, [])
    return res
};