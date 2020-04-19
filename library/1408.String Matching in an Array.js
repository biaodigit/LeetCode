let stringMatching = function (words) {
    let res = [],
        len = words.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i !== j && words[j].includes(words[i])) {
                res.push(words[i])
                break;
            }
        }
    }
    return res
};