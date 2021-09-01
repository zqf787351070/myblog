(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1177:function(e,t,a){"use strict";a.r(t);var s=a(6),_=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_1-查看sql执行频率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看sql执行频率"}},[e._v("#")]),e._v(" 1. 查看SQL执行频率")]),e._v(" "),s("p",[e._v("MySQL 客户端连接成功后，可以通过语句 "),s("strong",[s("code",[e._v("show [session|global] status")])]),e._v(" 命令查看服务器的状态信息。其中 session 显示当前连接的统计结果，global 显示自数据库上次启动至今的统计结果。默认为 session。")]),e._v(" "),s("p",[s("img",{attrs:{src:a(979),alt:"3fa7185cacf81123e87731c9a2fbd5fb.png"}})]),e._v(" "),s("p",[s("img",{attrs:{src:a(980),alt:"b3f86bc8f3efcc6a7a4150c4deb6bdee.png"}})]),e._v(" "),s("p",[e._v("参数具体含义：")]),e._v(" "),s("p",[s("img",{attrs:{src:a(981),alt:"8482c0cdbd69a0693504aa4cf76f98c7.png"}})]),e._v(" "),s("h1",{attrs:{id:"_2-定位低效率执行的sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-定位低效率执行的sql"}},[e._v("#")]),e._v(" 2. 定位低效率执行的SQL")]),e._v(" "),s("p",[e._v("两种方式：")]),e._v(" "),s("ol",[s("li",[e._v("慢查询日志：后续日志部分")]),e._v(" "),s("li",[s("strong",[s("code",[e._v("show processlist")])]),e._v("：慢查询日志在查询结束之后才记录，并不能定位问题。使用"),s("code",[e._v("show processlist")]),e._v("命令查看当前 MySQL 的线程，包括线程的状态、是否锁表等问题，可以实时的查看 SQL 的执行情况。\n"),s("img",{attrs:{src:a(982),alt:"27f3ed5c0cbe64ecd98aad22ec9af46b.png"}})])]),e._v(" "),s("p",[e._v("参数说明：")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("列名")]),e._v(" "),s("th",[e._v("说明")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("id")]),e._v(" "),s("td",[e._v("用户登录时系统分配的id")])]),e._v(" "),s("tr",[s("td",[e._v("user")]),e._v(" "),s("td",[e._v("显示当前用户")])]),e._v(" "),s("tr",[s("td",[e._v("host")]),e._v(" "),s("td",[e._v("显示这个语句是从哪个ip端口上发出的，可以跟踪出现问题语句的用户")])]),e._v(" "),s("tr",[s("td",[e._v("db")]),e._v(" "),s("td",[e._v("显示这个进程连接的数据库")])]),e._v(" "),s("tr",[s("td",[e._v("command")]),e._v(" "),s("td",[e._v("显示当前连接执行的命令，sleep休眠、query查询，connect连接，daemon守护")])]),e._v(" "),s("tr",[s("td",[e._v("time")]),e._v(" "),s("td",[e._v("显示当前状态的持续时间(s)")])]),e._v(" "),s("tr",[s("td",[e._v("state")]),e._v(" "),s("td",[e._v("显示当前连接的sql语句的状态。一个sql语句，需要经过多个状态才能最终完成")])]),e._v(" "),s("tr",[s("td",[e._v("info")]),e._v(" "),s("td",[e._v("显示当前执行的sql语句，这是判断问题语句的重要依据")])])])]),e._v(" "),s("h1",{attrs:{id:"_3-explain分析执行计划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-explain分析执行计划"}},[e._v("#")]),e._v(" 3. explain分析执行计划")]),e._v(" "),s("p",[e._v("通过上一步查询到效率低的SQL语句之后，可以通过 explain 或者 desc 命令获取 MySQL 如何执行 select 语句的信息。")]),e._v(" "),s("p",[s("img",{attrs:{src:a(983),alt:"7e67aececcab41bee2acf86efb133355.png"}})]),e._v(" "),s("h2",{attrs:{id:"_3-1-explain-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-explain-id"}},[e._v("#")]),e._v(" 3.1 explain -- id")]),e._v(" "),s("p",[e._v("id 字段是 select 查询的序列号，是一组数字，表示的是查询中执行 select 子句或者是操作表的顺序。")]),e._v(" "),s("p",[e._v("id 有三种情况：")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("id 相同：表示加载表的顺序是从上到下的")]),e._v(" "),s("img",{attrs:{src:a(984),alt:"0dab54fd1086b85bf6138f81e14a8f87.png"}})]),e._v(" "),s("li",[s("strong",[e._v("id 不同：id 值越大，优先级越高，越先被执行")]),e._v(" "),s("img",{attrs:{src:a(985),alt:"099332f21273c3fe1497492c745765d9.png"}})]),e._v(" "),s("li",[s("strong",[e._v("有相同也有不同：id 相同的可看作是一组，自上而下执行；在所有的组中，id 越大，越先被执行")])])]),e._v(" "),s("h2",{attrs:{id:"_3-2-explain-select-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-explain-select-type"}},[e._v("#")]),e._v(" 3.2 explain -- select_type")]),e._v(" "),s("p",[s("img",{attrs:{src:a(986),alt:"b19d31ecefc8065166e5b32337453173.png"}})]),e._v(" "),s("h2",{attrs:{id:"_3-3-explain-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-explain-table"}},[e._v("#")]),e._v(" 3.3 explain -- table")]),e._v(" "),s("p",[e._v("展示当前语句操作的表")]),e._v(" "),s("h2",{attrs:{id:"_3-4-explain-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-explain-type"}},[e._v("#")]),e._v(" 3.4 explain -- type")]),e._v(" "),s("p",[e._v("type 显示的是访问类型，其取值和含义为：")]),e._v(" "),s("p",[s("img",{attrs:{src:a(987),alt:"914181614de74e78dd667dcb171d173d.png"}})]),e._v(" "),s("p",[e._v("结果值从好到怀依次是：")]),e._v(" "),s("p",[s("strong",[e._v("system > const > eq_ref > ref > range > index > ALL")])]),e._v(" "),s("p",[e._v("一般来说，我们需要保证查询至少达到 range 级别，最好到 ref。")]),e._v(" "),s("h2",{attrs:{id:"_3-5-explain-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-explain-key"}},[e._v("#")]),e._v(" 3.5 explain -- key")]),e._v(" "),s("ul",[s("li",[e._v("possible_keys：显示可能应用在这张表的索引，一个或者多个")]),e._v(" "),s("li",[e._v("key：实际使用的索引，若为 null，则没有使用索引")]),e._v(" "),s("li",[e._v("key_len：表示索引中使用的字节数。该值为索引字段的最大可能长度，并非实际使用长度。在不损失精确性的前提下，长度越短越好")])]),e._v(" "),s("h2",{attrs:{id:"_3-6-explain-rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-explain-rows"}},[e._v("#")]),e._v(" 3.6 explain -- rows")]),e._v(" "),s("p",[e._v("扫描行的数量")]),e._v(" "),s("h2",{attrs:{id:"_3-7-explain-extra"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-explain-extra"}},[e._v("#")]),e._v(" 3.7 explain -- extra")]),e._v(" "),s("p",[e._v("其他的额外的执行计划信息，在该列展示")]),e._v(" "),s("p",[s("img",{attrs:{src:a(988),alt:"ef6bfc50f7f59ea94e0ac859a9713b89.png"}})]),e._v(" "),s("h1",{attrs:{id:"_4-show-profile-分析-sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-show-profile-分析-sql"}},[e._v("#")]),e._v(" 4. show profile 分析 SQL")]),e._v(" "),s("p",[e._v("show profiles 能够在 SQL 优化中帮助我们了解时间都耗费到哪里去了。")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("show @@have_profiling;")]),e._v(" 语句查看当前 MySQL 是否支持 profile")]),e._v(" "),s("p",[s("img",{attrs:{src:a(989),alt:"23945f4318f0329f4d34ab79cc126a3b.png"}})]),e._v(" "),s("p",[e._v("profile 默认关闭，需要手动开启")]),e._v(" "),s("p",[s("img",{attrs:{src:a(990),alt:"641de417abb0b37feaaf488cb89e16ce.png"}})]),e._v(" "),s("p",[e._v("通过**"),s("code",[e._v("show profiles")]),e._v("**指令，我们可以更加详细的了解 SQL 的执行过程")]),e._v(" "),s("p",[s("img",{attrs:{src:a(991),alt:"91a7de7f28e4226ac9c0e77fb26f0a6b.png"}})]),e._v(" "),s("p",[e._v("通过**"),s("code",[e._v("show profile for query query_id")]),e._v("**指令可以查看该 SQL 执行过程中每个线程的状态和小号的时间")]),e._v(" "),s("p",[s("img",{attrs:{src:a(992),alt:"6494740b41833cedf9d6eff444a42df9.png"}})]),e._v(" "),s("p",[e._v("进一步使用**"),s("code",[e._v("show profile [all|cpu|block io|context switch|pagefaults] for query_id")]),e._v("**查询明细。例如查询CPU的耗费时间：")]),e._v(" "),s("p",[e._v("字段解释：")]),e._v(" "),s("p",[s("img",{attrs:{src:a(993),alt:"e66004f37763172dd6ed75e0e7adccc5.png"}})]),e._v(" "),s("p",[s("img",{attrs:{src:a(994),alt:"330de80d170ec150b53233d3030ea3ba.png"}})]),e._v(" "),s("h1",{attrs:{id:"_5-trace分析优化器执行计划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-trace分析优化器执行计划"}},[e._v("#")]),e._v(" 5. trace分析优化器执行计划")]),e._v(" "),s("p",[e._v("开启 trace，设置格式为 JSON，并设置trace最大能够使用的内存大小，避免解析过程中因为默认内存过小而不能够完整展示。")]),e._v(" "),s("p",[s("img",{attrs:{src:a(995),alt:"9023940088f95a23cca1f357ce56a68c.png"}})]),e._v(" "),s("p",[e._v("执行 SQL 并通过 "),s("strong",[s("code",[e._v("select * from information_schema.optimizer_trace\\G;")])]),e._v(" 查看 SQL 如何被执行。")]),e._v(" "),s("p",[s("img",{attrs:{src:a(996),alt:"34479fc068aedd8203763d100851e70f.png"}})])])}),[],!1,null,null,null);t.default=_.exports},979:function(e,t,a){e.exports=a.p+"assets/img/3fa7185cacf81123e87731c9a2fbd5fb.3fa7185c.png"},980:function(e,t,a){e.exports=a.p+"assets/img/b3f86bc8f3efcc6a7a4150c4deb6bdee.b3f86bc8.png"},981:function(e,t,a){e.exports=a.p+"assets/img/8482c0cdbd69a0693504aa4cf76f98c7.8482c0cd.png"},982:function(e,t,a){e.exports=a.p+"assets/img/27f3ed5c0cbe64ecd98aad22ec9af46b.27f3ed5c.png"},983:function(e,t,a){e.exports=a.p+"assets/img/7e67aececcab41bee2acf86efb133355.7e67aece.png"},984:function(e,t,a){e.exports=a.p+"assets/img/0dab54fd1086b85bf6138f81e14a8f87.0dab54fd.png"},985:function(e,t,a){e.exports=a.p+"assets/img/099332f21273c3fe1497492c745765d9.099332f2.png"},986:function(e,t,a){e.exports=a.p+"assets/img/b19d31ecefc8065166e5b32337453173.b19d31ec.png"},987:function(e,t,a){e.exports=a.p+"assets/img/914181614de74e78dd667dcb171d173d.91418161.png"},988:function(e,t,a){e.exports=a.p+"assets/img/ef6bfc50f7f59ea94e0ac859a9713b89.ef6bfc50.png"},989:function(e,t,a){e.exports=a.p+"assets/img/23945f4318f0329f4d34ab79cc126a3b.23945f43.png"},990:function(e,t,a){e.exports=a.p+"assets/img/641de417abb0b37feaaf488cb89e16ce.641de417.png"},991:function(e,t,a){e.exports=a.p+"assets/img/91a7de7f28e4226ac9c0e77fb26f0a6b.91a7de7f.png"},992:function(e,t,a){e.exports=a.p+"assets/img/6494740b41833cedf9d6eff444a42df9.6494740b.png"},993:function(e,t,a){e.exports=a.p+"assets/img/e66004f37763172dd6ed75e0e7adccc5.e66004f3.png"},994:function(e,t,a){e.exports=a.p+"assets/img/330de80d170ec150b53233d3030ea3ba.330de80d.png"},995:function(e,t,a){e.exports=a.p+"assets/img/9023940088f95a23cca1f357ce56a68c.90239400.png"},996:function(e,t,a){e.exports=a.p+"assets/img/34479fc068aedd8203763d100851e70f.34479fc0.png"}}]);