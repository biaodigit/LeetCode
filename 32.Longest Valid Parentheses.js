let longestValidParentheses = function (s) {
    let indices = [],
        maxLen = 0;
    indices.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            indices.push(i)
        } else {
            indices.pop();
            if (indices.length === 0) indices.push(i);
            maxLen = Math.max(maxLen, i - indices[indices.length - 1])
        }
    }
    return maxLen
};