let longestCommonPrefix = function (strs) {
    if (strs === null || strs.length === 0) return ""
    let pre = strs[0],
        k = 1;
    while (k < strs.length) {
        while (strs[k].indexOf(pre) !== 0) {
            pre = pre.substring(0, pre.length - 1)
        }
        k++
    }
    return pre
};