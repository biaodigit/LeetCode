let isPalindrome = function(x) {
    let y = parseInt(x.toString().split('').reverse().join(''));
    return x === y
};