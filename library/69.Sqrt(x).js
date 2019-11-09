let mySqrt = function (x) {
    if (x < 2) return x;

    let l = 1, r = x, mid;

    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if (mid === x / mid) return mid;

        if (mid < x / mid) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return mid * mid <= x ? mid : mid - 1
};