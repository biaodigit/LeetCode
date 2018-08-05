let isMatch = function (s, p) {
    let reg = new RegExp(`^${p}$`);
    return reg.test(s)
};