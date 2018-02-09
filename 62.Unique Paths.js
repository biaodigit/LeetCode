const uniquePaths = (m, n) => {
    let paths = [],
        path = []
    for (let i = 0; i < n; i++) {
        path[i] = 1
    }
    for (let j = 0; j < m; j++) {
        paths[j] = path
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            path[i][j] = path[i-1][j] + path[i][j-1]
        }
    }
    return paths[m-1][n-1]
};