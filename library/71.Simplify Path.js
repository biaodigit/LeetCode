let simplifyPath = function (path) {
    return '/' + path.split('/')
        .filter((str) => str !== '' && str !== '.')
        .reduce((arr, str) => {
            if (str === '..')
                arr.pop();
            else
                arr.push(str);

            return arr
        }, []).join('')
};