const letterCombinations = function (digits) {
    let res = [];
    if (!digits) return [];
    let findCombination = function (len, index, s) {
        if (index === len) {
            res.push(s);
            return
        }
        let c = digits[index],
            map = [" ", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
        if (c < 0 || c > 9 || c === 1) return;
        let letters = map[parseInt(c)];
        for (let i = 0; i < letters.length; i++) {
            findCombination(digits.length, index + 1, s + letters[i])
        }
    };
    findCombination(digits.length, 0, "");
    return res
};
