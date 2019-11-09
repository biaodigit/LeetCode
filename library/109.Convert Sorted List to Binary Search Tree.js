const sortedListToBST = (head) => {
    if (!head) return null;
    let list = [];
    while (head) {
        list.push(head.val);
        head = head.next
    }

    const buildBST = (list) => {
        if (!list.length) return null;
        let mid = list.length >> 1;
        let root = new TreeNode(list[mid]),
            left = buildBST(list.slice(0, mid)),
            right = buildBST(list.slice(mid + 1));
        root.left = left;
        root.right = right;
        return root
    };

    return buildBST(list)
};
