let permute = function(nums) {
    let res = []
    if(!nums.length) return res
    let used = {}
    let generatePermutation = function(nums,index,p){
        if(index === nums.length){
            res.push(p.slice(0))
            return
        }
        for(let i=0;i<nums.length;i++){
            if(!used[nums[i]]){
                p.push(nums[i])
                used[nums[i]] = true
                generatePermutation(nums,index+1,p)
                p.pop()
                used[nums[i]] = false
            }
        }
    }
    generatePermutation(nums,0,[])
    return res
};