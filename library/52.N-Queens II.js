let totalNQueens = (n) => {
    let res = [],
        row = [],
        col = [],
        dia1 = [],
        dia2 = [];
    for (let i = 0; i < n; i++) {
        col[i] = false
    }

    for (let i = 0; i <= 2 * n - 1; i++) {
        dia1[i] = false
        dia2[i] = false
    }

    let generateBoard = (n, row) => {
        let board = []
        for (let i = 0; i < n; i++) {
            board[i] = ""
            for (let j = 0; j < n; j++) {
                board[i] += '.'
            }
        }
        for (let k = 0; k < n; k++) {
            let str = board[k].split("")
            str.splice(row[k], 1, "Q")
            board[k] = str.join("")
        }
        return board
    }
    let putQueen = (n, index, row) => {
        if (n === index) {
            res.push(generateBoard(n, row))
            return
        }

        for (let i = 0; i < n; i++) {
            if (!col[i] && !dia1[index + i] && !dia2[index - i + n - 1]) {
                row.push(i)
                col[i] = true
                dia1[index + i] = true
                dia2[index - i + n - 1] = true
                putQueen(n, index + 1, row)
                col[i] = false
                dia1[index + i] = false
                dia2[index - i + n - 1] = false
                row.pop()
            }
        }
    }
    putQueen(n, 0, row)
    return res.length
};