let triangleNumber = function (nums) {
    if (!nums || nums.length < 3) return 0;
    nums.sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let left = 0, right = i - 1;
        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                count += (right - left)
                right--
            }
            else left++;
        }
    }

    return count;
};