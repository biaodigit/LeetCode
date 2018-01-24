/**
 * 滑动窗口
 * @param s
 * @param nums
 * @returns {*}
 */
const minSubArrayLen = function (s, nums) {
    // 在数组中找出最短长度的子数组，使子数组中的和大于等于S
    let l = 0,
        r = -1,
        len = nums.length,
        size = nums.length + 1,
        sum = 0;
    while (l < len) {
        if (r <= len - 1 && sum < s) {
            sum += nums[++r]
        } else {
            sum -= nums[l++]
        }

        if (sum >= s) {
            size = Math.min(size, r - l + 1)
            console.log(size)
        }
    }
    if (size === nums.length + 1) {
        return 0
    }
    return size
};
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]))