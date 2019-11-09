let solveSudoku = function (board) {
    if (!board.length || !board) return;
    const LEN = 9,
        END = 81;

    let rowCache = Array(LEN),
        colCache = Array(LEN),
        boxCache = Array(LEN),
        row, col, box, num;
    for (row = 0; row < LEN; row++) {
        rowCache[row] = Array(LEN);
        for (col = 0; col < LEN; col++) {
            box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
            if (!colCache[col]) colCache[col] = Array(LEN);
            if (!boxCache[box]) boxCache[box] = [];

            num = board[row][col].charCodeAt(0) - '0'.charCodeAt(0);
            if (num >= 1 && num <= 9) {
                rowCache[row][num - 1] = true;
                colCache[col][num - 1] = true;
                boxCache[box][num - 1] = true;
            }
        }
    }

    let solve = function (plainIndex) {
        if (plainIndex >= END) return true;

        let row, col, num;
        row = Math.floor(plainIndex / LEN);
        col = plainIndex % LEN;
        if (board[row][col] === '.') {
            for (num = 1; num <= 9; num++) {
                if (!inCache(row, col, num)) {
                    addToCache(row, col, num, true);
                    if (solve(plainIndex + 1)) {
                        board[row][col] = num + '';
                        return true
                    }
                    addToCache(row, col, num, false);
                }
            }
        } else {
            return solve(plainIndex + 1)
        }
    };

    let inCache = function (row, col, num) {
        return rowCache[row][num - 1] || colCache[col][num - 1] || boxCache[3 * Math.floor(row / 3) + Math.floor(col / 3)][num - 1];
    };

    let addToCache = function (row, col, num, exist) {
        rowCache[row][num - 1] = exist;
        colCache[col][num - 1] = exist;
        boxCache[Math.floor(row / 3) * 3 + Math.floor(col / 3)][num - 1] = exist;
    };

    solve(0);
};