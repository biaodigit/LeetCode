let convert = function (s, numRows) {
    let res = [],
        row = -1,
        col = 0,
        k = 0,
        strArr = [];
    for (let i = 0; i < numRows; i++) {
        res[i] = []
    }
    for (let i = 0; i < s.length; i++) {
        if (row < numRows - 1 && k === 0) {
            res[++row][col] = s[i]
        } else if (row === numRows - 1 || k === 1) {
            res[--row][++col] = s[i]
            k = 1
            if (row === 1) {
                row = -1
                k = 0
                col++
            }
        }
    }
    for (let i = 0; i < res.length; i++) {
        strArr = strArr.concat(res[i])
    }
    console.log(strArr.join(""))
};