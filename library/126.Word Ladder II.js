let findLadders = function (beginWord, endWord, wordList) {
    let idxEndWord = wordList.indexOf(endWord)
    if (idxEndWord === -1) return [];

    // 建图
    const graphList = wordList.concat(beginWord).map(word => ({ word, comeFrom: [], neighbors: new Set, paths: null, visited: false })),
        edges = new Map;
    for (let node of graphList) {
        let word = node.word
        for (let i = 0; i < word.length; i++) {
            let str = `${word.slice(0, i)}*${word.slice(i + 1)}`,
                neighbors = edges.get(str);
            if (!neighbors) {
                edges.set(str, [node])
                continue;
            }
            for (let neighbor of neighbors) {
                neighbor.neighbors.add(node)
                node.neighbors.add(neighbor)
            }
            neighbors.push(node)
        }
    }

    // bfs
    let target = graphList[idxEndWord],
        start = graphList[graphList.length - 1],
        frontier = [start];
    while (frontier.length && !target.comeFrom.length) {
        let newFrontier = []
        for (let front of frontier) front.visited = true

        for (let front of frontier) {
            for (let neighbor of front.neighbors) {
                if(neighbor.visited) continue;
                if (!neighbor.comeFrom.length) newFrontier.push(neighbor)
                neighbor.comeFrom.push(front)
            }
        }
        frontier = newFrontier
    }

    if (!target.comeFrom.length) return [];
    start.paths = [[start.word]]

    return (function getPaths(node) {
        if (node.paths) return node.paths
        let result = [].concat(...node.comeFrom.map(getPaths))
        for (let i = 0; i < result.length; i++) result[i] = result[i].concat(node.word)
        return node.paths = result
    })(target)
};