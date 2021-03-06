/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    // 求合集 II
    let map = {},
        res = []
    for (let i = 0; i < nums1.length; i++) {
        if (!map[nums1[i]]) {
            map[nums1[i]] = 1
        } else {
            map[nums1[i]]++
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map[nums2[i]]) {
            res.push(nums2[i])
            map[nums2[i]]--
        }
    }
    return res
};
