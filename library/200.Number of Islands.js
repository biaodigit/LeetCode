let numIslands = function (grid) {
    let m = grid.length;
    if (m === 0) return 0
    let n = grid[0].length;
    if (n === 0) return 0;

    let dfs = (grid, i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return;
        }
        if (grid[i][j] === "1") {
            grid[i][j] = "0";
            dfs(grid, i - 1, j);
            dfs(grid, i + 1, j);
            dfs(grid, i, j - 1);
            dfs(grid, i, j + 1);
        }
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
};