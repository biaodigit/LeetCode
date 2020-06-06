(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{238:function(t,s,n){t.exports=n.p+"assets/img/0026-01.e500aada.png"},239:function(t,s,n){t.exports=n.p+"assets/img/0026-02.0a2b1260.png"},240:function(t,s,n){t.exports=n.p+"assets/img/0026-03.7f3ef0d6.png"},288:function(t,s,n){"use strict";n.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"题目：删除排序数组中的重复项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目：删除排序数组中的重复项","aria-hidden":"true"}},[this._v("#")]),this._v(" 题目：删除排序数组中的重复项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("给定一个排序数组，你需要在"),s("strong",[this._v("原地删除")]),this._v("重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("不要使用额外的数组空间，你必须在"),s("strong",[this._v("原地修改输入数组")]),this._v("并在使用 O(1) 额外空间的条件下完成。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 1")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("给定数组 nums = [1,1,2],\n\n函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。\n\n你不需要考虑数组中超出新长度后面的元素。\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 2")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("给定 nums = [0,0,1,1,1,2,2,3,3,4],\n\n函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。\n\n你不需要考虑数组中超出新长度后面的元素。\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("说明")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("请注意，输入数组是以“"),s("strong",[this._v("引用")]),this._v("”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝\nint len = removeDuplicates(nums);\n\n// 在函数里修改输入数组对于调用者是可见的。\n// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。\nfor (int i = 0; i < len; i++) {\n    print(nums[i]);\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"解题思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 解题思路")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("按照题目要求不能使用"),s("strong",[this._v("额外空间")]),this._v(",而给定数组又是一个已排好序的数组，所以可以使用双指针对重复元素进行覆盖达到删除的效果，详细步骤如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("先定义两个值：\n"),a("ul",[a("li",[t._v("index:每次覆盖重复元素的位置，起始值为1，因为默认"),a("code",[t._v("nums[0]")]),t._v("为第一个去重后的元素")]),t._v(" "),a("li",[t._v("preVal：上一个比较值，用于比较与当前元素是否相等，起始值为"),a("code",[t._v("nums[0]")])])])]),t._v(" "),a("li",[t._v("从第二个元素开始对数组进行遍历，如下图\n"),a("img",{attrs:{src:n(238),alt:"0026-01.png"}}),a("br"),t._v("\n当i=2时，"),a("code",[t._v("nums[i]!==preVal")]),t._v("，把"),a("code",[t._v("nums[i]")]),t._v("覆盖到当前"),a("code",[t._v("nums[index]")]),t._v("上，index加1，更新"),a("code",[t._v("preVal=1")]),t._v(" "),a("img",{attrs:{src:n(239),alt:"0026-02.png"}}),a("br"),t._v("\n当i=5时，"),a("code",[t._v("nums[i]!==preVal")]),t._v("，操作和上面一样\n"),a("img",{attrs:{src:n(240),alt:"0026-03.png"}}),a("br")]),t._v(" "),a("li",[t._v("循环以上步骤，当循环结束后返回"),a("code",[t._v("index")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码实现")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("removeDuplicates")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" preVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" preVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            preVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" index\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],e=n(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),n("p",[t._v("为什么返回数值是整数，但输出的答案是数组呢?")]),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("你可以想象内部操作如下:")]),t._v(" "),t._m(9),n("p",[t._v("来源：力扣（LeetCode）"),n("br"),t._v("\n链接："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array"),n("OutboundLink")],1)]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)])},a,!1,null,null,null);s.default=r.exports}}]);