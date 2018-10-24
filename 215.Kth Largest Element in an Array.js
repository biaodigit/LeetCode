let findKthLargest = function (nums, k) {
    let index = bfprt(nums, 0, nums.length - 1, k);
    return nums[index]
};

let bfprt = function (arr, l, r, k) {
    let central_index = getCentralIndex(arr, l, r),
        boundary_index = partition(arr, l, r, central_index),
        num = boundary_index - l + 1;
    if (num === k) {
        return boundary_index
    } else if (num > k) {
        return bfprt(arr, l, boundary_index - 1, k)
    } else {
        return bfprt(arr, boundary_index + 1, r, k - num)
    }
};

let insertSort = function (arr, l, r) {
    let el,
        j;
    for (let i = l + 1; i <= r; i++) {
        el = arr[i];
        for (j = i; j > l && arr[j - 1] < arr[j]; j--) {
            arr[j] = arr[j - 1]
        }
        arr[j] = el
    }

    return l + ((r - l) >> 1)
};

let getCentralIndex = function (arr, l, r) {
    if (r - l < 4) {
        return insertSort(arr, l, r)
    }

    let sub_right = l - 1,
        index;
    for (let i = l; i + 4 <= r; i += 5) {
        index = insertSort(arr, l, l + 4)
        sub_right++;
        [arr[sub_right], arr[index]] = [arr[index], arr[sub_right]]
    }
    return bfprt(arr, l, sub_right, (sub_right - l >> 1) + 1)
};

let partition = function (arr, l, r, central_index) {
    [arr[l], arr[central_index]] = [arr[central_index], arr[l]];
    let j = l,
        el = arr[l];
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] > el) {
            j++;
            [arr[j], arr[i]] = [arr[i], arr[j]]
        }
    }
    [arr[l], arr[j]] = [arr[j], arr[l]];
    return j
};