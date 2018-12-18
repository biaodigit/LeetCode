let removeDuplicates = function (nums) {
    let len = nums.length;
    if (nums.length < 3) return len;

    let count = 1,
        i = 0;
    for (let j = 1; j < len; j++) {
        if (nums[j] === nums[j - 1]) {
            count++;
            if (count <= 2) {
                nums[++i] = nums[j]
            }
        } else {
            count = 1;
            nums[++i] = nums[j]
        }
    }
    return i + 1
};