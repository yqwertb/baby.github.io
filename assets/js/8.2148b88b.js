(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{363:function(t,e,v){"use strict";v.r(e);var _=v(42),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"web综合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web综合"}},[t._v("#")]),t._v(" web综合")]),t._v(" "),v("h2",{attrs:{id:"输入url到显示的过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#输入url到显示的过程"}},[t._v("#")]),t._v(" 输入url到显示的过程")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("浏览器进程中的UI线程判断输入的是url还是搜索的内容，判断为url后和网络请求线程通信")])]),t._v(" "),v("li",[v("p",[t._v("网络线程先要进行DNS寻址，建立连接")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("DNS寻址的过程")])]),t._v(" "),v("li",[v("p",[t._v("三次握手，四次挥手")])])])]),t._v(" "),v("li",[v("p",[t._v("读取响应")])]),t._v(" "),v("li",[v("p",[t._v("开始合成页面")])]),t._v(" "),v("li",[v("p",[t._v("提交导航")])]),t._v(" "),v("li",[v("p",[t._v("渲染页面")])])]),t._v(" "),v("h2",{attrs:{id:"保持登录状态的方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保持登录状态的方式"}},[t._v("#")]),t._v(" 保持登录状态的方式")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("cookie + session")]),t._v(" "),v("p",[t._v("缺点：在分布式服务器中，服务器太多，session只能对应一台服务器")])]),t._v(" "),v("li",[v("p",[t._v("token + localStorage")])]),t._v(" "),v("li",[v("p",[t._v("JWT(Json Web Token)")]),t._v(" "),v("p",[t._v("一个JWT包含三个部分：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("头部")]),t._v(" "),v("p",[t._v("使用的算法和令牌类型")])]),t._v(" "),v("li",[v("p",[t._v("载荷")]),t._v(" "),v("p",[t._v("包含需要传递的数据")])]),t._v(" "),v("li",[v("p",[t._v("签名")]),t._v(" "),v("p",[t._v("使用服务器指定的秘钥（secret）进行签名")]),t._v(" "),v("div",{staticClass:"language-javascript extra-class"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HMACSHA256")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  secret"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])]),t._v(" "),v("h2",{attrs:{id:"http请求什么时候会带上cookie信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http请求什么时候会带上cookie信息"}},[t._v("#")]),t._v(" HTTP请求什么时候会带上cookie信息")]),t._v(" "),v("ol",[v("li",[t._v("cookie中的domain属性和当前域名相同")]),t._v(" "),v("li",[t._v("协议相同，或者secure属性为false")]),t._v(" "),v("li",[t._v("发送请求的路径和path属性相同")]),t._v(" "),v("li",[t._v("Ajax对请求设置"),v("code",[t._v("req.withCredentials")]),t._v("为true")])]),t._v(" "),v("h2",{attrs:{id:"什么是xss和csrf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是xss和csrf"}},[t._v("#")]),t._v(" 什么是XSS和CSRF")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("XSS（cross-site scripting 跨站点脚本）是一种代码注入攻击")]),t._v(" "),v("p",[t._v("例如用户在评论中输入由"),v("code",[t._v("<script><\/script>")]),t._v("包裹的js代码，这种就属于脚本注入，如果代码中有请求外部服务器，就是XSS。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("DOM型")]),t._v(" "),v("p",[t._v("原理：JS操作DOM")])]),t._v(" "),v("li",[v("p",[t._v("存储型")]),t._v(" "),v("p",[t._v("将恶意代码存储在网站的数据库，用户访问网站，浏览器执行恶意的代码。")])]),t._v(" "),v("li",[v("p",[t._v("反射型")]),t._v(" "),v("p",[t._v("将恶意代码存储在URL中，用户点击后执行。")])])])]),t._v(" "),v("li",[v("p",[t._v("CSRF（cross-site request forgery 跨站请求伪造）是一种挟持用户执行非本意的操作的攻击")]),t._v(" "),v("p",[t._v("CSRF的一种实现方法就是XSS，通过XSS注入代码，代码携带cookie信息传输给了外部服务器（到这里是XSS攻击），外部服务器利用这些cookie进行非用户本意的http请求（这时产生了CSRF攻击）。")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://segmentfault.com/a/1190000007059639",target:"_blank",rel:"noopener noreferrer"}},[t._v("用大白话谈谈XSS与CSRF"),v("OutboundLink")],1)])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("两者的本质区别")]),t._v(" "),v("p",[t._v("XSS是代码注入问题，CSRF是HTTP问题")])]),t._v(" "),v("h2",{attrs:{id:"如何防范xss和csrf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何防范xss和csrf"}},[t._v("#")]),t._v(" 如何防范XSS和CSRF")]),t._v(" "),v("ol",[v("li",[t._v("XSS\n"),v("ul",[v("li",[t._v("对一些符号进行转义或者过滤，如<>。")]),t._v(" "),v("li",[t._v("对cookie添加HttpOnly参数")]),t._v(" "),v("li",[t._v("前端限制用户输入数据类型，比如输入年龄和手机号只能输入数字")]),t._v(" "),v("li",[t._v("过滤js事件的标签")])])]),t._v(" "),v("li",[t._v("CSRF\n"),v("ul",[v("li",[t._v("token验证")]),t._v(" "),v("li",[t._v("验证码")]),t._v(" "),v("li",[t._v("请求头部 referer限制")]),t._v(" "),v("li",[t._v("服务器在响应头添加内容安全策略(CSP)")])])])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://segmentfault.com/a/1190000007766732",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何防范XSS和CSRF？"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"发起请求时怎么知道携带哪个cookie-怎么匹配cookie"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#发起请求时怎么知道携带哪个cookie-怎么匹配cookie"}},[t._v("#")]),t._v(" 发起请求时怎么知道携带哪个cookie，怎么匹配cookie")]),t._v(" "),v("h2",{attrs:{id:"单点登录如何实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单点登录如何实现"}},[t._v("#")]),t._v(" 单点登录如何实现")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.cnblogs.com/ywlaker/p/6113927.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("单点登录"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"http缓存相关"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http缓存相关"}},[t._v("#")]),t._v(" HTTP缓存相关")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://segmentfault.com/u/gzchen",target:"_blank",rel:"noopener noreferrer"}},[t._v("双方都 "),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"解释一下-cookie-的-samesite-字段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解释一下-cookie-的-samesite-字段"}},[t._v("#")]),t._v(" 解释一下 Cookie 的 SameSite 字段？")]),t._v(" "),v("p",[v("code",[t._v("SameSite")]),t._v("是HTTP响应头的属性之一，它让Cookie在跨站请求时不会被发送，阻止跨站请求伪造攻击")]),t._v(" "),v("p",[v("code",[t._v("SameSite")]),t._v("有三个属性值")]),t._v(" "),v("ul",[v("li",[t._v("Strict 目标URL与当前URL完全一致才会携带Cookie")]),t._v(" "),v("li",[t._v("Lax 不允许部分第三方请求携带Cookie  （post表单、iframe、ajax、image）")]),t._v(" "),v("li",[t._v("None 无论是否跨站都会发送Cookie")])]),t._v(" "),v("h2",{attrs:{id:"get和post的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get和post的区别"}},[t._v("#")]),t._v(" Get和Post的区别")]),t._v(" "),v("ul",[v("li",[t._v("用途：get应该被用作获取资源，post是上传数据")]),t._v(" "),v("li",[t._v("数据大小：因为浏览器的限制，get通常用大小限制，post没有")]),t._v(" "),v("li",[t._v("数据类型：get只可以传输字符串，post可以传输更多类型的数据")]),t._v(" "),v("li",[t._v("安全性：get会留在浏览器的浏览记录中，post安全性更高")])]),t._v(" "),v("h2",{attrs:{id:"cookie、-sessionstorage、-localstorage的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie、-sessionstorage、-localstorage的区别"}},[t._v("#")]),t._v(" cookie、 sessionStorage、 localStorage的区别")]),t._v(" "),v("ul",[v("li",[t._v("存储大小： cookie大小为4k，storage大小为5mb")]),t._v(" "),v("li",[t._v("过期时间：cookie会在设置的时间后过期（如果没有设置时间，则默认为会话cookie，在浏览器关闭后过期），session会在浏览器或标签关闭后消失，local不会主动消失")]),t._v(" "),v("li",[t._v("域的区别：\n"),v("ul",[v("li",[t._v("session：即使是同一个url，也不能在不同的窗口中共享使用")]),t._v(" "),v("li",[t._v("local/cookie： 在同源的窗口中可以共享")])])]),t._v(" "),v("li",[t._v("是否可以缺省：cookie作用是和服务器交互，是会自动携带在请求中的，而webstorage不是必须携带在请求中的")]),t._v(" "),v("li",[t._v("存储类型：\n"),v("ul",[v("li",[t._v("cookie：身份信息，前后通信验证的凭证")]),t._v(" "),v("li",[t._v("session：")]),t._v(" "),v("li",[t._v("local：静态资源，token")])])])]),t._v(" "),v("h2",{attrs:{id:"http缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http缓存"}},[t._v("#")]),t._v(" HTTP缓存")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("强制缓存")]),t._v(" "),v("ul",[v("li",[t._v("HTTP1.0的"),v("code",[t._v("expires")]),t._v("字段，设置一个绝对时间，在这个时间后过期")]),t._v(" "),v("li",[t._v("HTTP1.1的"),v("code",[t._v("Cache-Control")]),t._v("字段")])]),t._v(" "),v("blockquote",[v("p",[v("code",[t._v("Cache-Control")]),t._v(" 设置"),v("code",[t._v("max-age")]),t._v("后 ，优先级高于"),v("code",[t._v("expires")])])])]),t._v(" "),v("li",[v("p",[t._v("协商缓存")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("eTag")]),t._v("（响应头中）/"),v("code",[t._v("If-None-Match")]),t._v("  （请求头中）")]),t._v(" "),v("li",[v("code",[t._v("Last-Modified")]),t._v("（响应头中）/"),v("code",[t._v("If-Modified-Since")]),t._v("（请求头中）")])]),t._v(" "),v("blockquote",[v("p",[v("code",[t._v("eTag")]),t._v("的优先级高于"),v("code",[t._v("Last-Modified")])]),t._v(" "),v("p",[t._v("强制缓存优先级高于协商缓存")])])])]),t._v(" "),v("h2",{attrs:{id:"跨域的实现方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跨域的实现方法"}},[t._v("#")]),t._v(" 跨域的实现方法")]),t._v(" "),v("p",[t._v("fetch不是解决跨域的办法")]),t._v(" "),v("ul",[v("li",[t._v("JSONP")]),t._v(" "),v("li",[t._v("后端设置"),v("code",[t._v("Access-Control-Allow-Orgin")])]),t._v(" "),v("li",[t._v("postMessage\n"),v("ul",[v("li",[t._v("页面和其打开的新窗口的数据传递")]),t._v(" "),v("li",[t._v("多窗口之间的消息传递")]),t._v(" "),v("li",[t._v("页面与嵌套的iframe消息传递")]),t._v(" "),v("li",[t._v("以上三个场景的跨域数据传递")])])]),t._v(" "),v("li",[t._v("websocket")]),t._v(" "),v("li",[t._v("后台请求转发")])]),t._v(" "),v("h3",{attrs:{id:"cors-和-jsonp-相比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cors-和-jsonp-相比"}},[t._v("#")]),t._v(" cors 和 jsonp 相比")]),t._v(" "),v("p",[t._v("jsonp只支持get请求，cors支持所有类型的请求")]),t._v(" "),v("p",[t._v("cors使用xmlhttpRequest对象进行请求，有更好的错误处理")]),t._v(" "),v("h2",{attrs:{id:"简单请求和复杂请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单请求和复杂请求"}},[t._v("#")]),t._v(" 简单请求和复杂请求")]),t._v(" "),v("ul",[v("li",[t._v("简单请求：\n"),v("ul",[v("li",[t._v("方法限制：get、post、head")]),t._v(" "),v("li",[t._v("content-type限制：text/plain、multipart/form-data、application/x-www-form-urlencoded")])])]),t._v(" "),v("li",[t._v("复杂请求：\n"),v("ul",[v("li",[t._v("方法：put、delete、options等")])])])]),t._v(" "),v("p",[t._v("对于简单请求，直接在请求头部添加origin，响应头添加cors属性")]),t._v(" "),v("p",[t._v("对于复杂请求，需要先发送options请求，如果浏览器支持的请求包括要发生的复杂请求，发送实际请求")]),t._v(" "),v("h2",{attrs:{id:"浏览器实时通信方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器实时通信方案"}},[t._v("#")]),t._v(" 浏览器实时通信方案")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("websocket")]),t._v(" "),v("p",[t._v("原理： 浏览器不可以直接和服务器建立TCP连接，TCP是可靠的，双全工的数据通信通道。websocket只在最初建立连接时借用HTTP，之后都是直接使用TCP完成通信。")]),t._v(" "),v("p",[t._v("使用：创建一个websocket对象实例，对实例绑定各种事件的回调函数")])]),t._v(" "),v("li",[v("p",[t._v("server-sent-event 使用eventSource对象")]),t._v(" "),v("p",[t._v("eventSource的api和websocket的类似")]),t._v(" "),v("p",[t._v("头部的"),v("code",[t._v("accept")]),t._v("是"),v("code",[t._v("text/event-stream")])])]),t._v(" "),v("li",[v("p",[t._v("长轮询")]),t._v(" "),v("p",[t._v("http是基于请求/响应的，长短连接说的是TCP连接")]),t._v(" "),v("blockquote",[v("p",[t._v("http请求和响应都是通过tcp连接这个通道传输的")])]),t._v(" "),v("p",[t._v("长连接意味着tcp连接复用，多个http请求利用一个tcp连接，不用建立多个tcp请求")])])]),t._v(" "),v("h2",{attrs:{id:"service-worker-浏览器缓存-性能优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#service-worker-浏览器缓存-性能优化"}},[t._v("#")]),t._v(" service worker （浏览器缓存 性能优化）")]),t._v(" "),v("p",[t._v("service worker是web worker的一种，在额外的线程上执行js代码。service worker下有cache和cache storage两个接口 cache和请求相关， cache storage和cache对象打交道。")]),t._v(" "),v("p",[t._v("把图片 js css等文件可以存入cache storage中，优化性能")]),t._v(" "),v("p",[t._v("service worker除了缓存文件，做离线应用；还可以用来推送消息；提前获取文件资源")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://panzhongxian.cn/cn/2021/04/07-the-building-blocks-of-web-workers-5-cases-when-you-should-use-them/",target:"_blank",rel:"noopener noreferrer"}},[t._v("service worker"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"tcp和udp区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp区别"}},[t._v("#")]),t._v(" TCP和UDP区别")]),t._v(" "),v("ol",[v("li",[t._v("处理报文\n"),v("ul",[v("li",[t._v("udp在传输过程中不会拆分报文，发送方会直接在报文添加首部，接收方直接去掉报文首部交给应用程序。")]),t._v(" "),v("li",[t._v("tcp把数据报文看做数据流，并将数据流编号存在发送缓存中，tcp根据发送策略，从缓存中提取字节发送")])])]),t._v(" "),v("li",[t._v("提供的传输服务\n"),v("ul",[v("li",[t._v("udp不会关注传输过程中报文的丢失，因此适合实时的场景中（视频会议，电话，dns）")]),t._v(" "),v("li",[t._v("tcp有校验和，超时重传，流量控制，拥塞控制来保证报文数据的完整，适合需要可靠传输的场景（文件传输，电子邮件）")])])]),t._v(" "),v("li",[t._v("首部的格式\n"),v("ul",[v("li",[t._v("udp首部简单，有源端口、目的端口、长度和校验和")]),t._v(" "),v("li",[t._v("tcp首部复杂，除了udp有的还有序号确认号，滑动窗口相关的")])])])]),t._v(" "),v("h2",{attrs:{id:"http-https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-https"}},[t._v("#")]),t._v(" HTTP/HTTPS")]),t._v(" "),v("h2",{attrs:{id:"懒加载和预加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#懒加载和预加载"}},[t._v("#")]),t._v(" 懒加载和预加载")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("懒加载")]),t._v(" "),v("ul",[v("li",[v("p",[v("code",[t._v("getBoundingClientRect")])]),t._v(" "),v("p",[v("code",[t._v("getBoundingClientRect")]),t._v("返回元素相对于视口的位置")]),t._v(" "),v("p",[t._v("top大于等于0 && bottom小于等于视口高度 && left 大于等于0 && right 小于等于视口宽度")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("IntersectionObserver")])]),t._v(" "),v("p",[t._v("设置监听对象和边界盒交叉的比例值（100%）当元素可见比例达到设置的值后，调用一个回调函数，在函数中加载图片。")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/7070015633995333645#heading-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("懒加载原理"),v("OutboundLink")],1)])])])]),t._v(" "),v("li",[v("p",[t._v("预加载")]),t._v(" "),v("ul",[v("li",[t._v("js新建image对象，给src属性赋值")])])])]),t._v(" "),v("h2",{attrs:{id:"项目的优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目的优化"}},[t._v("#")]),t._v(" 项目的优化")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://learnku.com/docs/f2e-performance-rules/reduce-dns-queries/6370",target:"_blank",rel:"noopener noreferrer"}},[t._v("优化"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"首次加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#首次加载"}},[t._v("#")]),t._v(" 首次加载")]),t._v(" "),v("p",[t._v("减少http的请求数 使用http1.1 http2.0")]),t._v(" "),v("p",[t._v("减少dns查询：ttl（time-to-live）值变大， 减少请求的域名数量")]),t._v(" "),v("p",[t._v("dns预解析")]),t._v(" "),v("p",[t._v("使用cdn")]),t._v(" "),v("p",[t._v("图片懒加载")]),t._v(" "),v("p",[t._v("script标签和link的设置")]),t._v(" "),v("p",[t._v("压缩代码/http gzip压缩/")]),t._v(" "),v("p",[t._v("http缓存/service worker")]),t._v(" "),v("p",[t._v("图片格式（webp） 精灵图")]),t._v(" "),v("p",[t._v("cookie减肥")])])}),[],!1,null,null,null);e.default=s.exports}}]);