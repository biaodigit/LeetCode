const findMedianSortedArrays = (nums1, nums2) => {
    let i = 0, j = 0,
        s = 0, f = 0,
        len = nums1.length + nums2.length,
        half = Math.floor(len / 2) + 1;
    for (let k = 0; k < half; k++) {
        s = f;
        if (i >= nums1.length) {
            f = nums2[j++]
        } else if (j >= nums2.length) {
            f = nums1[i++]
        } else if (nums1[i] < nums2[j]) {
            f = nums1[i++]
        } else {
            f = nums2[j++]
        }
    }

    if (len % 2 === 0) {
        return (s + f) / 2
    } else {
        return f
    }
};