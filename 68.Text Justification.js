let createLine = (words, maxWidth) => {
    let lines = [],
        k = 0,
        line;

    while (k < words.length) {
        line = [];

        while (k < words.length) {
            let word = words[k];
            let peekLen = [...line, word].join(' ').length;

            if (peekLen <= maxWidth) {
                line.push(word);
                k++
            } else {
                break;
            }
        }

        lines.push(line)
    }

    return lines
};

let justifyLines = (lines, maxWidth) => {
    let justified = [];

    let push = (line, space) => {
        let text = line.join(space),
            extra = ' '.repeat(maxWidth - text.length);

        justified.push(text + extra)
    };


    for (let i = 0; i < lines.length - 1; i++) {
        let line = lines[i];

        let spaces = (maxWidth - line.join('').length);

        for (let j = 0; j < spaces; j++) {
            let index = j % (line.length - 1 || 1);
            line[index] += ' '
        }

        push(line, '')
    }
    push(lines[lines.length - 1], '')

    return justified
};

let fullJustify = (words, maxWidth) => {
    let lines = createLine(words, maxWidth);

    lines = justifyLines(lines, maxWidth);

    return lines
};