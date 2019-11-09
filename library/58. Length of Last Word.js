let lengthOfLastWord = function (s) {
    let words = s.trim().split(" ");

    return words[words.length - 1].length
};