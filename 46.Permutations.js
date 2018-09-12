let permute = function (nums) {
    let res = [];
    if (!nums.length) return res;
    let generatePermutation = function (nums, p) {
        if (nums.length === 0) {
            res.push(p.slice(0));
            return
        }
        for (let i = 0; i < nums.length; i++) {
            let num = nums.splice(i,1)[0];
            p.push(num);
            generatePermutation(nums,p);
            p.pop();
            nums.splice(i,0,num);

        }
    };
    generatePermutation(nums, []);
    return res
};