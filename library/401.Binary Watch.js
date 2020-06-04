let readBinaryWatch = function (num) {
    let hours = [['0']],
        mins = [['00']],
        hoursArr = [1, 2, 4, 8],
        minsArr = [1, 2, 4, 8, 16, 32],
        res = []
    for (let i = 1; i < 4; i++) {
        hours[i] = recur(hoursArr, [], 0, 0, i, 12)
    }
    for (let i = 1; i < 6; i++) {
        mins[i] = recur(minsArr, [], 0, 0, i, 60, 'min')
    }

    for (let i = 0; i <= 3 && i <= num; i++) {
        if (num - i <= 5) {
            for (let hour of hours[i]) {
                for (let min of mins[num - i]) {
                    res.push(`${hour}:${min}`)
                }
            }
        }
    }

    return res
};

let recur = function (arr, temp, sum, index, count, max, type) {
    if (!count) {
        if (type === 'min' && sum.toString().length === 1) sum = `0${sum}`
        temp.push(sum.toString())
        return
    }
    for (let i = index; i < arr.length; i++) {
        if (sum + arr[i] < max) {
            recur(arr, temp, sum + arr[i], i + 1, count - 1, max, type)
        }
    }
    return temp.sort((a, b) => parseInt(a) - parseInt(b))
}