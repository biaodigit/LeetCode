let rotate = function (matrix) {
    let start = 0,
        end = matrix.length - 1,
        temp;
    while (start < end) {
        temp = matrix[start];
        matrix[start] = matrix[end];
        matrix[end] = temp;
        start++;
        end--;
    }

    let i = 1;
    while (i < matrix.length) {
        for (let j = 0; j < i; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp
        }
        i++
    }
};