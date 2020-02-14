let isPalindrome = function (s) {
    let i = 0,
        j = s.length - 1,
        regExp = /[^A-Za-z\d]/;
    while (i < j) {
        if (regExp.test(s.charAt(i))) {
            i++;
            continue;
        } else if (regExp.test(s.charAt(j))) {
            j--;
            continue;
        }
        if (s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase()) return false
        i++;
        j--
    }
    return true
};