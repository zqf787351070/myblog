(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1210:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_1-概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[s._v("#")]),s._v(" 1. 概述")]),s._v(" "),n("p",[s._v("SpringMVC的处理器拦截器类似于Servlet开发中的过滤器Filter，用于对处理器进行预处理和后处理。开发者可以自定义一些拦截器来实现特定的功能。")]),s._v(" "),n("p",[s._v("过滤器与拦截器的区别：拦截器是AOP思想的具体应用")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("过滤器")]),s._v(" "),n("ul",[n("li",[s._v("servlet规范中的一部分，任何java web工程都可以使用")]),s._v(" "),n("li",[s._v("在utl-pattern中配置了/*之后，可以对所有要访问的资源进行拦截")])])]),s._v(" "),n("li",[n("p",[s._v("拦截器")]),s._v(" "),n("ul",[n("li",[s._v("拦截器是SpringMVC框架自己的，只有使用MVC框架的工程才能使用")]),s._v(" "),n("li",[s._v("拦截器只会拦截访问的控制器方法，如果访问的是jsp/html/css/image/js是不会进行拦截的")])])])]),s._v(" "),n("h1",{attrs:{id:"_2-自定义拦截器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-自定义拦截器"}},[s._v("#")]),s._v(" 2. 自定义拦截器")]),s._v(" "),n("ol",[n("li",[s._v("创建新的Moudule，添加web支持，配置web.xml和springmvc配置文件")]),s._v(" "),n("li",[s._v("编写一个拦截器")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zqf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Interceptor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("servlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HandlerInterceptor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("servlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ModelAndView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("javax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("servlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("javax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("servlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletResponse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Interceptor")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HandlerInterceptor")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在请求处理方法前执行，若返回true则执行下一个拦截器，返回false则不执行下一个拦截器")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("preHandle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletRequest")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletResponse")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"=====处理前====="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在请求处理方法之后执行")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("postHandle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletRequest")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletResponse")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ModelAndView")]),s._v(" modelAndView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"=====处理后====="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在dispatcherServlet处理后执行，做清理工作")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("afterCompletion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletRequest")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletResponse")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" ex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"=====执行清理====="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("在springmvc配置文件中配置拦截器")])]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--配置拦截器--\x3e")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("mvc:")]),s._v("interceptors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("mvc:")]),s._v("interceptor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--/**包括拦截包括路径及其子路径--\x3e")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("mvc:")]),s._v("mapping")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("/**"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--bean配置的就是拦截器--\x3e")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("bean")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("com.zqf.Interceptor.Interceptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("mvc:")]),s._v("interceptor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("mvc:")]),s._v("interceptors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("编写Controller接收请求")])]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Controller")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InterceptorController")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/interceptor"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ResponseBody")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("testInterceptor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"控制器方法执行！"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"拦截器测试"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[s._v("前端页面")])]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("a")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("${pageContext.request.contextPath}/interceptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("拦截器测试"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"6"}},[n("li",[s._v("启动Tomcat执行测试")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(962),alt:"01910e8a3733c9731d47eb8bfca325f6.png"}})])])}),[],!1,null,null,null);t.default=e.exports},962:function(s,t){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAACNCAYAAAC36c/qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABE6SURBVHhe7Z0xltu8DoXfepwyTXbgNjtwn5PeC0jvNguYXcy/OD9eQLAhiqRIWTOxB7f4zowlmaJk4gKEJOh/3759uxJC4kIRICQ4FAFCgkMRICQ4FAFCgkMRICQ4FAFCgkMRICQ4FAFCgkMRICQ4FAFCgkMRICQ4FIFBDofj9Xy5XE/HQ3H98Xy5Xs6n6/FQXv8ZHI6n67nSh8PhdL28nav9J/GgCAwiRvT+fn07H4vrj+e36/vlPCwCEBd853A8Xy/p+6fTqcj58lbdt0f68ZbEKuuHLqcIkDsUgUFgpG/vb9dzNRKACJyK64xj8tRz406G//YuxnlE+/g7Ge/hdJm1d7q8Xy+ndQM2sfLbqsDMIwSIz+m0Lirk60IRGMQ8ac3T94iAIVOLt7mgiMgMisBSVJTz+Xw9+89pGuM/A4jPf//91xVdkK8JRWAQGOHbLFy/pMjgPj34FyJAyCNQBAbQELtgtGnZZQqpNVJInxvJQ6MuAs5jT5GHic45ee69ROB0Sf1kBBAeisAAuZeWZfDU7/cEnEUCauCY59fFwIsA/ke7WyMBaQtGbeIhnKe8gBq6CYz1R9qiCIRnkwj8+PVX5pEt/v768WW2N0r5ABiSN1I/HYBhyvoserjP4ZEQhDfeJzGYr9PI5S5QucDU2or6+0Zlkwh8//n7+ufPnya/f37/MtsD9drJoJBsmwxal80NKc8J2DalxJuu2286sJcIRPx9I8PpQCfwyDBkGJKF0GJUzshALgK6nYb6fpksr4pAKxKYb++BUb+dLcoA8/71igCJBUWgAzHW6QYgNVw1rJLBl5bVKIlATi4CLfaKBEgsOB2o4Lc/JI/qDRWGDo9bCs0/WgRqUQXYSwSi/b7RYWKwQitxpMaFhN98KgA2icDpmOb++szBPZSfQHvJcO/h/TwR6YFR7zEdiP77RoPTgY3AgErPCPSKgD7kgxuNcHWg/sARpwPko6EIbADJOdw1WLoPAOG63zYH3l8EZMX4DYoA+WgoAoOoAKjxikEnz4/wEmKAx3dPmLM35vhA5vUr2xglEajlBdZEIIciQABFoBOZv8sdeYXr/ckoMafHfD2fexqYq7e8fu0hoPw+gVtewHl0w4xaxSlFKqm/ed7imL5vDw3lNzGRmFAEOoDh1Ip0lDhCFCaDxTMECPtL2+3JLcnojFqvYpSnJ3xugBgUAUKCQxEgJDgUAUKCQxEgJDgUAUKCQxEgJDgUAUKCQxEgJDgUAUKCQxEgJDgUAUKCQxEgJDgUAUKCQxEgJDgPiYAUrZDKOoVn7A/H63Hj227RLqr79rw+G0U3rMhHvu6Y1+3DM/+zqsGo73dfX6sX0ML20fuY8QioBCSvKR945h/9KZ0PFEvd2k85xs7zgseoS8vJ8/K4CMh7+MoDS8pZyfqxgbFWEcfTKr+V1/uTbadyYCoC88o6KMox+nZea6dU5KOFfg8vGanvz87fSOGPWo1Df+z5uhb6W9zPi4q7E1ZPElEtoEIheCV2EQE/SGWQOGPQwbduIN777yUC+Trfl5oIbCm3pcZa7y+MpnT8a0Yu60fFpXI+en+HHCmnlhk1zp3/PIKddxGkwb6Qj2F/EUiDbRaCL0hhafIseXTgB3wuAr54pwyiNDDNg9YGfWmdN4ReEcB2Vc93A5WHfAkwx+Qd0Y/cAH0fZD+ZGDwqArPz5o7dlq3Rqky0Ff1ttdDqSIRDPo5hEZgbhXqyC+ah+JuWrb5MYxrYeVgqAw6RgGtX5+tau8+Ho34fLRGQ0Bj7sv5On70I+Dr9uSj0sGUKUQJzduRWbn2V/qZjlymDLVMB9fub/x74znTM8pvcxTYXFHxulRfTHII/5zsd59QWReB52DUSgEHevTkG9HLQlEJjHRhugBamA+bVdNsBEcgiASkVngaztIOIIomARRUwnNE586gIyHnJEnS2zG8nyzsjAXz/9r87H3i3AWocIkrRoqMQbBj39LnSNr7nfztpE79H57lpJQf194MIcDrwLOw+HTDEAMWbJ0HAizZkvr8cHBgUiyz+LBIAUzSQBrcOoj4RKHHrl+uzRQwwCDHIzsFuA3o0ehDjTMdg35PXnBXaeHQ6MFuetYVj7hEvC99lypJHKiWm6U+rbQhnTYDI5/MhIiAeN8tE3zxAIUONdfPPaLfsKXpEQD1ZiUlMZoIzLU+DEv+jHLd4zA7DvonAoj2IXnug+36fkkCWtquJAPbb0y7KmM9yJ66t3ghGtmuIbMsR1PCiW1pPPpddREBCTMvsY65ZG9Q3IWgPgEdFAOTt2779wFcPvG4INcRIK/1cMx5DzlfqU/G9A4ucAEjbN86hGnv6TdI0YCbC2XlC/9aETqKF1FbzCsZWEeg4N+Rz2CwCEhpOoZ8lkKQ+f8OoxINhEBcGANq6e9RsOiDzVx3UvSLgse+UPJ/eXKMClq9bI/eut+WT4PREEyfM2Sv7NiFpCaYxe6nIdD7QD3kJSfpN8vB/TQRwbLLvSjRy226DCEjbhd+C/BuGRUDnsxYyp4GXDYDqm3QS6sHqntMGZR4JeEMfFYEjBpzbvoR449Q387pIbPUYnhhpYTBr/9dFQCKJSt81ykAbbWOxfeG8wthL58Pa8oJS6zuQ82HnG9/dWwRSm6UcCPk3bIoELMO/NgBGBsjeIqCeUSOIW0Qhl830u/je/ZIkcJ40bdNnfGVBWz0vEJkE8gY1oWgZaY60VzhXt/VTfy6IqOTYDovI4L6t9u32+QNEgDwXH5IY7F3v2UsELIMtIpUNYP+5NLh9H9aoGRGQtisCoev1noTaZTIVqLkhH6ew3i8rURQBt0zm4+m4cT+B73/p0i3YWwSwveaF6tMg8rm8nAgAf2ddadDf1n2QCKwaBvrUWA9qbbTaRm5kLUeQn4+FaKbPuAdgdi6wTeE+Bdl+7VhHRQDtpanJ2mVE8nn8ExGAt/afQUkEzgjR8UJPeI6aoa+KQD4dUHFZrEvkVw9KSN9Wcgw92e+SUEi+pXJlRfIUlo9pCEF+PlphP8QB5xznonb34JqgDYuA7JeRwDOxmwioh7kblALVTwPNX0dPhiheIDMSeDkbFCYCYqwYNLjc1TnoZ+syL6ZeyIvAfHBDiFoiYIbjB68dt0UnNsjXxAT78saF44CHxJxdLssJSQCTKIhQiQhM/ZaE4b0PHn8+xLgr5wZoW5orqPW3JAI4RhUlkPYxIALk+diYGJw89JRo2nsAeBEork+DD2ICj+wviS23S97dDW69iUg/i9Gl7/nBjeOqXSo0L11aL0KQPC76YonFtXOifbvv3wQGgpk/SJSDy4r+3Mj+YcjT+YBBa3/rEYNxE5+Kt6+KwCyRWv+tyPPzUCSgt/u2Pd4WIAL+WYIaIhbJW370AMSA70nKSeiN/uwsir2o50/nLRO/NdSoE0URSG3WogQIV+M+B/IaPCQChJDXhyJASHAoAoQEhyJASHAoAoQEhyJASHAoAoQEhyJASHAoAoQEhyJASHAoAoQEhyJASHAoAoQEhyJASHAoAoQEhyIwiD1DX6sZYK9UW6uF8K+RmgNSiGS9bgP52lAEBtGqR/XyYVpfcNywpLBH+o4VBrmXaJsjhtso8oHiIItlyeBR6g3iJaXEpGzZRSobSbssChIaisAgVpevVk2np8jo8gUtWqpLynihfeedfc1A0KqILFEKSpS5tq0WYGl7QgBFYBAx8kYI3SMChhmtFxQRmQdFgOW+yAgUgUGkIvEsXNdCnRaiv5oI4DtrhU3J14YiMIDmAwpGm5bZa8s0UkAZ7/WCo3UR8O9K0MjDRAflzFenA77E+woyDUG1YApBWCgCA+ReWpbBU7uS2xYJqEFinl83MC8C4pFTG5wOkM9mkwj8+PX3VmO/xt9fP77M9kYpHwCj9EbqpwMwSlmfRQ/3xCASgvDc+yYGHxWBqL9vVDaJwPefv69//vxp8vvn9y+zPVADS14dLwadjEyXzY0yzwnYNqXLeiWj3WM68KgIRPx9I8PpQCfwyPpmn/vLOMRgs7fv5CKg22mo75fJ8qoItCKBupH7nIX938oPIPrIXwdH4kER6ECMdboBSA1XDb9k8KVlNXo8dy4CLdTwtW+lJOZ8W+y7HlWQOHA6UMFvj1dxeWOCob8lD1syoo8WgVpUoevuUcRa2y0RiPb7RoeJwQqtxJF62enSWmaQm0TgNL1gtRS6o71bTgDTj3kictaeE4xHRCD67xsNTgc2olcF7nN3o1cE9K3EuNFI5+1V7z4wHUC+wIz6EREgsaAIbEBeA54EAEaU3weAcN1vmwPjs8uGPU8b9oqARCc+oUgRIJ1QBAZRAVDjFYNOnh/hJcRAnsqTB3ZWDLtjG6MkAqW8AB5h9ga/fnVA702gCBCKQCfiOSXcLlzvT0aJOT3m6/nc00AiseX1l08WTsxyAmDKC3iv7y5bGrw6QHqhCHRwxNWBjtDdwKO7ZrB4hgDeuLTdHmg0smwfInCeIpZ8ncFHjAmgCBASHIoAIcGhCBASHIoAIcGhCBASHIoAIcGhCBASHIoAIcGhCBASHIoAIcGhCBASHIoAIcGhCBASHIoAIcGhCAyC4h1WVMQvRzHSnkpBJdBmqU5Bidrjv60CpEat7yQ2FIFBajUEpQJQVmqsBytaai8nQX2A462ASMZFqxiVX2SC8mLloieGVkmer+8RDyD9SttJAZPZC1nnoPBKqX/keaEIDFKr+acisCw8uoaUK1tUBdpmRNKHqZqQVDsqGejMgJdVisCyypGWIpPtVl+OwmpFrwZFYBA/6GFos+WDIlDyzI8gJcMKFZCNfH++/yWkvaxY6fobkigCrwZFYIVFeG41/6aaghZ+L4yjUPfPozmE6btibOX3FT5CHg3MIwHtf+s1ZBSBGFAEOoAx3P6fRQJpHn5BleGzGJiWEYdxT58rkQG+d3Jzd2kTLzLpzCf45KAYauqD/y5Eq7TfWuRRTTZWRWDbC1PJc0IRGCT3fLflmYfsDfUtMQjDKc3jFyRxyZODsm9rA4aLqxSF7y5zAokU0dSTjXcRwP84NkYCX49NIhD5NVV+0COBhleI3ZY744Ax9IiAbFcQFWOtdLiBdtAvGOn5QSO8JwaREJyimwcSg5HHyyuwSQQiv7BSjT0ZRhaCb/GIEi2ktvAqspqR94qATDHSNkdMRVa27WWv6UDk8fIKcDrQCd49AG8I1Tdjh5GcYHQpGsjD/zURgGjIjTuZZ11s1ykCQIzWXR3QfWThv0fyFvVcRF0EWpFAX1/J80ARWMHm7PKasWTs+aCXbWAYU6a9ZzqA7S8mJHuKgGtXPqOv3mvnwItnx+IpiUBO6XyQ14LTgQp+eyTsap5Plk2GeoFnxd8UAdQSgzCsWXZ/RxHAPn30oSLQaHvFgLeIgD9XRrTx8mowMVihlugpioBbBkOUOXImArXLdo+KAAxVvTqu+8+3200EUgSE9osvN7Xjlc8aEeVtRh4vrwCnA4MsPF/mLdUo07TBGbdsU3kf4R6RgOwTxoh7DVw7KgLbpgNINJ4nYWk9GLUmJOT5oQgMkg/6VtgPcUB4LnP1Wn5ADPUxEQAlMVltu2DAIii43Lhi/AZF4PWhCAziB70Yd8MAxDBhTLhJZ0AEYIjIGyhpHx0iYNOQR0VAlst+2/szSm2U8gLkeaEIdKDeMRly8uyY/8Gg9ZbhPk8p8+SKMVZFwF+SzML8EuK9O0RA7ifAzT94ZTpuAGqImGf5ZOHELCcAprxA5XjJ80ERGEA9fxrcMl8ue/YSatRl7+gfJFqsS9/DcwFrUQDQW47n7YgANXMRfW2Trw1FgJDgUAQICQ5FgJDgUAQICQ5FgJDgUAQICQ5FgJDgUAQICQ5FgJDgUAQICQ5FgJDgUAQICQ5FgJDgUAQICc236/8BSZ7A3J5xia0AAAAASUVORK5CYII="}}]);