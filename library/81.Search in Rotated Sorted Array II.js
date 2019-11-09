const search = function (nums, target) {
    if (!nums.length) return false;

    let l = 0,
        r = nums.length - 1,
        mid;

    while (l <= r) {
        mid = l + ((r - l) >> 1);
        if (nums[mid] === target) return true

        if (nums[l] < nums[mid] || nums[mid] > nums[r]) {
            if (target < nums[mid] && target >= nums[l]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else if (nums[mid] < nums[r] || nums[l] < nums[mid]) {
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        } else {
            r--
        }
    }
    return false
};