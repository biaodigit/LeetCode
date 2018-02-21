let findContentChildren = (g, s) => {
    g.sort((a, b) => {
        return b - a
    })
    s.sort((a, b) => {
        return b - a
    })
    let si = 0, gi = 0,
        res = 0;
    while (gi < g.length && si < s.length) {
        if (s[si] >= g[gi]) {
            res++, gi++, si++
        } else {
            gi++
        }
    }
    return res
};