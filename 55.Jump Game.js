let canJump = function (nums) {
    let curr = 0,
        maxReach = 0,
        index = 0,
        newId;

    if (nums.length === 1 && nums[0] === 0) {
        return true
    }

    while (index < nums.length) {
        if (index + nums[index] > maxReach) {
            newId = index;
            maxReach = index + nums[index]
        }
        if (index === curr + nums[curr]) {
            curr = newId;
        }
        if (curr + nums[curr] >= nums.length - 1) {
            return true
        }
        index++
    }
    return false
};