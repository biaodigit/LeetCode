let groupAnagrams = function (strs) {
    let ret = [],
        map = new Map(),
        str;
    for (let i = 0; i < strs.length; i++) {
        str = strs[i].split('').sort().join('');
        if (!map.has(str)) {
            map.set(str, [strs[i]])
        } else {
            let temp = map.get(str);
            temp.push(strs[i]);
            map.set(str, temp)
        }
    }
    for (let key of map.keys()) {
        ret.push(map.get(key))
    }
    return ret
};