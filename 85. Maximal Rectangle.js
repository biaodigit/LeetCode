let maximalRectangle = function (matrix) {
    if(matrix.length === 0) return 0;
    let max = 0,
        rows = matrix.length,
        cols = matrix[0].length,
        colBestR;


    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            colBestR = cols;
            for (let row1 = row; row1 < rows; row1++) {
                if (matrix[row1][col] === '0') break;
                for (let col1 = col; col1 < colBestR; col1++) {
                    if (matrix[row1][col1] === '0') {
                        colBestR = col1;
                        break;
                    }
                    max = Math.max(max, (row1 - row + 1) * (col1 - col + 1))
                }
            }
        }
    }

    return max
};