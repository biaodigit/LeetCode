/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
let insert = function (intervals, newInterval) {
    let len = intervals.length
    if (len < 1) {
        return [newInterval]
    }

    let start = len,
        end = -1;
    for (let i = 0; i < len; i++) {
        if (start === len && intervals[i].end >= newInterval.start) {
            start = i
        }
        if (end === -1 && intervals && intervals[len - i - 1].start <= newInterval.end) {
            end = len - i - 1
        }
    }

    let newStart = start < len ? Math.min(intervals[start].start, newInterval.start) : newInterval.start;
    let newEnd = end > -1 ? Math.max(intervals[end].end, newInterval.end) : newInterval.end;
    let newMerge = new Interval(newStart, newEnd);

    intervals.splice(start, end - start + 1, newMerge);

    return intervals
};