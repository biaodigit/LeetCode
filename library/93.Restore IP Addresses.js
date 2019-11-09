let isValid = (s) => {
    if (s.length > 3 || s.length === 0 || (s.charAt(0) === '0' && s.length > 1) || parseInt(s) > 255) return false;
    return true
};

let combineStr = (s1, s2, s3, s4) => {
    return `${s1}.${s2}.${s3}.${s4}`
};

let restoreIpAddresses = (s) => {
    let res = [],
        len = s.length;

    let s1, s2, s3, s4;
    for (let i = 1; i < 4 && i < len - 2; i++) {
        for (let j = i + 1; j < i + 4 && j < len - 1; j++) {
            for (let k = j + 1; k < j + 4 && k < len; k++) {
                s1 = s.substring(0, i);
                s2 = s.substring(i, j);
                s3 = s.substring(j, k);
                s4 = s.substring(k, len);
                if (isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)) {
                    res.push(combineStr(s1, s2, s3, s4))
                }
            }
        }
    }

    return res
};