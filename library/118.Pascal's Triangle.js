const generate = (numRows) => {
    if (!numRows) return [];
    const result = [[1]];
    for (let i = 1; i < numRows; i++) {
        const arr = [1];
        const lastArr = result[i - 1];
        for (let j = 1; j <= i; j++) {
            arr[j] = lastArr[j] ? lastArr[j] + lastArr[j - 1] : lastArr[j - 1]
        }
        result.push(arr)
    }
    return result
};
