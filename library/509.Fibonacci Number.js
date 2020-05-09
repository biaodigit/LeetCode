/**
 * 递归
 * @param {*} N 
 */
// let fib = function (N) {
//     if (N === 0) {
//         return 0
//     } else if (N === 1) {
//         return 1
//     } else {
//         return fib(N - 1) + fib(N - 2)
//     }
// };
/**
 * DP
 * @param {*} N 
 */
// let fib = function (N) {
//     if (N === 0) return 0
//     if (N === 1) return 1
//     let a = 0,
//         b = 1,
//         res = 0;
//     for (let i = 2; i <= N; i++) {
//         res = a + b
//         a = b
//         b = res
//     }
//     return res
// };
/**
 * 尾递归
 * @param {*} N
 * @param {*} num1
 * @param {*} num2
 */
// let fib = function (N, num1 = 1, num2 = 1) {
//     if (N === 0) {
//         return 0
//     } else if (N === 1) {
//         return num1
//     } else {
//         return fib(N - 1, num2, num1 + num2)
//     }
// };
/**
 * 幂乘法
 * @param {*} N 
 */
let fib = function (N) {
    if (N <= 1) return N
    let A = [[1, 1], [1, 0]]
    matrixPower(A, N - 1)
    return A[0][0]
};

let matrixPower = function (A, N) {
    if (N <= 1) return
    matrixPower(A, N >> 1)
    multiply(A, A)
    let B = [[1, 1], [1, 0]]
    if (N % 2 !== 0) {
        multiply(A, B)
    }
}

let multiply = function (A, B) {
    let x = A[0][0] * B[0][0] + A[0][1] * B[1][0],
        y = A[0][0] * B[0][1] + A[0][1] * B[1][1],
        z = A[1][0] * B[0][0] + A[1][1] * B[1][0],
        w = A[1][0] * B[0][1] + A[1][1] * B[1][1];
    A[0][0] = x;
    A[0][1] = y;
    A[1][0] = z;
    A[1][1] = w;

}