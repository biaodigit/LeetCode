let merge = function (intervals) {
    let ret = [],
        len = intervals.length,
        i = 0;
    while (i < len) {
        let item = intervals[i];
        if (item) {
            let j = i + 1,
                lastMerged;
            while (j < len) {
                let next = intervals[j];
                if(next) {
                    if (item.start >= next.start && next.end >= item.start) {
                        let temp = item;
                        item = next;
                        next = temp
                    }
                    if (item.end >= next.start && item.start <= next.start) {
                        if (item.end < next.end) {
                            item.end = next.end
                        }
                        intervals[j] = null;
                        lastMerged = j;
                    }
                }
                j++
            }
            if(lastMerged){
                intervals[lastMerged] = item
            }else{
                ret.push(item)
            }
        }
        i++
    }

    return ret
};