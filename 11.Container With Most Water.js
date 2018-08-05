let maxArea = function (height) {
    let h1 = 0,
        h2 = 0,
        w = 0,
        v = 0,
        maxv = 0,
        l = 0,
        r = height.length - 1;
    while (r - l > 0) {
        h1 = height[l];
        h2 = height[r];
        if (h1 > h2) {
            v = h2 * (r - l)
            r--
        } else {
            v = h1 * (r - l)
            l++
        }
        maxv = Math.max(maxv, v)
    }
    return maxv
};