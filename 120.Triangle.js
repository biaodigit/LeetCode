const minimumTotal = function (triangle) {
    let result = [],
        len = triangle.length,
        sz = triangle[len - 1].length;
    for (let i = 0; i < sz + 1; i++) {
        result[i] = 0
    }
    for (let i = len - 1; i >= 0; i--) {
        let temp = triangle[i]
        for (let j = 0; j < temp.length; j++) {
            result[j] = Math.min(result[j], result[j + 1]) + temp[j]
        }
    }
    return result[0]
};