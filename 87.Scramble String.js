let isScramble = function (s1, s2) {
    if (s1 === s2) return true;

    const char = 'a'.charCodeAt(0);
    let len = s1.length,
        map = Array(26).fill(0);

    for (let i = 0; i < len; i++) {
        map[s1[i].charCodeAt(0) - char]++;
        map[s2[i].charCodeAt(0) - char]--;
    }

    for (let i = 0; i < 26; i++) {
        if (map[i] !== 0) return false
    }

    for (let i = 1; i < len; i++) {
        if (isScramble(s1.substr(0, i), s2.substr(0, i)) && isScramble(s1.substr(i), s2.substr(i))) {
            return true
        }

        if (isScramble(s1.substr(0, i), s2.substr(len - i)) && isScramble(s1.substr(i), s2.substr(0, len - i))) {
            return true
        }
    }
    return false
};
