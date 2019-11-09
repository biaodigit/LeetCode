let subsets = nums => {
    if (!nums.length) return [];

    let ret = [];

    dfs(nums, 0, [], ret);

    return ret
};

let dfs = (nums, index, tempSet, result) => {
    if (index === nums.length) {
        result.push(tempSet.slice(0));
        return
    }

    dfs(nums, index + 1, tempSet, result);

    tempSet.push(nums[index]);

    dfs(nums, index + 1, tempSet, result);

    tempSet.pop()
};