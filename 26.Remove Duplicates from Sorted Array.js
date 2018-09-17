let removeDuplicates = function (nums) {
    if (!nums.length) return 0;

    let preVal = nums[0],
        index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== preVal) {
            nums[index++] = nums[i];
            preVal = nums[i];
        }
    }
    return index
};