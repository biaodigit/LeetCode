const rob = (nums) => {
    let n = nums.length
    if (!n) return 0
    let memo = []
    for (let i = 0; i < n + 1; i++) {
        memo[i] = -1
    }
    for (let i = 0; i < n; i++) {
        for (let j = i; j >= 0; j--) {
            memo[i] = Math.max(memo[i], nums[j] + (j - 2 >= 0 ? memo[j - 2] : 0))
        }
    }
    return memo[n-1]
}
// var rob = function (nums) {
//     let memo = [];
//     for (let i = 0; i <= nums.length; i++) {
//         memo[i] = -1
//     }
//     var tryRob = function (nums, index) {
//         if (index >= nums.length) return 0
//         if(memo[index] !== -1) return memo[index]
//         let res = 0;
//         for (let i = index; i < nums.length; i++) {
//             res = Math.max(res, nums[i] + tryRob(nums, i + 2))
//         }
//         memo[index] = res
//         return res
//     }
//     return tryRob(nums, 0)
// };

// const rob = (nums) => {
//     let n = nums.length
//     if (!n) return 0
//     let memo = [];
//     for (let i = 0; i <= nums.length; i++) {
//         memo[i] = -1
//     }
//     memo[n - 1] = nums[n - 1]
//     for (let i = n - 2; i >= 0; i--) {
//         for (let j = i; j < n; j++) {
//             memo[i] = Math.max(memo[i], nums[j] + (j + 2 < n ? memo[j + 2] : 0))
//         }
//     }
//     return memo[0]
// }