let maximalRectangle = function (matrix) {
    let max = 0;

    let getMax = function (i, j, w, h) {
        // right
        if (j + w < matrix[0].length) {
            for (let k = 0; k < h; k++) {
                if (matrix[i + k][j + w] === '0') break;

                if (k === h - 1) {
                    max = Math.max(max, h * (w + 1));
                    getMax(i, j, w + 1, h)
                }
            }
        }

        // down
        if (i + h < matrix.length) {
            for (let k = 0; k < w; k++) {
                if (matrix[i + h][j + k] === '0') break;

                if (k === w - 1) {
                    max = Math.max(max, (h + 1) * w);
                    getMax(i, j, w, h + 1)
                }
            }
        }
    };

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '1') {
                max = Math.max(max, 1);
                getMax(i, j, 1, 1)
            }
        }
    }

    return max
};