const chars = "qwertyuiopasdfghjklzxcvbnm".split("");

let ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0
    let beginQueue = new Set([beginWord]), endQueue = new Set([endWord]),
        beginWordSet = new Set(wordList), endWordSet = new Set(wordList),
        len = 1;
    beginWordSet.delete(beginWord)
    endWordSet.delete(endWord)

    while (beginQueue.size && endQueue.size) {
        // console.log('start', beginQueue, endQueue)
        if (beginQueue.size > endQueue.size) {
            [beginQueue, endQueue] = [endQueue, beginQueue];
            [beginWordSet, endWordSet] = [endWordSet, beginWordSet];
        }
        console.log('end', beginQueue, endQueue)
        let neighbors = []
        for (let word of beginQueue) {
            if (endQueue.has(word)) return len
            setNeighbors(neighbors, word, beginWordSet)
        }

        len++
        beginQueue = new Set(neighbors)
    }
    return 0

};

let setNeighbors = function (neighbors, word, wordSet) {
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j <= chars.length; j++) {
            let char = chars[j],
                str = `${word.slice(0, i)}${char}${word.slice(i + 1)}`;
            if (wordSet.has(str)) {
                neighbors.push(str)
                wordSet.delete(str)
            }
        }
    }
}
