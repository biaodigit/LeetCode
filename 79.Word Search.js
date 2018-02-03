let exist = function (board, word) {
    let m = board.length,
        n = board[0].length,
        len = word.length
    word = word.split("");
    let searchWord = function (board, index, row, col) {
        if (row < 0 || col < 0 || row >= m || col >= n || board[row][col] !== word[index] || index >= len) return false

        board[row][col] = '#'
        index++
        if (index === len) return true

        if (searchWord(board, index, row - 1, col)) return true

        if (searchWord(board, index, row, col + 1)) return true

        if (searchWord(board, index, row + 1, col)) return true

        if (searchWord(board, index, row, col - 1)) return true

        board[row][col] = word[--index]

        return false;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (searchWord(board, 0, i, j)) return true
        }
    }
    return false
};