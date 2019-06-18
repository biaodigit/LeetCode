const findMedianSortedArrays = (A, B) => {
    let m = A.length,
        n = B.length;

    if (m > n) {
        [A, B] = [B, A]
        let temp = m;
        m = n;
        n = temp;
    }

    let iMin = 0, iMax = m, half = (m + n + 1) >> 1, i, j;

    while (iMin < iMax) {
        i = (iMin + iMax) >> 1;
        j = half - i;
        if (i < iMax && B[j - 1] > A[i]) {
            iMin = i + 1
        } else if (i > iMin && B[j] < A[i - 1]) {
            iMax = i - 1
        } else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = B[j - 1]
            } else if (j === 0) {
                maxLeft = A[i - 1]
            } else {
                maxLeft = Math.max(A[i - 1], B[j - 1])
            }

            if ((m + n) % 2 === 1) return maxLeft;

            let minRight = 0;
            if (i === m) {
                minRight = B[j]
            } else if (j === n) {
                minRight = A[i]
            } else {
                minRight = Math.min(A[i], B[j])
            }

            return (maxLeft + minRight) / 2
        }
    }
};