const lengthOfLongestSubstring = (s) => {
    if (!s) return 0;
    let map = new Map(),
        l = 0,
        r = 0,
        len = s.length,
        size = 0;
    while (r < len) {
        if (map.has(s[r])) {
            console.log(l, map.get(s[r]))
            l = Math.max(l, map.get(s[r]) + 1);
        }
        map.set(s[r], r);
        r++;
        size = Math.max(size, r - l);

    }
    return size
};

lengthOfLongestSubstring("acbdbaefh")
