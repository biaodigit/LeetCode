/**
 * Initialize your data structure here.
 */
let trieNode = function () {
    this.next = new Map();
    this.isWord = false;
};

let WordDictionary = function () {
    this.root = new trieNode();
};

WordDictionary.prototype.addWord = function (word) {
    let cur = this.root,
        c;
    for (let i = 0; i < word.length; i++) {
        c = word.charAt(i);
        if (!cur.next.has(c)) {
            cur.next.set(c, new trieNode())
        }
        cur = cur.next.get(c)
    }
    if (!cur.isWord) {
        cur.isWord = true
    }
};

WordDictionary.prototype.search = function (word) {
    let cur = this.root;
    return this.match(cur, word, 0)
};

WordDictionary.prototype.match = function (node, word, index) {
    if (index === word.length)
        return node.isWord;

    let c = word.charAt(index);
    if (c !== '.') {
        if (!node.next.has(c)) return false;
        return this.match(node.next.get(c), word, index + 1)
    } else {
        for (let key of node.next.keys()) {
            if (this.match(node.next.get(key), word, index + 1)) return true
        }
        return false
    }
};
