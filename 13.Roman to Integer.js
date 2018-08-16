let romanToInt = function (s) {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let len = s.length,
        sum = 0;
    for (let i = 0; i < len; i++) {
        if (i + 1 < len && map[s[i]] < map[s[i + 1]]) {
            sum += map[s[i + 1]] - map[s[i]];
            i++;
        } else {
            sum += map[s[i]];
        }
    }
    return sum
};