(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{368:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"es5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es5"}},[t._v("#")]),t._v(" ES5")]),t._v(" "),a("h2",{attrs:{id:"event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),a("p",[t._v("​\t\tJS是单线程的，在代码执行过程中会产生执行上下文，这些执行上下文会被按顺序执行栈中，如果遇到异步操作，将异步操作压入任务队列，任务队列又分为宏任务和微任务两个队列。当执行栈中为空后，开始按顺序处理任务队列中的任务，先处理微任务再处理宏任务，把它们放入执行栈中。")]),t._v(" "),a("p",[t._v("​\t\t当执行宏任务时如果再有宏任务和微任务，按之前的操作，加入宏任务或者微任务队列。当之前的微任务和宏任务处理完后，再处理新加入任务队列的任务。")]),t._v(" "),a("h2",{attrs:{id:"onclick和addeventlistener的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onclick和addeventlistener的区别"}},[t._v("#")]),t._v(" onclick和addEventListener的区别")]),t._v(" "),a("p",[t._v("onclick属于Inline events，addEventListener属于Event Listeners。")]),t._v(" "),a("p",[t._v("Inline events可以在标签中使用也可以在js中使用（ele.onclick = function(){}），并且一个元素只能绑定一个事件和回调函数，因为后面的会覆盖前面的。")]),t._v(" "),a("p",[t._v("Event Listeners有addEventListener（主流浏览器）和attachEvent（IE浏览器），可以给一个元素绑定多个事件和回调函数。可以取消事件的绑定。")]),t._v(" "),a("h2",{attrs:{id:"queryselector可以选择伪元素吗-选择和改变伪元素的方法是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queryselector可以选择伪元素吗-选择和改变伪元素的方法是什么"}},[t._v("#")]),t._v(" querySelector可以选择伪元素吗？选择和改变伪元素的方法是什么？")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://chance.wodeyyb.cn/base/css.html#_3-%E4%BC%AA%E5%85%83%E7%B4%A0%E5%92%8C%E4%BC%AA%E7%B1%BB",target:"_blank",rel:"noopener noreferrer"}},[t._v("伪元素和伪类的区别"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("伪元素："),a("code",[t._v("::before,::after,::first-line,::first-letter,::selection")])]),t._v(" "),a("p",[a("strong",[t._v("伪元素不属于DOM元素，不存在与文档中，js不能直接操作伪元素")])]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("window.getComputedStyle(element,pseudoElement)")]),t._v("方法获取伪元素的样式声明对象，然后通过键操作符获取相应属性的属性值")]),t._v(" "),a("h2",{attrs:{id:"闭包和立即执行函数的题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包和立即执行函数的题目"}},[t._v("#")]),t._v(" 闭包和立即执行函数的题目")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" func "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO 请实现对应代码逻辑，每调用一次返回值都会加1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 1")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 3 ")]),t._v("\n")])])]),a("p",[t._v("在全局中输入"),a("code",[t._v("func")]),t._v("，不用带括号，"),a("code",[t._v("func")]),t._v("这个立即执行函数会被执行，因为"),a("code",[t._v("func")]),t._v("返回了一个函数，所以"),a("code",[t._v("func()")]),t._v("相当于执行了返回的这个函数。又因为函数具有可以访问其本身外部变量的特性，所以这个立即执行函数中形成了闭包，变量"),a("code",[t._v("n")]),t._v("会始终保存在内存中，每次执行都会加一。")]),t._v(" "),a("h2",{attrs:{id:"js中的数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js中的数据类型"}},[t._v("#")]),t._v(" JS中的数据类型")]),t._v(" "),a("p",[t._v("基本类型 "),a("code",[t._v("Number, Boolean, String, Undefined, Null, Symbol, BigInt")])]),t._v(" "),a("p",[t._v("引用类型 "),a("code",[t._v("Object, Array, Function")])]),t._v(" "),a("h2",{attrs:{id:"ajax原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax原理"}},[t._v("#")]),t._v(" Ajax原理")]),t._v(" "),a("p",[t._v("ajax的原理是通过"),a("code",[t._v("XmlHttpRequest")]),t._v("对象来向服务器发送异步请求")]),t._v(" "),a("h3",{attrs:{id:"实现过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现过程"}},[t._v("#")]),t._v(" 实现过程")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建"),a("code",[t._v("XmlHttpRequest")]),t._v("对象，设置回调函数 "),a("code",[t._v("let req = new XMLHttpRequest()")])])]),t._v(" "),a("li",[a("p",[t._v("初始化请求 "),a("code",[t._v("req.open()")])])]),t._v(" "),a("li",[a("p",[t._v("发送请求"),a("code",[t._v("req.send()")])])]),t._v(" "),a("li",[a("p",[t._v("接受响应并处理数据")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" req "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nreq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nreq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可选")]),t._v("\nreq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nreq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"js的垃圾回收机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js的垃圾回收机制"}},[t._v("#")]),t._v(" JS的垃圾回收机制")]),t._v(" "),a("p",[t._v("https://segmentfault.com/a/1190000018605776")]),t._v(" "),a("h2",{attrs:{id:"all-apply-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all-apply-bind"}},[t._v("#")]),t._v(" all() apply() bind()")]),t._v(" "),a("p",[t._v("三者都是改变函数执行时的上下文 即this的指向")]),t._v(" "),a("p",[t._v("call()接受两个或多个参数，第一个是this的指向，其他为原函数接受的参数")]),t._v(" "),a("p",[t._v("apply()接受两个参数，第一个是this的指向，第二个为一个数组，存入原函数接受的参数")]),t._v(" "),a("p",[t._v("call()和apply()执行后，原函数立即执行，且只是临时改变this指向一次")]),t._v(" "),a("p",[t._v("bind()第一个参数是this的指向，后面传入一个参数列表，可以分多次传入，"),a("strong",[t._v("改变this指向后不会立即执行，而是返回一个永久改变this指向的函数")])]),t._v(" "),a("h2",{attrs:{id:"js的事件模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js的事件模型"}},[t._v("#")]),t._v(" JS的事件模型")]),t._v(" "),a("h3",{attrs:{id:"事件分为三个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件分为三个阶段"}},[t._v("#")]),t._v(" 事件分为三个阶段")]),t._v(" "),a("ul",[a("li",[t._v("捕获阶段：从DOM的顶层一直到事件发生的元素上")]),t._v(" "),a("li",[t._v("目标阶段：事件流传播到事件发生的元素上")]),t._v(" "),a("li",[t._v("冒泡阶段：从事件发生的元素向上传播")])]),t._v(" "),a("h3",{attrs:{id:"事件模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件模型"}},[t._v("#")]),t._v(" 事件模型")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("原始事件模型（DOM0）")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接在html中绑定")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),t._v(" onclick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fun()"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在js中获取dom节点进行绑定")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.btn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbtn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onclick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("DOM0级事件只支持冒泡，不支持捕获")]),t._v(" "),a("p",[t._v("同一类型的事件只能绑定一个回调函数")])]),t._v(" "),a("li",[a("p",[t._v("标准事件模型（DOM2）")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useCapture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("useCapture")]),t._v("表示是否在捕获阶段进行处理，默认值为"),a("code",[t._v("false")]),t._v("，即在冒泡阶段进行处理。")])])]),t._v(" "),a("h3",{attrs:{id:"几个方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几个方法"}},[t._v("#")]),t._v(" 几个方法")]),t._v(" "),a("p",[a("code",[t._v("event.stopPropagation()")]),t._v(" 冒泡机制下，阻止事件进一步冒泡")]),t._v(" "),a("p",[a("code",[t._v("event.preventDefault()")]),t._v(" 取消事件的默认行为")]),t._v(" "),a("h2",{attrs:{id:"null和undefined的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null和undefined的区别"}},[t._v("#")]),t._v(" null和undefined的区别")]),t._v(" "),a("p",[t._v("null表示指向空指针地址，undefined表示应该有值，但是没有赋值。")]),t._v(" "),a("h2",{attrs:{id:"parseint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parseint"}},[t._v("#")]),t._v(" parseInt()")]),t._v(" "),a("p",[t._v("如果字符串中的字符不是指定radix的数字，将忽略该字符及之后所有的字符。")]),t._v(" "),a("p",[t._v("如果字符串以'0x'开头，radix被指定为16")]),t._v(" "),a("p",[t._v("如果字符串以'0'开头，radix被指定为8或10")]),t._v(" "),a("h2",{attrs:{id:"dom事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom事件"}},[t._v("#")]),t._v(" DOM事件")]),t._v(" "),a("p",[t._v("e.stopPropagation()阻止事件传播，不论是冒泡还是捕获")]),t._v(" "),a("p",[t._v("addEventListener()的第三个参数是是否使用捕获的意思，默认是否")]),t._v(" "),a("p",[t._v("先会把所有的事件回调函数绑定到dom节点上，按照先捕获后冒泡的顺序，遇到设置捕获触发的事件，进行回调。")]),t._v(" "),a("h2",{attrs:{id:"object的常用方法属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object的常用方法属性"}},[t._v("#")]),t._v(" Object的常用方法属性")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("Object.assign(target, ...sources)")])]),t._v(" "),a("p",[t._v("第一个参数是目标对象，将后面的对象复制到目标对象中，如果目标对象存在属性，就会覆盖，返回目标对象。")])])]),t._v(" "),a("h2",{attrs:{id:"几种字符串创建的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几种字符串创建的方法"}},[t._v("#")]),t._v(" 几种字符串创建的方法")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("str1和str2创建的是一个字符串(string), str3创建的是一个字符串对象(object),使用"),a("code",[t._v("valueOf")]),t._v("方法将字符串对象转为字符串")]),t._v(" "),a("h2",{attrs:{id:"break、continue和return的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#break、continue和return的区别"}},[t._v("#")]),t._v(" break、continue和return的区别")]),t._v(" "),a("p",[t._v("https://cloud.tencent.com/developer/article/1536956")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("break是终止当前的循环")])]),t._v(" "),a("li",[a("p",[t._v("continue是结束循环中的本次循环")])]),t._v(" "),a("li",[a("p",[t._v("return是退出函数")])])]),t._v(" "),a("h2",{attrs:{id:"两个dom节点寻找最近的共同父节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两个dom节点寻找最近的共同父节点"}},[t._v("#")]),t._v(" 两个dom节点寻找最近的共同父节点")]),t._v(" "),a("p",[t._v("使用dom的方法"),a("code",[t._v("contains()")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commonParentNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oNode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oNode2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oNode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oNode2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" oNode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commonParentNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oNode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("oNode2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("用set存储")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commonParentNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oNode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oNode2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oNode1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v("oNode2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" oNode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oNode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oNode2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oNode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oNode2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oNode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" oNode1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oNode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oNode2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" oNode2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oNode2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oNode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("oNode1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("oNode2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);