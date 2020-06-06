(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{271:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),e("p",[t._v("你能不将整数转为字符串来解决这个问题吗？")]),t._v(" "),e("p",[t._v("来源：力扣（LeetCode）"),e("br"),t._v("\n链接："),e("a",{attrs:{href:"https://leetcode-cn.com/problems/palindrome-number/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/palindrome-number/"),e("OutboundLink")],1)]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"题目：回文数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目：回文数","aria-hidden":"true"}},[this._v("#")]),this._v(" 题目：回文数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例1")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("输入: 121\n输出: true\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 2")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("输入: -121\n输出: false\n解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 3")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("输入: 10\n输出: false\n解释: 从右向左读, 为 01 。因此它不是一个回文数。\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("进阶")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"解题思路："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题思路：","aria-hidden":"true"}},[this._v("#")]),this._v(" 解题思路：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1.先判断x传进来的两种情况:"),s("br")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("是否为负数")]),this._v(" "),s("li",[this._v("数字最后一位是否为0(除了0本身)\n以上两种情况反转后肯定不等于原来的数，因此要先过滤掉"),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2.根据题目要求要返回与输入结果是否相等，因此与第七题反转数字的思路是一样的，但是有一点小小的区别，可以只计算一半就返回判断结果，因为根据回文对称原则,前半部分与后半部分一定是相等的,比如:"),s("br")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("x=12321,reverse=0,使用栈推出的方法，推出倒数第一个和第二个数字后"),e("code",[t._v("reverse")]),t._v("为12，"),e("code",[t._v("x")]),t._v("为"),e("code",[t._v("123")]),t._v("，而在x长度为奇数的情况下中间的数字是可以忽略掉的，因此可以设定一个当"),e("code",[t._v("x>reverse")]),t._v("的循环条件，当"),e("code",[t._v("reverse")]),t._v("变为"),e("code",[t._v("123")]),t._v("后退出循环")]),t._v(" "),e("li",[t._v("判断是否相等的时候，根据上文提到的奇数情况下"),e("code",[t._v("3")]),t._v("是可以忽略掉的，因此可以用"),e("code",[t._v("reverse/10")]),t._v("把"),e("code",[t._v("3")]),t._v("删除掉后与"),e("code",[t._v("x")]),t._v("进行比较")]),t._v(" "),e("li",[t._v("需要注意的是在反转的过程中不需要判断是否溢出，假设传入数字为123456789，完全反转后的数字为"),e("code",[t._v("987654321")]),t._v(",假设这个数字是溢出的，那么反转到一半的时候"),e("code",[t._v("reverse=98765")]),t._v("，只反转了一半的长度，也不会存在溢出的问题，即使给出的"),e("code",[t._v("x")]),t._v("完整反转后是存在溢出，由于题目没有明确说明这种情况下这里暂不对这种情况做讨论")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码实现")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isPalindrome")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reverse "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" reverse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        reverse "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reverse "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" reverse "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reverse "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])}],!1,null,null,null);s.default=r.exports}}]);