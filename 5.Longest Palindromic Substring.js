const longestPalindrome = (s) => {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        str += `#${s.charAt(i)}`;
    }
    str += '#';

    let slen = str.length,
        p = Array(slen),
        mostR = 0,
        cId = 0,
        palLen = 1,
        palStr = s.substring(0, 1);

    for (let i = 0; i < slen; i++) {
        p[i] = i < mostR ? Math.min(p[2 * cId - i], mostR - i) : 1;

        while (i - p[i] >= 0 && i + p[i] < slen && str.charAt(i - p[i]) === str.charAt(i + p[i])) {
            p[i]++
        }

        if (i + p[i] - 1 > mostR) {
            mostR = i + p[i] - 1;
            cId = i
        }

        if (p[i] - 1 > palLen) {
            palLen = p[i] - 1;
            palStr = str.substring(i - p[i] + 1, i + p[i]).replace(/#/g, '')
        }
    }

    return palStr
};
