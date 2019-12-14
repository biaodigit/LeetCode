let connect = function (root) {
    let head = null,
        prev = null,
        cur = root;

    while (cur) {
        while (cur) {
            if (cur.left) {
                if (prev) {
                    prev.next = cur.left
                } else {
                    head = cur.left
                }
                prev = cur.left
            }
            if (cur.right) {
                if (prev) {
                    prev.next = cur.right
                } else {
                    head = cur.right
                }
                prev = cur.right
            }
            cur = cur.next
        }
        cur = head;
        head = null;
        prev = null
    }

    return root
};
