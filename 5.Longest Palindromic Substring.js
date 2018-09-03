const longestPalindrome = (s) => {
    if (s.length === 1) return s
    let start = 0, maxLen = 0;
    const extendPalindrome = (s, l, r) => {
        while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
            l--;
            r++;
        }
        if (maxLen < r - l - 1) {
            start = l + 1;
            maxLen = r - l - 1;
        }
    }
    for (let i = 0; i < s.length - 1; i++) {
        extendPalindrome(s, i, i)
        extendPalindrome(s, i, i + 1)
    }
    return s.substring(start, start + maxLen)
};