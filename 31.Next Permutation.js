let nextPermutation = function (nums) {
    // [1,2,3,6,5,4]
    let idx = nums.length - 1;
    while (nums[idx] <= nums[idx - 1]) idx--;

    let left = idx - 1,
        right = nums.length - 1;

    while (nums[left] >= nums[right]) right--;

    if (left >= 0 && right >= 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
    }

    left = idx;
    right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};