//方法1：开辟辅助空间
var moveZeroes1 = function (nums) {
    var arr = nums.filter(function (item) {
        return item !== 0
    })
    for (var i = 0; i < arr.length; i++) {
        nums[i] = arr[i]
    }
    for (var j = arr.length; j < nums.length; j++) {
        nums[j] = 0
    }
    console.log(nums)
};
moveZeroes1([0, 1, 0, 3, 12])

var moveZeroes2 = function (nums) {
    var k = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k++] = nums[i]
        }
    }
    for (var j = k; j < nums.length; j++) {
        nums[j] = 0
    }
    console.log(nums)
};
moveZeroes2([0, 1, 0, 3, 12])

var moveZeroes3 = function (nums) {
    var k = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i]) {
            if (i !== k) {
                swap(nums, k++, i)
            } else {
                k++
            }
        }
    }
    console.log(nums)
};
var swap = function (arr, curr, next) {
    var temp = arr[curr]
    arr[curr] = arr[next]
    arr[next] = temp
}
moveZeroes3([0, 1, 0, 3, 12])
