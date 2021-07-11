(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1091:function(s,a,t){"use strict";t.r(a);var e=t(6),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_1-mybatis-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-mybatis-是什么"}},[s._v("#")]),s._v(" 1. MyBatis 是什么？")]),s._v(" "),t("p",[s._v("MyBatis 是一个"),t("strong",[s._v("半ORM（对象关系映射）框架")]),s._v("，其内部封装了 JDBC，开发是只需要关注 SQL 语句本身，不需要花费精力去处理加载驱动、创建连接、创建 statement 等复杂的过程。")]),s._v(" "),t("p",[s._v("通过直接编写原生态 SQL，可以严格控制 SQL 语句的执行性能，"),t("strong",[s._v("支持动态 SQL")]),s._v("，灵活度高。")]),s._v(" "),t("p",[s._v("MyBatis "),t("strong",[s._v("使用 XML 或注解来配置和映射原生信息")]),s._v("，将实体类映射成数据库中的记录，避免了 JDBC 代码手动设置参数以及获取结果集的繁琐步骤。")]),s._v(" "),t("p",[s._v("MyBatis "),t("strong",[s._v("通过 XML 或注解将要执行的各种 statement 进行配置")]),s._v("，通过 Java 对象和 statement 中的动态参数进行映射并最终形成执行的 SQL 语句。最后由 MyBatis 框架执行 SQL 语句，并将结果映射为 Java 对象返回。")]),s._v(" "),t("h2",{attrs:{id:"mybatis-的优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-的优缺点"}},[s._v("#")]),s._v(" MyBatis 的优缺点")]),s._v(" "),t("p",[s._v("优点：")]),s._v(" "),t("ul",[t("li",[s._v("基于 SQL 语句编程，十分灵活；SQL 语句写在 XML 文件中，解除 SQL 与业务代码的耦合，便于统一管理；提供 XML 标签，支持编写动态 SQL ，可重用")]),s._v(" "),t("li",[s._v("与 JDBC 相比，消除了大量冗余的代码，不需要手动开关连接")]),s._v(" "),t("li",[s._v("可以很好的与各种数据库兼容")]),s._v(" "),t("li",[s._v("可以很好地与 Spring 集成")])]),s._v(" "),t("p",[s._v("缺点：")]),s._v(" "),t("ul",[t("li",[s._v("SQL 编写工作量大，对开发人员的 SQL 功底有一定要求")]),s._v(" "),t("li",[s._v("SQL 语句依赖数据库，故数据库移植性差，不能随意更换")])]),s._v(" "),t("h2",{attrs:{id:"mybatis-和-hibernate-的对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-和-hibernate-的对比"}},[s._v("#")]),s._v(" MyBatis 和 Hibernate 的对比")]),s._v(" "),t("p",[s._v("针对简单逻辑，Hibernate 和 MyBatis 都有相应的代码生成工具，可以生成简单基本的 DAO 层方法。")]),s._v(" "),t("p",[s._v("针对高级查询，Mybatis 需要手动编写 SQL 语句，以及 ResultMap；而 Hibernate 有良好的映射机制，开发者无需关心 SQL 的生成与结果映射，可以更专注于业务流程。Hibernate 也可以自己写 SQL 来指定需要查询的字段，但这样就破坏了 Hibernate 开发的简洁性。")]),s._v(" "),t("p",[s._v("举个形象的比喻：")]),s._v(" "),t("ul",[t("li",[s._v("Mybatis：机械工具，使用方便，拿来就用，但工作还是要自己来作，不过工具是活的，怎么使由我决定。")]),s._v(" "),t("li",[s._v("Hibernate：智能机器人，但研发它（学习、熟练度）的成本很高，工作都可以摆脱他了，但仅限于它能做的事。")])]),s._v(" "),t("h1",{attrs:{id:"_2-mybatis-的核心组件有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-mybatis-的核心组件有哪些"}},[s._v("#")]),s._v(" 2. MyBatis 的核心组件有哪些？")]),s._v(" "),t("p",[s._v("MyBatis 核心组件包括 "),t("strong",[s._v("SqlSessionFactoryBuilder / SqlSessionFactory / SqlSession / Mapper")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"sqlsessionfactorybuilder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqlsessionfactorybuilder"}},[s._v("#")]),s._v(" SqlSessionFactoryBuilder")]),s._v(" "),t("p",[s._v("SqlSessionFactoryBuilder 是一个构建器，用于构建 SqlSessionFactory。其生命周期一般只存在于方法的局部，用完即可收回。")]),s._v(" "),t("p",[s._v("构建语句：\n"),t("code",[s._v("SqlSessionFactory factory = SqlSessionFactoryBuilder.build(inputStream);")])]),s._v(" "),t("h2",{attrs:{id:"sqlsessionfactory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqlsessionfactory"}},[s._v("#")]),s._v(" SqlSessionFactory")]),s._v(" "),t("p",[s._v("SqlSessionFactory 用于创建 SqlSession，即创建一个对话。")]),s._v(" "),t("p",[s._v("每次程序访问数据库，都需要使用 SqlSession，所以 SqlSessionFactory 应该存在于 MyBatis 应用的整个生命周期中。")]),s._v(" "),t("p",[s._v("为了减少创建会话带来的资源消耗，一般使用单例模式创建 SqlSession。")]),s._v(" "),t("p",[s._v("创建语句：\n"),t("code",[s._v("SqlSession sqlSession = SqlSessionFactory.openSession();")])]),s._v(" "),t("h2",{attrs:{id:"sqlsession"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqlsession"}},[s._v("#")]),s._v(" SqlSession")]),s._v(" "),t("p",[s._v("SqlSession 就是一个对话，既可以发送 SQL 语句去执行返回结果，也可以代理 Mapper 接口。")]),s._v(" "),t("p",[s._v("SqlSession 是一个线程不安全的对象，其生命周期应该在请求数据库处理事务的过程中。")]),s._v(" "),t("p",[s._v("每次创建的 SqlSession 对象应该及时关闭，否则会使得数据库连接池的活动资源变少，影响系统性能。")]),s._v(" "),t("h2",{attrs:{id:"mapper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapper"}},[s._v("#")]),s._v(" Mapper")]),s._v(" "),t("p",[s._v("Mapper 用于 MyBatis 代理 DAO，通过注解和 XML 文件可以获取对应的 SQL 和映射规则。")]),s._v(" "),t("p",[s._v("使用语句：\n"),t("code",[s._v("XXMapper xxMapper = sqlSession.getMapper(XXMapper.class);")])]),s._v(" "),t("h1",{attrs:{id:"_3-mybatis-的动态-sql-有了解么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-mybatis-的动态-sql-有了解么"}},[s._v("#")]),s._v(" 3. MyBatis 的动态 SQL 有了解么？")]),s._v(" "),t("p",[s._v("MyBatis 可以在 xml 映射文件中以标签的形式实现动态 SQL，其原理是"),t("strong",[s._v("根据表达式的值完成逻辑判断并动态拼接 SQL 语句")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"动态-sql-标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态-sql-标签"}},[s._v("#")]),s._v(" 动态 SQL 标签")]),s._v(" "),t("ul",[t("li",[s._v("if：单条件分支的判断语句")]),s._v(" "),t("li",[s._v("choose, when, otherwise：多条件的分支判断语句")]),s._v(" "),t("li",[s._v("foreach：列举条件，遍历集合，实现循环语句")]),s._v(" "),t("li",[s._v("trim,where,set：是一些辅助元素，可以对拼接的SQL进行处理")]),s._v(" "),t("li",[s._v("bind：进行模糊匹配查询的时候使用，提高数据库的可移植性")])]),s._v(" "),t("h1",{attrs:{id:"_4-mybatis-的-mapper-中常用标签有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-mybatis-的-mapper-中常用标签有哪些"}},[s._v("#")]),s._v(" 4. Mybatis 的 Mapper 中常用标签有哪些？")]),s._v(" "),t("ul",[t("li",[s._v("| select | insert | update | delete |")]),s._v(" "),t("li",[s._v("| resultMap | resultType |")]),s._v(" "),t("li",[s._v("| where | if | foreach | sql |")])]),s._v(" "),t("h1",{attrs:{id:"_5-mybatis-的-dao-接口的工作原理有了解么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-mybatis-的-dao-接口的工作原理有了解么"}},[s._v("#")]),s._v(" 5. MyBatis 的 DAO 接口的工作原理有了解么？")]),s._v(" "),t("p",[t("strong",[s._v("DAO 接口即 Mapper 接口")]),s._v("。接口的全限名就是映射文件中 namespace 的值；接口的方法名，就是映射文件中的 id 值；接口方法内的参数，就是传递给 SQL 的参数。")]),s._v(" "),t("p",[s._v("Mapper 接口没有实现类，调用接口方法的时候，使用接口"),t("strong",[s._v("全限名 + 方法名")]),s._v("拼接字符串作为 key 值，可"),t("strong",[s._v("唯一定位一个 MapperStatement")]),s._v("。在 MyBatis 中，每一个"),t("code",[s._v("<select>、<insert>、<update>、<delete>")]),s._v("标签，都会被解析为一个 "),t("strong",[s._v("MapperStatement对象")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("Mapper 接口的工作原理是 JDK 动态代理")]),s._v("，MyBatis 运行时会使用 JDK 动态代理为 Mapper 接口生成代理对象 proxy，代理对象会拦截接口方法，转而执行 MapperStatement 所代表的 SQL，然后将 SQL 执行结果返回。")]),s._v(" "),t("h2",{attrs:{id:"dao-接口中的方法可以重载么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dao-接口中的方法可以重载么"}},[s._v("#")]),s._v(" DAO 接口中的方法可以重载么？")]),s._v(" "),t("p",[s._v("不可以。因为 xml 文件中使用的是"),t("strong",[s._v("全限名 + 方法名")]),s._v("的保存和寻找策略。")]),s._v(" "),t("h2",{attrs:{id:"不同映射文件-xml-中的-id-可以重复么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同映射文件-xml-中的-id-可以重复么"}},[s._v("#")]),s._v(" 不同映射文件 xml 中的 id 可以重复么？")]),s._v(" "),t("p",[s._v("如果配置了 namesapce，那么 id 可以重复； 如果没有配置，则不可以重复。")]),s._v(" "),t("h1",{attrs:{id:"_6-mybatis-中-和-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-mybatis-中-和-的区别"}},[s._v("#")]),s._v(" 6. MyBatis 中 # 和 $ 的区别")]),s._v(" "),t("p",[t("strong",[s._v("能用 # 就尽量不用 $")])]),s._v(" "),t("ul",[t("li",[s._v("# 是预编译处理，是占位符；$ 是字符串替换，是拼接符")]),s._v(" "),t("li",[s._v("Mybatis 在处理 # 时，会将 sql 中的 # 替换为 ？，并调用 PreparedStatement 来赋值；在处理 $ 是，就是把 $ 替换成变量的值，调用 Statement 来赋值")]),s._v(" "),t("li",[s._v("# 变量替换替换后，对应的变量会自定添加单引号；$ 变量替换后，对应变量不会添加单引号")]),s._v(" "),t("li",[s._v("使用 # 可以有效防止 SQL 注入，提高系统安全性")])]),s._v(" "),t("h1",{attrs:{id:"_7-mybatis-的缓存机制有了解么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-mybatis-的缓存机制有了解么"}},[s._v("#")]),s._v(" 7. MyBatis 的缓存机制有了解么？")]),s._v(" "),t("p",[s._v("分为一级缓存和二级缓存。")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("一级缓存（同一个SqlSession）")]),s._v("\n基于 HashMap 的本地缓存，其存储作用域为 Session，当 Session flush 或 close 之后，该 Session 中的所有缓存就将清空，默认打开一级缓存。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("二级缓存（同一个SqlSessionFactory）")]),s._v("\n二级缓存与一级缓存其机制相同，默认也是采用 HashMap 的本地存储，不同在于其存储作用域为 Mapper(Namespace)，并且可自定义存储源。")])])]),s._v(" "),t("h1",{attrs:{id:"_8-mybatis-的接口绑定是什么-有哪些方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-mybatis-的接口绑定是什么-有哪些方式"}},[s._v("#")]),s._v(" 8. MyBatis 的接口绑定是什么？有哪些方式？")]),s._v(" "),t("p",[s._v("接口绑定即 MyBatis 代理 DAO 接口，将接口里的方法和 xml 映射文件中 SQL 语句绑定。我们在使用的时候直接调用接口方法即可。")]),s._v(" "),t("ul",[t("li",[s._v("注解绑定："),t("code",[s._v("@Select、@Update")])]),s._v(" "),t("li",[s._v("xml 绑定：设置 namespace 为全路径名")])]),s._v(" "),t("h1",{attrs:{id:"_9-mybatis-插件的原理及应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-mybatis-插件的原理及应用"}},[s._v("#")]),s._v(" 9. MyBatis 插件的原理及应用")]),s._v(" "),t("h2",{attrs:{id:"什么是插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是插件"}},[s._v("#")]),s._v(" 什么是插件？")]),s._v(" "),t("p",[s._v("插件是Mybatis中的最重要的功能之一，能够对特定组件的特定方法进行增强。")]),s._v(" "),t("p",[s._v("MyBatis 允许我们在映射语句执行过程中的某一点进行拦截调用。默认情况下，MyBatis 允许使用插件来拦截的方法调用包括：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("「Executor」：update, query, flushStatements, commit, rollback, getTransaction, close, isClosed")])]),s._v(" "),t("li",[t("p",[s._v("「ParameterHandler」: getParameterObject, setParameters")])]),s._v(" "),t("li",[t("p",[s._v("「ResultSetHandler」：handleResultSets, handleOutputParameters")])]),s._v(" "),t("li",[t("p",[s._v("「StatementHandler」: prepare, parameterize, batch, update, query")])])]),s._v(" "),t("h2",{attrs:{id:"如何自定义插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何自定义插件"}},[s._v("#")]),s._v(" 如何自定义插件？")]),s._v(" "),t("p",[s._v("插件的实现其实很简单，只需要实现 Mybatis 提供的 Interceptor 接口即可，源码如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Interceptor")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//拦截的方法")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("intercept")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Invocation")]),s._v(" invocation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Throwable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回拦截器的代理对象")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置一些属性")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setProperties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Properties")]),s._v(" properties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("自定义插件使用的注解：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("@Intercepts")]),s._v("：标注在实现类上，表示这个类是一个插件的实现类。")]),s._v(" "),t("li",[t("code",[s._v("@Signature")]),s._v("：作为"),t("code",[s._v("@Intercepts")]),s._v("的属性，表示需要增强 Mybatis 的某些组件中的某些方法（可以指定多个）。常用的属性如下：\n"),t("ul",[t("li",[t("code",[s._v("Class<?> type()")]),s._v("：指定哪个组件（Executor、ParameterHandler、ResultSetHandler、StatementHandler）")]),s._v(" "),t("li",[t("code",[s._v("String method()")]),s._v("：指定增强组件中的哪个方法，直接写方法名称。")]),s._v(" "),t("li",[t("code",[s._v("Class<?>[] args()")]),s._v("：方法中的参数，必须一一对应，可以写多个；这个属性非常重用，区分重载方法。")])])])]),s._v(" "),t("p",[s._v("完成 Interceptor 接口的实现类后，创建一个配置类，在其中注册该接口实现类的 Bean 并注入 IOC 容器即可。")])])}),[],!1,null,null,null);a.default=r.exports}}]);