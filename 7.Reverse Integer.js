const reverse = (x) => {
    let min = Math.pow(-2, 31),
        max = Math.pow(2, 31) - 1,
        isnegative = false,
        res = '',
        arr;
    if (x < 0) {
        isnegative = true
        arr = x.toString().split('-')[1].split('')
    } else {
        arr = x.toString().split('');
    }
    if (arr[arr.length - 1] === 0) arr.pop()
    if (isnegative) {
        arr.reverse().unshift('-')
        res = Number(arr.join(''))
    } else {
        res = Number(arr.reverse().join(''))
    }
    if (res < min || res > max) {
        return 0
    } else {
        return res
    }
};