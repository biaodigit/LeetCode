const containsNearbyDuplicate = function (nums, k) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true
        }
        map.set(nums[i], i)
        if (map.size === k + 1) {
            map.delete(nums[i - k])
        }
    }
}