const reverse = (x) => {
    let res = 0,
        min = Math.pow(-2, 31),
        max = Math.pow(2, 31) - 1;
    while (x) {
        res = res * 10 + x % 10;
        x = parseInt(x / 10);
        if(res < min || res > max) return 0
    }

    return res
};
