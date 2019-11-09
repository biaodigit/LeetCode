let NumArray = function (nums) {
    // [-2, 0, 3, -5, 2, -1]
    this.nums = nums.reduce((ret, num, index) => {
        if (index === 0) {
            ret[index] = num
        } else {
            ret[index] = num + ret[index - 1]
        }
        return ret
    }, [])

};

NumArray.prototype.sumRange = function (i, j) {
    return i === 0 ? this.nums[j] : this.nums[j] - this.nums[i - 1]
};