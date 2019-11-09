const fourSum = (nums, target) => {
    let result = [],
        sum;
    nums = nums.sort((a, b) => {
        return a - b
    });
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let _target = target - nums[i];
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1,
                r = nums.length - 1;
            while (l < r) {
                sum = nums[j] + nums[l] + nums[r];
                if (sum === _target) {
                    result.push([nums[i], nums[j], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (nums[l] === nums[l - 1]) l++;
                    while (nums[r] === nums[r + 1]) r--;
                } else if (sum < _target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
    }
    return result;
};