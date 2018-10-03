let Node = function () {
    this.next = new Map();
    this.isWord = false;
};

let Trie = function () {
    this.root = new Node();
};

Trie.prototype.insert = function (word) {
    let cur = this.root,
        c;
    for (let i = 0; i < word.length; i++) {
        c = word.charAt(i);
        if (!cur.next.has(c)) {
            cur.next.set(c, new Node())
        }
        cur = cur.next.get(c);
    }
    if (!cur.isWord) {
        cur.isWord = true;
    }
};

Trie.prototype.search = function (word) {
    let cur = this.root,
        c;
    for (let i = 0; i < word.length; i++) {
        c = word.charAt(i);
        if (!cur.next.has(c)) {
            return false
        }
        cur = cur.next.get(c)
    }
    return cur.isWord
};

Trie.prototype.startsWith = function (prefix) {
    let cur = this.root,
        c;
    for (let i = 0; i < prefix.length; i++) {
        c = prefix.charAt(i);
        if (!cur.next.has(c)) {
            return false
        }
        cur = cur.next.get(c)
    }
    return true
};
