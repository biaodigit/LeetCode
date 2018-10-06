const trap = function (height) {
    let stack = [],
        volume = 0,
        lowerHeight, leftUpperIndex;
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[stack[stack.length - 1]] <= height[i]) {
            lowerHeight = height[stack.pop()];
            if (!stack.length) break;
            leftUpperIndex = stack[stack.length - 1];

            if (height[leftUpperIndex] === 0) continue;

            if (height[leftUpperIndex] > height[i]) {
                volume += (height[i] - lowerHeight) * (i - leftUpperIndex - 1)
            } else {
                volume += (height[leftUpperIndex] - lowerHeight) * (i - leftUpperIndex - 1)
            }
        }
        stack.push(i);
    }
    return volume
};