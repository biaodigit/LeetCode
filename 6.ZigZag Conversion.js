let convert = function (s, nRows) {
    if (nRows <= 1) return s
    let res = ""
    let distance = 2 * nRows - 2;
    for (let i = 0; i < nRows; i++) {
        for (let j = i; j < s.length; j += distance) {
            res += s[j]
            let temp = j + distance - 2 * i
            if (i !== 0 && i !== nRows - 1 && temp < s.length) {
                res += s[temp]
            }
        }
    }
    return res
};