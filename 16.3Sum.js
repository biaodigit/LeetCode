let threeSum = (nums) => {
    if (nums.length < 3) return []
    let sum,
        result = [];
    nums = nums.sort((a, b) => {
        return a - b
    });
    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i]
        if (a > 0) return result;
        if (i > 0 && a === nums[i - 1]) continue;
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let b = nums[j],
                c = nums[k],
                val = a + b + c;
            if (val === 0) {
                result.push([a, b, c]);
                j++;
                k--;
                while (nums[j] === b) {
                    j++
                }
                while (nums[k] === c) {
                    k--
                }
            } else if (val > 0) {
                k--
            } else {
                j++
            }
        }
    }
    return result
};