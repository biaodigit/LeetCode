let minWindow = function (s, t) {
    let map = {};
    for (let i = 0; i < t.length; i++) {
        map[t[i]] = (map[t[i]] || 0) + 1
    }


    let l = 0,
        r = 0,
        minLen = Infinity,
        tlen = t.length,
        start = 0;

    while (r < s.length) {
        if (map[s[r++]]-- > 0) tlen--;

        while (tlen === 0) {
            if (r - l < minLen) {
                minLen = r - l;
                start = l;
            }

            if (map[s[l++]]++ === 0) tlen++
        }
    }

    return minLen === Infinity ? '' : s.substr(start, minLen)
};