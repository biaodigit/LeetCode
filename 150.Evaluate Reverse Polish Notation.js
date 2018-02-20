let calc = (p1, p2, operator) => {
    switch (operator) {
        case '+':
            return p2 + p1;
            break;
        case '-':
            return p2 - p1;
            break;
        case '*':
            return p2 * p1;
            break;
        case '/':
            return p2 / p1;
            break;
    }
};
let isOperator = (item) => {
    let operators = ['+', '-', '*', '/']
    return operators.indexOf(item) > -1
};
let evalRPN = (tokens) => {
    let stack = []
    let top = -1
    for (let i = 0; i < tokens.length; i++) {
        let item = tokens[i]
        if (isOperator(item)) {
            let p1 = stack[top--]
            let p2 = stack[top--]
            stack[++top] = parseInt(calc(p1, p2, item))
        } else {
            stack[++top] = parseInt(item)
        }
    }
    return stack[0]
};
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))