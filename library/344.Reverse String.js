let reverseString = (s) => {
    let i = 0,
        j = s.length - 1,
        temp;
    while (i < j) {
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i++
        j--
    }
    return s
};