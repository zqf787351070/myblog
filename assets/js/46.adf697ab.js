(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1e3:function(a,t,s){a.exports=s.p+"assets/img/0fdd8178314c8a97dcfd4036113887ce.0fdd8178.png"},1001:function(a,t,s){a.exports=s.p+"assets/img/34d3d473e4b2fada3909830a293598a6.34d3d473.png"},1002:function(a,t,s){a.exports=s.p+"assets/img/0e15f558819b63416f28faae5ebf043b.0e15f558.png"},1003:function(a,t,s){a.exports=s.p+"assets/img/32530ce5bde528f204500386850343ba.32530ce5.png"},1179:function(a,t,s){"use strict";s.r(t);var _=s(6),e=Object(_.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"_1-mysql体系结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql体系结构"}},[a._v("#")]),a._v(" 1. MySQL体系结构")]),a._v(" "),_("p",[_("img",{attrs:{src:s(1e3),alt:"0fdd8178314c8a97dcfd4036113887ce.png"}})]),a._v(" "),_("h1",{attrs:{id:"_2-存储引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-存储引擎"}},[a._v("#")]),a._v(" 2. 存储引擎")]),a._v(" "),_("h2",{attrs:{id:"_2-1-存储引擎概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-存储引擎概述"}},[a._v("#")]),a._v(" 2.1 存储引擎概述")]),a._v(" "),_("p",[a._v("MySQL 可以根据不同的存储需求，选择最优的存储引擎。存储引擎就是存储数据、建立索引、更新查询数据等等技术的实现方式。存储引擎是基于表的，而不是基于库的，所以存储引擎也被称为表类型。")]),a._v(" "),_("p",[a._v("可以通过语句 "),_("code",[a._v("show engines;")]),a._v(" 来查询当前数据库支持的存储引擎。")]),a._v(" "),_("p",[_("img",{attrs:{src:s(1001),alt:"34d3d473e4b2fada3909830a293598a6.png"}})]),a._v(" "),_("p",[a._v("创建新表时，如果不指定存储引擎，系统就会使用默认的存储引擎。")]),a._v(" "),_("p",[a._v("查看 MySQL 数据库默认的存储引擎："),_("code",[a._v("show variables like '%storage_engine';")])]),a._v(" "),_("p",[_("img",{attrs:{src:s(1002),alt:"0e15f558819b63416f28faae5ebf043b.png"}})]),a._v(" "),_("h2",{attrs:{id:"_2-2-各种存储引擎特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-各种存储引擎特性"}},[a._v("#")]),a._v(" 2.2 各种存储引擎特性")]),a._v(" "),_("p",[_("img",{attrs:{src:s(1003),alt:"32530ce5bde528f204500386850343ba.png"}})]),a._v(" "),_("h3",{attrs:{id:"innodb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[a._v("#")]),a._v(" InnoDB")]),a._v(" "),_("p",[a._v("InnoDB 是 MySQL 的默认存储引擎。InnoDB 提供了具有提交、回滚、崩溃恢复能力的事务安全。但是对比 MyISAM 引擎，InnoDB 写的处理效率较差，并且会占用更多的磁盘空间以保留数据和索引。")]),a._v(" "),_("p",[a._v("InnoDB 的特点：")]),a._v(" "),_("ul",[_("li",[a._v("事务控制")]),a._v(" "),_("li",[a._v("外键约束")]),a._v(" "),_("li",[a._v("存储方式\n"),_("ul",[_("li",[a._v("共享表空间存储：该方式创建的表的表结构存储在 .frm 文件中，数据和索引保存在 innodb_data_hom_dir 和 innodb_data_file_path 定义的表空间中，可以是多个文件")]),a._v(" "),_("li",[a._v("多表空间存储：该方式创建的表仍然存储在 .frm 文件中，但是每个表的数据和索引单独存储在 .idb 中")])])])]),a._v(" "),_("h3",{attrs:{id:"myisam"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#myisam"}},[a._v("#")]),a._v(" MyISAM")]),a._v(" "),_("p",[a._v("MyISAM 不支持事务，也不支持外键。其优势是访问速度快。对事务的完整性没有要求或者以 select、insert 为主的应用基本上都可以使用这个引擎来创建表。")]),a._v(" "),_("p",[a._v("MyISAM 特点：")]),a._v(" "),_("ul",[_("li",[a._v("不支持事务")]),a._v(" "),_("li",[a._v("文件存储方式：每个 MyISAM 在磁盘上的存储分为 3 个文件，其文件名和表名相同，拓展名分别为：\n"),_("ul",[_("li",[a._v(".frm：存储表定义")]),a._v(" "),_("li",[a._v(".MYD：存储数据")]),a._v(" "),_("li",[a._v(".MYI：存储索引")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);