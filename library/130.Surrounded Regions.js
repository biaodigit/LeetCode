let solve = (board) => {
    let m = board.length;
    if (!m) return
    let n = board[0].length;
    if (!n) return

    const d = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    let visited = Array(m).fill(null).map(p => Array(n).fill(false))


    let inArea = (i, j) => {
        return i >= 0 && i < m && j >= 0 && j < n
    }

    let search = (x, y) => {
        visited[x][y] = true
        for (let i = 0; i < 4; i++) {
            let newX = x + d[i][0],
                newY = y + d[i][1]
            if (inArea(newX, newY) && board[newX][newY] === 'O' && !visited[newX][newY]) {
                search(newX, newY)
            }
        }
    }

    for (let i = 1; i < n - 1; i++) {
        if (board[0][i] === 'O') {
            search(0, i)
        }
    }

    for (let i = 1; i < m - 1; i++) {
        if (board[i][0] === 'O') {
            search(i, 0)
        }
    }

    for (let i = 1; i < n - 1; i++) {
        if (board[m - 1][i] === 'O') {
            search(m - 1, i)
        }
    }

    for (let i = 1; i < m - 1; i++) {
        if (board[i][n - 1] === 'O') {
            search(i, n - 1)
        }
    }

    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (visited[i][j]) {
                board[i][j] = 'O'
            } else {
                board[i][j] = 'X'
            }
        }
    }
    return board
};

