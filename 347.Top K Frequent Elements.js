const topKFrequent = function(nums, k) {
    let map = {},
        arr = [],
        count = 0
    for (let i = 0; i < nums.length; i++){
        if(map[nums[i]] === undefined){
            map[nums[i]] = count
            arr.push([nums[i],0])
            count++
        }else{
            arr[map[nums[i]]][1]++;
        }
    }

    arr.sort(function(a, b){
        return b[1] - a[1];
    });

    let res = [];
    for (let i = 0; i < k; i++){
        res.push(arr[i][0]);
    }

    return res;
};