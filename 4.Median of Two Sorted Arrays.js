var findMedianSortedArrays = function (nums1, nums2) {
    // merge and find median
    let num = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] < nums2[index2]) {
            num.push(nums1[index1++]);
        } else {
            num.push(nums2[index2++]);
        }
    }
    if (index1 < nums1.length) {
        num = num.concat(nums1.slice(index1));
    }
    if (index2 < nums2.length) {
        num = num.concat(nums2.slice(index2));
    }
    let length = num.length;
    if (length % 2 === 1) {
        return num[parseInt((length - 1) / 2)];
    } else {
        return (num[parseInt((length - 1) / 2)] + num[parseInt((length) / 2)]) / 2;
    }
}