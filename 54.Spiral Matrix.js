const spiralOrder = function (matrix) {
    if (!matrix.length) return [];

    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1,
        ret = [];
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            ret.push(matrix[top][i])
        }

        for (let i = top + 1; i <= bottom; i++) {
            ret.push(matrix[i][right])
        }

        if (top !== bottom) {
            for (let i = right - 1; i >= left; i--) {
                ret.push(matrix[bottom][i])
            }
        }

        if (left !== right) {
            for (let i = bottom - 1; i > top; i--) {
                ret.push(matrix[i][left])
            }
        }

        left++;
        top++;
        right--;
        bottom--;
    }

    return ret
};