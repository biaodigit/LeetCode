const generateParenthesis = (n) => {
    let res = [];
    generate('', n, n, res);
    return res;
};

const generate = (str, l, r, res) => {
    if(l > r) return;
    if (!l && !r) res.push(str);
    if (l) generate(str + '(', l - 1, r, res);
    if (r) generate(str + ')', l, r - 1, res);
};

