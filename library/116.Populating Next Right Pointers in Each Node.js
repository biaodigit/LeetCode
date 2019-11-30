const connect = function (root) {
    let prev = root;
    while (prev) {
        let cur = prev;
        while (cur) {
            if (cur.left) cur.left.next = cur.right;
            if (cur.right && cur.next) cur.right.next = cur.next.left;

            cur = cur.next
        }

        prev = prev.left
    }
    return root
};
