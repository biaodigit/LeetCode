let threeSumClosest = (nums, target) => {
    if (nums.length < 3) return [];

    nums = nums.sort((a, b) => {
        return a - b;
    });
    let sum = 0,
        distance = Infinity,
        result;
    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i];
        if (i > 0 && nums[i - 1] === a) continue;
        let j = i + 1,
            k = nums.length - 1;
        while (j < k) {
            let b = nums[j],
                c = nums[k];
            sum = a + b + c;
            if (Math.abs(target - sum) < distance) {
                distance = Math.abs(target - sum)
                result = sum
            }
            if(sum < target){
                j++
            }else{
                k--
            }
        }
    }
    return result
};