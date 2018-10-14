const sortArrayByParityII = function (A) {
    let even = [],
        odd = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            even.push(A[i])
        } else {
            odd.push(A[i])
        }
    }

    let i = 0, j = 0;
    for (let k = 0; k < A.length; k++) {
        if (k % 2 === 0) {
            A[k] = even[i++]
        } else {
            A[k] = odd[j++]
        }
    }
    return A
};