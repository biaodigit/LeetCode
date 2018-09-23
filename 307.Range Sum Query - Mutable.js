let NumArray = function (nums) {
    let len = nums.length;
    this.data = nums;
    this.tree = new Array(4 * len);
    this.buildSegmentTree(0, 0, len - 1);
};

NumArray.prototype.buildSegmentTree = function (treeIndex, l, r) {
    if (l === r) {
        return this.tree[treeIndex] = this.data[l];
    }

    if (r < 0) {
        return
    }

    let leftChildId = this.leftChild(treeIndex),
        rightChildId = this.rightChild(treeIndex),
        mid = l + ((r - l) >> 1);

    this.buildSegmentTree(leftChildId, l, mid);
    this.buildSegmentTree(rightChildId, mid + 1, r);

    this.tree[treeIndex] = this.merge(this.tree[leftChildId], this.tree[rightChildId]);

};

NumArray.prototype.query = function (treeIndex, l, r, queryL, queryR) {
    if (l === queryL && r === queryR) {
        return this.tree[treeIndex]
    }
    let leftChildId = this.leftChild(treeIndex),
        rightChildId = this.rightChild(treeIndex),
        mid = l + ((r - l) >> 1);

    if (queryL >= mid + 1) {
        return this.query(rightChildId, mid + 1, r, queryL, queryR)
    } else if (queryR <= mid) {
        return this.query(leftChildId, l, mid, queryL, queryR)
    }

    let leftRes = this.query(leftChildId, l, mid, queryL, mid),
        rightRes = this.query(rightChildId, mid + 1, r, mid + 1, queryR);

    return leftRes + rightRes
};

NumArray.prototype.sumRange = function (i, j) {
    if ((i < 0 || j >= this.data.length) || (i >= this.data.length || j < 0) || i > j) {
        throw new Error("index is illegal")
    }

    return this.query(0, 0, this.data.length - 1, i, j)
};

NumArray.prototype.update = function (i, val) {
    if (i < 0 || i >= this.data.length) return
    this.data[i] = val;
    this.set(0, 0, this.data.length - 1, i, val)
};

NumArray.prototype.set = function (treeIndex, l, r, index, e) {
    if (l === r) {
        this.tree[treeIndex] = e;
        return
    }
    let leftChildId = this.leftChild(treeIndex),
        rightChildId = this.rightChild(treeIndex),
        mid = l + ((r - l) >> 1);
    if (index >= mid + 1) {
        this.set(rightChildId, mid + 1, r, index, e)
    } else if (index <= mid) {
        this.set(leftChildId, l, mid, index, e)
    }

    this.tree[treeIndex] = this.merge(this.tree[leftChildId], this.tree[rightChildId]);
};

NumArray.prototype.leftChild = function (num) {
    return num * 2 + 1
};

NumArray.prototype.rightChild = function (num) {
    return num * 2 + 2
};

NumArray.prototype.merge = function (a, b) {
    return a + b
};