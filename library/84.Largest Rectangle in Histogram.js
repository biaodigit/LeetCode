let largestRectangleArea = function (heights) {
    let ret = 0,
        stack = [];
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            let h = heights[stack[stack.length - 1]];
            stack.pop();

            let size = stack.length > 0 ? stack[stack.length - 1] : -1;

            ret = Math.max(ret, h * (i - size - 1))
        }
        stack.push(i)
    }
    return ret
};