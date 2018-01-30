const letterCombinations = function (digits) {
    let res = [];
    if (!digits) return []
    let findCombination = function (digits, index, s) {
        if (index === digits.length) {
            res.push(s)
            return
        }
        let c = digits[index],
            map = [" ", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
        if (c < 0 || c > 9 || c === 1) return
        let letters = map[c - '0'];
        for (let i = 0; i < letters.length; i++) {
            findCombination(digits, index + 1, s + letters[i])
        }
    }
    findCombination(digits, 0, "")
    return res
};
console.log(letterCombinations("23"))
