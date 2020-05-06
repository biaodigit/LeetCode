const d = [[-1, 0], [0, 1], [1, 0], [0, -1]]

let bfs = (board, visited, x, y, m, n) => {
    let queue = [{ x, y }]
    visited[x][y] = true
    while (queue.length) {
        let curr = queue.shift()
        for (let i = 0; i < 4; i++) {
            let newX = curr.x + d[i][0],
                newY = curr.y + d[i][1];
            if (inArea(newX, newY, m, n) && !visited[newX][newY] && board[newX][newY] === 'O') {
                queue.push({ x: newX, y: newY })
                visited[newX][newY] = true
            }
        }
    }
}

let inArea = (x, y, m, n) => {
    return x >= 0 && x < m && y >= 0 && y < n
}

let isEdge = (x, y, m, n) => {
    return x === 0 || x === m - 1 || y === 0 || y === n - 1
}

let solve = (board) => {
    let m = board.length;
    if (!m) return
    let n = board[0].length;
    if (!n) return

    let visited = Array(m).fill(null).map(p => Array(n).fill(false))
    for (let i = 1; i < n - 1; i++) {
        if (board[0][i] === 'O') {
            bfs(board, visited, 0, i, m, n)
        }
    }

    for (let i = 1; i < m - 1; i++) {
        if (board[i][0] === 'O') {
            bfs(board, visited, i, 0, m, n)
        }
    }

    for (let i = 1; i < n - 1; i++) {
        if (board[m - 1][i] === 'O') {
            bfs(board, visited, m - 1, i, m, n)
        }
    }

    for (let i = 1; i < m - 1; i++) {
        if (board[i][n - 1] === 'O') {
            bfs(board, visited, i, n - 1, m, n)
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

