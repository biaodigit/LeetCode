(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{270:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。")]),t._v(" "),a("p",[t._v("当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。")]),t._v(" "),a("p",[t._v("该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。")]),t._v(" "),a("p",[t._v("注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。")]),t._v(" "),a("p",[t._v("在任何情况下，若函数不能进行有效的转换时，请返回 0。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，qing返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),a("p",[t._v("来源：力扣（LeetCode）"),a("br"),t._v("\n链接："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/string-to-integer-atoi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/string-to-integer-atoi/"),a("OutboundLink")],1)]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("1.首先设置变量:")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"题目：字符串转换整数-atoi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目：字符串转换整数-atoi","aria-hidden":"true"}},[this._v("#")]),this._v(" 题目：字符串转换整数 (atoi)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("请你来实现一个 "),s("code",[this._v("atoi")]),this._v(" 函数，使其能将字符串转换成整数。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("说明")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例1")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('输入: "42"\n输出: 42\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 2")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("输入: \"   -42\"\n输出: -42\n解释: 第一个非空白字符为 '-', 它是一个负号。\n     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 3")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("输入: \"4193 with words\"\n输出: 4193\n解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 4")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("输入: \"words and 987\"\n输出: 0\n解释: 第一个非空字符是 'w', 但它不是数字或正、负号。\n     因此无法执行有效的转换。\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 5")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('输入: "-91283472332"\n输出: -2147483648\n解释: 数字 "-91283472332" 超过 32 位有符号整数范围。\n     因此返回 INT_MIN (−231) 。\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"解题思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 解题思路")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("i")]),this._v(":当前遍历位置")]),this._v(" "),s("li",[s("code",[this._v("isNegative")]),this._v(": 判断转化结果是否为负数")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("2.先从判断字符串前面有没有空格开始，如果有则一直遍历下去，"),a("code",[t._v("i")]),t._v("一直加1"),a("br"),t._v("\n3.当检测到有加减符号后，如果是减号，"),a("code",[t._v("isNegative")]),t._v("为true"),a("br"),t._v("\n4.利用字符串编码的性质,比如字符串"),a("code",[t._v("0")]),t._v("的编码为"),a("code",[t._v("48")]),t._v("，"),a("code",[t._v("1")]),t._v("的编码为"),a("code",[t._v("49")]),t._v("，"),a("code",[t._v("2")]),t._v("的编码为"),a("code",[t._v("50")]),t._v("，以此类推，那么可以得出0-9的编码是48-57，因此可以根据"),a("code",[t._v("str.charCodeAt(i)-48")]),t._v("得出差值计算当前字符是否可以转换为数字，如下:"),a("br")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("假设"),a("code",[t._v("str='13a12'")]),t._v(","),a("code",[t._v("i")]),t._v("从0开始遍历，"),a("code",[t._v("str.charCodeAt(i)-48=1")]),t._v("，0<1<9,当前字符符合要求，"),a("code",[t._v("i")]),t._v("加1，结果值"),a("code",[t._v("res*10")]),t._v("后与当前字符相加")]),t._v(" "),a("li",[a("code",[t._v("i=1")]),t._v("，"),a("code",[t._v("str.charCodeAt(i)-48=3")]),t._v("，0<3<49，符合要求，同上操作")]),t._v(" "),a("li",[a("code",[t._v("i=2")]),t._v("时，"),a("code",[t._v("str.charCodeAt(i)-48=49")]),t._v("，49>9，不符合要求，转换停止")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("5.通过"),s("code",[this._v("isNegative")]),this._v("判断是否需要给"),s("code",[this._v("res")]),this._v("转化为负数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码实现")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myAtoi")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        isNegative "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        isNegative "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isNegative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("res\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2147483647")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2147483648")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);