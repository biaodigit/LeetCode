let isNumber = function (s) {
    return s.trim().length !== 0 && !isNaN(Number(s));
};