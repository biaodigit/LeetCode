const fourSumCount = (A, B, C, D) => {
    let map = new Map(),
        len = A.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let num = C[i] + D[j]
            map.set(num, (map.get(num) || 0) + 1)
        }
    }
    let sum = 0
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let num = 0 - (A[i] + B[j])
            if (map.has(num)) {
                sum += map.get(num)
            }
        }
    }
    return sum
};
console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]))
