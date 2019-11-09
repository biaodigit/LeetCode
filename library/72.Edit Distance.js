let minDistance = function (word1, word2) {
    let len1 = word1.length,
        len2 = word2.length,
        dp = Array(len1 + 1);

    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(len2 + 1)
    }

    for (let i = 0; i <= len1; i++) {
        dp[i][0] = i
    }

    for (let i = 1; i <= len2; i++) {
        dp[0][i] = i;
    }

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (word1.charAt(i) === word2.charAt(j)) {
                dp[i + 1][j + 1] = dp[i][j]
            } else {
                dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i + 1][j], dp[i][j + 1]) + 1
            }
        }
    }

    return dp[len1][len2]
};