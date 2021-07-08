(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1119:function(s,t,a){"use strict";a.r(t);var n=a(6),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_1-事务的基本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-事务的基本介绍"}},[s._v("#")]),s._v(" 1. 事务的基本介绍")]),s._v(" "),a("h2",{attrs:{id:"_1-1-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-概念"}},[s._v("#")]),s._v(" 1.1 概念")]),s._v(" "),a("p",[s._v("如果一个包含多个步骤的业务操作被事务管理，那么这些操作要么同时成功，要么同时失败。")]),s._v(" "),a("h2",{attrs:{id:"_1-2-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-操作"}},[s._v("#")]),s._v(" 1.2 操作")]),s._v(" "),a("ul",[a("li",[s._v("开启事务："),a("strong",[a("code",[s._v("start transaction;")])])]),s._v(" "),a("li",[s._v("回滚："),a("strong",[a("code",[s._v("rollback;")])])]),s._v(" "),a("li",[s._v("提交："),a("strong",[a("code",[s._v("commit;")])])])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\tid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tNAME "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tbalance "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DOUBLE")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 添加数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" balance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zhangsan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lisi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t\t\t\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 张三给李四转账 500 元")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 0. 开启事务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 1. 张三账户 -500")]),s._v("\n\t\t\t\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zhangsan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 2. 李四账户 +500")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 出错了...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" NAME "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lisi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 发现执行没有问题，提交事务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 发现出问题了，回滚事务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h2",{attrs:{id:"_1-3-事务的提交方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-事务的提交方式"}},[s._v("#")]),s._v(" 1.3 事务的提交方式")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("自动提交：")]),s._v(" "),a("ul",[a("li",[s._v("MySQL数据库就是自动提交的")]),s._v(" "),a("li",[s._v("一条DML(增删改)语句就会自动提交一次事务")])])]),s._v(" "),a("li",[a("p",[s._v("手动提交：")]),s._v(" "),a("ul",[a("li",[s._v("Oracle数据库默认手动提交事务")]),s._v(" "),a("li",[s._v("需要先开启事务，再提交")])])]),s._v(" "),a("li",[a("p",[s._v("查看谁的默认提交方式："),a("strong",[a("code",[s._v("SELECT @@autocommit;")])]),s._v(" -- 1 代表自动提交 0 代表手动提交")])]),s._v(" "),a("li",[a("p",[s._v("修改默认提交方式："),a("strong",[a("code",[s._v("set @@autocommit = 0;")])])])])]),s._v(" "),a("h1",{attrs:{id:"_2-事务的四大特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-事务的四大特征"}},[s._v("#")]),s._v(" 2. 事务的四大特征")]),s._v(" "),a("ul",[a("li",[s._v("原子性：是不可分割的最小单位，要么同时成功，要么同时失败。")]),s._v(" "),a("li",[s._v("持久性：当事务提交或者回滚后，数据库会持久化的保存数据。")]),s._v(" "),a("li",[s._v("隔离性：多个事务之间相互独立。")]),s._v(" "),a("li",[s._v("一致性：事务操作前后，数据总量不变。")])]),s._v(" "),a("h1",{attrs:{id:"_3-事务的隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-事务的隔离级别"}},[s._v("#")]),s._v(" 3. 事务的隔离级别")]),s._v(" "),a("h2",{attrs:{id:"_2-1-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-概念"}},[s._v("#")]),s._v(" 2.1 概念")]),s._v(" "),a("p",[s._v("多个事务之间是隔离的。相互独立的。但是如果多个事务操作同一批数据，则会引发一些问题，设置不同的隔离界别就可以解决这些问题。")]),s._v(" "),a("h2",{attrs:{id:"_2-2-存在问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-存在问题"}},[s._v("#")]),s._v(" 2.2 存在问题")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("脏读")]),s._v("：一个事物读取到另一个事物中没有提交的数据。")]),s._v(" "),a("li",[a("strong",[s._v("不可重复读(虚读)")]),s._v("：在同一个事务中，两次读取到的数据不一样。")]),s._v(" "),a("li",[a("strong",[s._v("幻读")]),s._v("：一个事物操作(DML)数据表中的所有记录，另一个事物添加了一条数据，则第一个事物查询不到自己的修改。")])]),s._v(" "),a("h2",{attrs:{id:"_2-3-隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-隔离级别"}},[s._v("#")]),s._v(" 2.3 隔离级别")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("read uncommitted：读未提交")]),s._v("\n产生的问题：脏读、不可重复读、幻读")]),s._v(" "),a("li",[a("strong",[s._v("read committed：读已提交")]),s._v("\n产生的问题：不可重复读、幻读")]),s._v(" "),a("li",[a("strong",[s._v("repeatable read：可重复读")]),s._v("\n产生的问题：幻读")]),s._v(" "),a("li",[a("strong",[s._v("serializable：串行化")])])]),s._v(" "),a("p",[s._v("可以解决所有问题\n注意：隔离级别从小到大安全性越来越高，但是效率越来越低")]),s._v(" "),a("h2",{attrs:{id:"_2-4-隔离级别的设置与查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-隔离级别的设置与查询"}},[s._v("#")]),s._v(" 2.4 隔离级别的设置与查询")]),s._v(" "),a("ul",[a("li",[s._v("数据库查询隔离级别："),a("strong",[a("code",[s._v("select @@tx_isolation;")])])]),s._v(" "),a("li",[s._v("数据库设置隔离级别："),a("strong",[a("code",[s._v("set global transaction isolation level 级别字符串;")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);