let isValidSudoku = function (board) {
    const boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let c = board[i][j];

            if (c !== '.') {
                let box = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (rows[i][c] || cols[j][c] || boxes[box][c]) {
                    return false
                }

                rows[i][c] = cols[j][c] = boxes[box][c] = true;
            }
        }
    }
};