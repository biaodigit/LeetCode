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

let isBuf = (Sn) => {
};

let firstBug = (arr) => {
    let l = 0,
        r = arr.length - 1,
        mid, bug;
    while (l < r) {
        mid = l + ((r - l) >> 1);
        if (!isBuf(mid)) {
            bug = mid;
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
}