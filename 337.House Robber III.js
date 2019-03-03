const _rob = function (root, values) {
    if (!root) return 0;

    if (values.has(root)) return values.get(root)

    let money = root.val;
    if (root.left) {
        money += _rob(root.left.left, values) + _rob(root.left.right, values)
    }
    if (root.right) {
        money += _rob(root.right.left, values) + _rob(root.right.right, values)
    }

    let moreMoney = _rob(root.left, values) + _rob(root.right, values);

    console.log(`money:${money},moremoney:${moreMoney}`)
    money = Math.max(money, moreMoney);
    values.set(root, money);

    return money
};

const rob = function (root) {
    let map = new Map();
    return _rob(root, map)
};