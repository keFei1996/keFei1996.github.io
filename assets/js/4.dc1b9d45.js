(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{353:function(t,s,a){t.exports=a.p+"assets/img/model.ad264686.png"},354:function(t,s,a){t.exports=a.p+"assets/img/IEmodel.f575b18d.png"},355:function(t,s,a){t.exports=a.p+"assets/img/margin.5f5e75c5.png"},380:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"深入理解css盒模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深入理解css盒模型"}},[t._v("#")]),t._v(" 深入理解CSS盒模型")]),t._v(" "),n("p",[t._v("谈谈你对css盒模型的认识")]),t._v(" "),n("ul",[n("li",[t._v("基本概念 标准模型+IE模型")]),t._v(" "),n("li",[t._v("标准模型和IE模型区别")]),t._v(" "),n("li",[t._v("css是如何设置这两种模型")]),t._v(" "),n("li",[t._v("js如何设置获取盒模型对应的宽和高")]),t._v(" "),n("li",[t._v("实例题 根据盒模型解决边距重叠")]),t._v(" "),n("li",[t._v("BFC (边距重叠解决方案)")])]),t._v(" "),n("h3",{attrs:{id:"基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),n("p",[t._v("盒模型的组成大家肯定都懂，由里向外content,padding,border,margin。\n盒模型是有两种标准的，一个是标准模型，一个是IE模型。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(353),alt:""}}),t._v(" "),n("img",{attrs:{src:a(354),alt:""}}),t._v("\n标准模型和IE模型的区别")]),t._v(" "),n("ul",[n("li",[t._v("计算高度和宽度的不同\n盒模型的宽高只是内容（content）的宽高，\n而在IE模型中盒模型的宽高是内容(content)+填充(padding)+边框(border)的总宽高。")])]),t._v(" "),n("h3",{attrs:{id:"css-盒模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-盒模型"}},[t._v("#")]),t._v(" css 盒模型")]),t._v(" "),n("p",[t._v("css 如何设置这两种模型\ncss3的box-sizing属性")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 浏览器默认 标准模型\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" IE模型\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("h3",{attrs:{id:"js如何设置获取盒模型对应的宽和高"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js如何设置获取盒模型对应的宽和高"}},[t._v("#")]),t._v(" js如何设置获取盒模型对应的宽和高")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("\tdom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只能取内联样式的宽和高")]),t._v("\n\tdom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器渲染以后获取的宽和高 只支持IE")]),t._v("\n\twindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兼容性更好")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通用性更好")]),t._v("\n\tdom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算一个元素的绝对位置， 这个绝对位置是根据视窗左侧开始")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("h3",{attrs:{id:"实例题-根据盒模型解决边距重叠"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例题-根据盒模型解决边距重叠"}},[t._v("#")]),t._v(" 实例题 根据盒模型解决边距重叠")]),t._v(" "),n("p",[n("img",{attrs:{src:a(355),alt:""}})]),t._v(" "),n("p",[t._v("子元素100px高度 设置margin-top:10px; 这时父元素的实际高度是？\n100和110都对，要看盒模型\n标准100 ie110")]),t._v(" "),n("h3",{attrs:{id:"什么是边距重叠"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是边距重叠"}},[t._v("#")]),t._v(" 什么是边距重叠")]),t._v(" "),n("p",[t._v("父元素没有设置margin-top，而子元素设置了margin-top：20px;可以看出，父元素也一起有了边距")]),t._v(" "),n("h3",{attrs:{id:"解决边距重叠的方案bfc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决边距重叠的方案bfc"}},[t._v("#")]),t._v(" 解决边距重叠的方案BFC")]),t._v(" "),n("p",[t._v("父子元素边距重叠，给父元素加overflow：hidden创建BFC")]),t._v(" "),n("h4",{attrs:{id:"bfc-概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfc-概念"}},[t._v("#")]),t._v(" BFC 概念")]),t._v(" "),n("p",[t._v("块级格式化上下文")]),t._v(" "),n("h3",{attrs:{id:"bfc-原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfc-原理"}},[t._v("#")]),t._v(" BFC 原理")]),t._v(" "),n("ol",[n("li",[t._v("在BFC这个元素垂直方向边距会发生重叠")]),t._v(" "),n("li",[t._v("BFC的区域不会与浮动的元素的box重叠 应用清除浮动")]),t._v(" "),n("li",[t._v("BFC在页面中是一个独立的容器，里面和外面的元素不会互相影响")]),t._v(" "),n("li",[t._v("计算BFC高度的时候，浮动元素也会参与计算")])]),t._v(" "),n("h3",{attrs:{id:"怎么创建bfc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#怎么创建bfc"}},[t._v("#")]),t._v(" 怎么创建BFC")]),t._v(" "),n("ul",[n("li",[t._v("float属性不为none（脱离文档流）")]),t._v(" "),n("li",[t._v("position的值只要不是static和relative, 设置为为absolute或fixed")]),t._v(" "),n("li",[t._v("display为inline-block,table-cell,table-caption,flex,inine-flex")]),t._v(" "),n("li",[t._v("overflow不为visible")]),t._v(" "),n("li",[t._v("根元素")])])])}),[],!1,null,null,null);s.default=e.exports}}]);