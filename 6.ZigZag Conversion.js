let convert = (s, nRows) => {
    if (nRows <= 1) return s;
    let rows = Array(Math.min(nRows, s.length)).fill(''),
        goingDown = false,
        curRow = 0,
        res = '';
    for (let i = 0, len = s.length; i < len; i++) {
        rows[curRow] += s.charAt(i);
        if (curRow === 0 || curRow === nRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1
    }
    for (let str of rows) {
        res += str
    }

    return res
};