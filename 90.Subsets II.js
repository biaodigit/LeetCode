let subsetsWithDup = (nums) => {
    let result = [[]],
        size = 0,
        start = 0,
        temp;

    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        start = i > 0 && nums[i] === nums[i - 1] ? size : 0;
        size = result.length;
        for (let j = start; j < size; j++) {
            temp = result[j].slice(0);
            temp.push(nums[i]);
            result.push(temp)
        }
    }

    console.log(result)

    return result
};


subsetsWithDup([1, 2, 3]);