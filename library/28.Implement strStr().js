let cal_next = function (str, len, next) {
    let j = -1;
    next[0] = -1;
    for (let i = 1; i < len; i++) {
        while (j > -1 && str[j + 1] !== str[i]) {
            j = next[j]
        }
        if (str[j + 1] === str[i]) {
            j++
        }
        next[i] = j
    }
};

let strStr = function (haystack, needle) {
    if (!needle.length) {
        return 0
    }
    let hlen = haystack.length,
        nlen = needle.length,
        j = -1,
        next = new Array(nlen);
    cal_next(needle, nlen, next);
    for (let i = 0; i < hlen; i++) {
        while (j > -1 && haystack[i] !== needle[j + 1]) {
            j = next[j];
        }
        if (haystack[i] === needle[j + 1]) {
            j++
        }
        if (j === nlen - 1) {
            return i - j
        }
    }
    return -1
};