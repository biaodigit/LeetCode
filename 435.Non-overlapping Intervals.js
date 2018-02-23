const eraseOverlapIntervals = function (intervals) {
    if (!intervals.length) return 0
    /***
     * 贪心算法
     */
    let compare = function (a, b) {
        if (a.end !== b.end) {
            return a.end - b.end
        }
        return a.start - b.start
    }
    intervals.sort(compare)
    let res = 1,
        pre = 0;
    for(let i=1;i<intervals.length;i++){
        if(intervals[i].start >= intervals[pre].end){
            pre++
            res = i
        }
    }
    return intervals.length - res
    /***
     * 动态规划
     */
    // let compare = function (a, b) {
    //     if (a.start !== b.start) {
    //         return a.start - b.start
    //     }
    //     return a.end - b.end
    // }
    // intervals.sort(compare)
    // let memo = new Array(intervals.length).fill(1)
    // for (let i = 1; i < intervals.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         if (intervals[i].start >= intervals[j].end) {
    //             memo[i] = Math.max(memo[i], 1 + memo[j])
    //         }
    //     }
    // }
    // return intervals.length - Math.max.apply(null, memo)
};