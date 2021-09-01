(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1172:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_1-maven仓库中存在jar包却找不到"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-maven仓库中存在jar包却找不到"}},[t._v("#")]),t._v(" 1. maven仓库中存在jar包却找不到")]),t._v(" "),e("p",[t._v("解决方法：")]),t._v(" "),e("ul",[e("li",[t._v("注释掉maven的settings.xml中的本地仓库地址，在idea中配置")]),t._v(" "),e("li",[t._v("在idea的setting中配置maven的仓库地址，如下图")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(952),alt:"d0f7e6440a29ea2d04d8d7d41569ed37.png"}})]),t._v(" "),e("h1",{attrs:{id:"_2-pom-xml配置文件中注意添加jdk版本信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-pom-xml配置文件中注意添加jdk版本信息"}},[t._v("#")]),t._v(" 2. pom.xml配置文件中注意添加jdk版本信息")]),t._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project.build.sourceEncoding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("UTF-8"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project.build.sourceEncoding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maven.compiler.source")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("14"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maven.compiler.source")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("maven.compiler.target")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("14"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("maven.compiler.target")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h1",{attrs:{id:"_3-在项目发布中添加lib依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-在项目发布中添加lib依赖"}},[t._v("#")]),t._v(" 3. 在项目发布中添加lib依赖")]),t._v(" "),e("p",[e("img",{attrs:{src:s(953),alt:"7b9976aacc27af6ca4c1163c59460bd9.png"}})]),t._v(" "),e("h1",{attrs:{id:"_4-配置tomcat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置tomcat"}},[t._v("#")]),t._v(" 4. 配置tomcat")]),t._v(" "),e("p",[e("img",{attrs:{src:s(954),alt:"742e47e480680f4805d0d311320cb0d2.png"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(955),alt:"f77fc5ef061a6a92a82d0ed762a5205c.png"}})]),t._v(" "),e("h1",{attrs:{id:"_5-tomcat控制台中文乱码问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-tomcat控制台中文乱码问题"}},[t._v("#")]),t._v(" 5. tomcat控制台中文乱码问题")]),t._v(" "),e("p",[e("code",[t._v("D:\\Tomcat\\apache-tomcat-9.0.39\\conf")]),t._v("路径下的logging.properties文件")]),t._v(" "),e("p",[t._v("修改其中的")]),t._v(" "),e("p",[e("img",{attrs:{src:s(956),alt:"04006e0e92356ee3a98d02ae1a56fbf2.png"}})])])}),[],!1,null,null,null);a.default=n.exports},952:function(t,a,s){t.exports=s.p+"assets/img/d0f7e6440a29ea2d04d8d7d41569ed37.d0f7e644.png"},953:function(t,a,s){t.exports=s.p+"assets/img/7b9976aacc27af6ca4c1163c59460bd9.7b9976aa.png"},954:function(t,a,s){t.exports=s.p+"assets/img/742e47e480680f4805d0d311320cb0d2.742e47e4.png"},955:function(t,a,s){t.exports=s.p+"assets/img/f77fc5ef061a6a92a82d0ed762a5205c.f77fc5ef.png"},956:function(t,a,s){t.exports=s.p+"assets/img/04006e0e92356ee3a98d02ae1a56fbf2.04006e0e.png"}}]);