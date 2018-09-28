let searchRange = function (nums, target) {
    if (!nums.length) return [-1, -1];

    const start = binarySearch(nums, target, 0);
    const end = binarySearch(nums, target, 1);

    return [start, end];
};

let binarySearch = function (nums, target, isFirst) {
    let left = 0,
        right = nums.length - 1,
        res = -1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] === target) {
            res = mid;
            if (isFirst) {
                left = mid + 1
            } else {
                right = mid - 1;
            }
        } else {
            if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return res
};

