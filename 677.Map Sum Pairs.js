/**
 * Initialize your data structure here.
 */
let TrieNode = function (val = 0) {
    this.next = new Map();
    this.val = val;
};

let MapSum = function () {
    this.root = new TrieNode(0);
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    let cur = this.root,
        c;
    for (let i = 0; i < key.length; i++) {
        c = key.charAt(i);
        if (!cur.next.has(c)) {
            cur.next.set(c, new TrieNode())
        }
        cur = cur.next.get(c);
    }
    cur.val = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let cur = this.root,
        c;
    for (let i = 0; i < prefix.length; i++) {
        c = prefix.charAt(i);
        if (!cur.next.get(c)) return 0;
        cur = cur.next.get(c)
    }
    return this._sum(cur)
};

MapSum.prototype._sum = function (node) {
    let sum = node.val;
    for (let key of node.next.keys()) {
        sum += this._sum(node.next.get(key))
    }
    return sum
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */