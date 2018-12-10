let setZeroes = function (matrix) {
    let fr = false,
        fc = false;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) fr = true;
                if (j === 0) fc = true;

                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }


    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }

    if (fr) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0
        }
    }

    if (fc) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }

    return matrix
};