const lengthOfLongestSubstring = function (s) {
    // 求最长不出现重复字母的字符串
    let freq = {},
        l = 0,
        r = -1,
        len = s.length,
        size = 0;
    while (l < len) {
        if (r + 1 < len && !freq[s[r + 1]]) {
            freq[s[++r]] = 1
        } else {
            freq[s[l++]]--
        }
        size = Math.max(size, r - l + 1)
    }
    return size
};

//    function lengthOfLongestSubstring(s) {
//        const map = {};
//        var left = 1;
//
//        return s.split('').reduce((max, v, i) => {
//            left = map[v] >= left ? map[v] + 1 : left;
//            map[v] = i;
//            return Math.max(max, i - left + 1);
//        }, 0);
//    }

console.log(lengthOfLongestSubstring("abcabdcbb"))