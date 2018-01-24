/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    // 求合集 I
    let record = new Set(nums1),
        res = [];
    for (let i = 0; i < nums2.length; i++) {
        if (record.has(nums2[i]) && res.indexOf(nums2[i]) === -1) {
            res.push(nums2[i])
        }
    }
    return res
};