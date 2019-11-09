let generateMatrix = function (n) {
    let ret = Array(n),
        top = 0,
        bottom = n - 1,
        left = 0,
        right = n - 1,
        num = 1;
    for (let i = 0; i < ret.length; i++) {
        ret[i] = []
    }
    while (top <= bottom && left <= right && num <= n * n) {
        for (let i = left; i <= right; i++) {
            ret[top][i] = num++
        }
        for (let i = top + 1; i <= bottom; i++) {
            ret[i][right] = num++
        }

        if (top !== bottom) {
            for (let i = right - 1; i >= left; i--) {
                ret[bottom][i] = num++
            }
        }

        if (left !== right) {
            for (let i = bottom - 1; i > top; i--) {
                ret[i][left] = num++
            }
        }

        left++;
        top++;
        right--;
        bottom--;
    }

    return ret
};