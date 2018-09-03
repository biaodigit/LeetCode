let convert = function (s, nRows) {
    if (nRows <= 1) return s
    let str = "",
        distance = nRows * 2 - 2;
    for (let i = 0; i < nRows; i++) {
        for (let j = i; j < s.length; j += distance) {
            str += s[j]
            let temp = j + distance - i * 2
            if(i !== 0 && i !== nRows - 1 && temp < s.length){
                str += s[temp]
            }
        }
    }
};