const minimumTotal = function (triangle) {
    let len = triangle.length,
        sz = triangle[len - 1].length,
        result = new Array(sz + 1).fill(0)
    for (let i = len - 1; i >= 0; i--) {
        let temp = triangle[i]
        for (let j = 0; j < temp.length; j++) {
            result[j] = Math.min(result[j], result[j + 1]) + temp[j]
        }
    }
    return result[0]
};