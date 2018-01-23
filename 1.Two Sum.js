const twoSum = function (nums, target) {
    // 从无序数组中找到两个值，使两个值之和等于target
    /**
     * 查找表
     * @type {Map}
     */
    let m = new Map(),
        len = nums.length;
    for (let i = 0; i < len; i++) {
        if (m.has(nums[i])) {
            return [m.get(nums[i]), i]
        }
        m.set((target - nums[i]), i)
    }
};