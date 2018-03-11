const ListNode = function (key, val) {
    this.prev = null;
    this.next = null;
    this.val = val;
    this.key = key;
};

const LRUCache = function (capacity) {
    this.head = new ListNode(-1, -1);
    this.tail = new ListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
    this.capacity = capacity;
    this.map = new Map();
};

LRUCache.prototype.get = function (key) {
    let node = this.map.get(key);
    if (node) {
        this.moveToHead(node);
        return node.val;
    } else {
        return -1;
    }
};

LRUCache.prototype.put = function (key, value) {
    let node = this.map.get(key);
    if (!node) {
        node = new ListNode(key, value);
        this.attachToHead(node);
        this.size++;
    } else {
        node.val = value;
        this.moveToHead(node);
    }
    if (this.size > this.capacity) {
        this.removeLast();
        this.size--;
    }
    this.map.set(key, node);
};

LRUCache.prototype.attachToHead = function (node) {
    node.next = this.head.next;
    node.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
};

LRUCache.prototype.moveToHead = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.attachToHead(node);
};

LRUCache.prototype.removeLast = function () {
    let last = this.tail.prev;
    last.prev.next = this.tail;
    this.tail.prev = last.prev;
    this.map.delete(last.key);
};