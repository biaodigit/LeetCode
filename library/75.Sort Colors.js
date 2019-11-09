const sortColors = function (nums) {
    /**
     * 计数排序
     * @param nums
     */
//        let count = {}
//        nums = nums.filter((item) => {
//            return item === 0 || item === 1 || item === 2
//        })
//        console.log(nums)
//        for (let i = 0; i < nums.length; i++) {
//            if (!count[nums[i]]) {
//                count[nums[i]] = 1
//            } else {
//                ++count[nums[i]]
//            }
//        }
//        let index = 0
//        for (let key in count) {
//            for (let i = 0; i < count[key]; i++) {
//                nums[index++] = parseInt(key)
//            }
//        }
//        console.log(nums)
    /**
     * 三路快排方式
     */
    let zero = -1,
        two = nums.length,
        v = 1,
        i = 0;
    while (i < two) {
        if (nums[i] < v) {
            swap(nums, ++zero, i++)
        } else if (nums[i] === v) {
            i++
        } else {
            swap(nums, --two, i)
        }
    }
};
const swap = function (arr, cur, next) {
    let p = arr[cur];
    arr[cur] = arr[next]
    arr[next] = p
}
sortColors([0, 2, 1, 1, 2, 0, 0, 1, 2, 0])