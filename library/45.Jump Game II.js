let jump = function (nums) {
    let curr = 0,
        jumps = 0,
        maxReach = 0,
        index = 0,
        newId;
    if (nums.length <= 1) {
        return 0
    }
    while (index < nums.length) {
        if (index + nums[index] > maxReach) {
            newId = index;
            maxReach = index + nums[index]
        }
        if (index === curr + nums[curr]) {
            jumps++;
            curr = newId
        }
        if (curr + nums[curr] >= nums.length - 1) {
            jumps++;
            break
        }
        index++
    }
    return jumps
};