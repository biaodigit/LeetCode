let permuteUnique = function (nums) {
    let res = [];
    if (!nums.length) return res;
    nums = nums.sort((a, b) => {
        return a - b
    });
    let generatePermutation = function (nums, p) {
        if (!nums.length) {
            res.push(p.slice(0));
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i >= 1 && nums[i] === nums[i - 1]) continue;

            let num = nums.splice(i, 1)[0];
            p.push(num);
            generatePermutation(nums, p);
            p.pop();
            nums.splice(i, 0, num)
        }
    };
    generatePermutation(nums, []);
    return res
};