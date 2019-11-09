let findSubstring = function (s, words) {
    let res = [];
    if (!words.length) return res;

    let len = words[0].length,
        wLen = words.length,
        allLen = len * words.length;
    for (let i = 0; i < s.length - ((wLen - 1) * len); i ++) {
        let str = s.substring(i, i + len);
        if (words.indexOf(str) !== -1 && helper(s, words, i, len, allLen)) {
            res.push(i)
        }
    }
    return res;
};

let helper = (s, words, i, len, allLen) => {
    let map = new Map(),
        item = s.substring(i, i + allLen);
    for (word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    for (let j = 0; j < allLen; j += len) {
        let str = item.substring(j, j + len);
        if (map.get(str) >= 1) {
            map.set(str, map.get(str) - 1)
        } else {
            return false
        }
    }
    return true
};
