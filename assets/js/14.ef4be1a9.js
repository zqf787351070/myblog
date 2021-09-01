(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1176:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_1-索引概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-索引概述"}},[t._v("#")]),t._v(" 1. 索引概述")]),t._v(" "),n("p",[t._v("索引(index)是帮助MySQL高效获取数据的数据结构。")]),t._v(" "),n("p",[t._v("一般来说索引本身也很大，不可能全部存储在内存中，因此索引往往以文件的形式存储在磁盘上。索引是数据库中用来提高性能的最常用的工具。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(964),alt:"e639c9bbdd95c0f641aade840902e025.png"}})]),t._v(" "),n("h1",{attrs:{id:"_2-索引的优劣分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-索引的优劣分析"}},[t._v("#")]),t._v(" 2. 索引的优劣分析")]),t._v(" "),n("p",[t._v("优势：")]),t._v(" "),n("ul",[n("li",[t._v("索引可以提高数据检索的效率，降低数据库的IO成本")]),t._v(" "),n("li",[t._v("通过索引列对数据进行排序，降低数据排序的成本，降低CPU的消耗")])]),t._v(" "),n("p",[t._v("劣势：")]),t._v(" "),n("ul",[n("li",[t._v("索引实际上也是一张表，表中保存了主键与索引字段，并指向实体类的记录。因此索引也需要占用空间。")]),t._v(" "),n("li",[t._v("索引提升了查询效率却降低了更新表的速度。因为在更新表(增删改)时，MySQL不仅要保存数据，还要保存索引文件。")])]),t._v(" "),n("h1",{attrs:{id:"_3-索引结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-索引结构"}},[t._v("#")]),t._v(" 3. 索引结构")]),t._v(" "),n("p",[n("img",{attrs:{src:a(965),alt:"86af987763af1bab6ac315530e222da3.png"}})]),t._v(" "),n("h2",{attrs:{id:"_3-1-btree结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-btree结构"}},[t._v("#")]),t._v(" 3.1 BTREE结构")]),t._v(" "),n("p",[t._v("BTREE又称多路平衡搜索树，一棵m叉的BTREE特性如下：")]),t._v(" "),n("ul",[n("li",[t._v("树中的每个节点最多包含m个子节点")]),t._v(" "),n("li",[t._v("除根节点与叶子结点外，每个节点至少有"),n("code",[t._v("[ceil(m/2)]")]),t._v("个子节点")]),t._v(" "),n("li",[t._v("若根节点不是叶子节点，则至少有两个子节点")]),t._v(" "),n("li",[t._v("所有的叶子结点都在一层")]),t._v(" "),n("li",[t._v("每个非叶子结点由n个key与n+1个指针组成，其中"),n("code",[t._v("[ceil(m/2)-1]<=n<=m-1")])])]),t._v(" "),n("p",[t._v("示例：以插入 C N G A H E K Q M F W L T Z D P R X Y S 数据为例")]),t._v(" "),n("p",[t._v("插入前四个字母 C N G A")]),t._v(" "),n("p",[n("img",{attrs:{src:a(966),alt:"1b5abd4367d2ca08a971ce8a6be07d4a.png"}})]),t._v(" "),n("p",[t._v("插入 H")]),t._v(" "),n("p",[n("img",{attrs:{src:a(967),alt:"a2b84e963cca57e4c3c34bde67b8e761.png"}})]),t._v(" "),n("p",[t._v("插入 E K Q，不需要分裂")]),t._v(" "),n("p",[n("img",{attrs:{src:a(968),alt:"2bc6d5f96058f896d084ed5bf91e4b05.png"}})]),t._v(" "),n("p",[t._v("插入 M")]),t._v(" "),n("p",[n("img",{attrs:{src:a(969),alt:"7dfa54c4a43e2eb18cdb145ec8559ff9.png"}})]),t._v(" "),n("p",[t._v("插入 F W L T，不需要分裂")]),t._v(" "),n("p",[n("img",{attrs:{src:a(970),alt:"5c15d0cdd43adc138278d4db1e556ae9.png"}})]),t._v(" "),n("p",[t._v("插入 Z")]),t._v(" "),n("p",[n("img",{attrs:{src:a(971),alt:"3d08ca0794308e722f15a84bcd47fb55.png"}})]),t._v(" "),n("p",[t._v("插入 D，在插入P R X Y")]),t._v(" "),n("p",[n("img",{attrs:{src:a(972),alt:"009de96b89561aa795cddb1236d433a4.png"}})]),t._v(" "),n("p",[t._v("插入 S")]),t._v(" "),n("p",[n("img",{attrs:{src:a(973),alt:"f503a694dbe9775515dfb6202796ae6e.png"}})]),t._v(" "),n("p",[t._v("至此BTREE的构建完成。BTREE相对于二叉树来说，查询效率更高（层级结构小，搜索速度快）")]),t._v(" "),n("h2",{attrs:{id:"_3-2-b-tree结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-b-tree结构"}},[t._v("#")]),t._v(" 3.2 B+TREE结构")]),t._v(" "),n("p",[t._v("B+TREE是BTREE的变种，他们的区别为：")]),t._v(" "),n("ul",[n("li",[t._v("n叉B+TREE最多含有n个Key，而BTREE最多含有n-1个")]),t._v(" "),n("li",[t._v("B+TREE的叶子结点保存所有的Key信息，依照Key的大小进行排序")]),t._v(" "),n("li",[t._v("所有的非叶子结点都可以看做是Key的索引部分")]),t._v(" "),n("li",[t._v("由于B+TREE只有叶子结点保存Key信息，查询任何Key都需要从根节点走到叶子结点，所以B+TREE的查询效率更加稳定")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(974),alt:"19ce7830069c57667c1b16eeb3755d65.png"}})]),t._v(" "),n("h2",{attrs:{id:"_3-3-mysql中的b-tree"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-mysql中的b-tree"}},[t._v("#")]),t._v(" 3.3 MySQL中的B+TREE")]),t._v(" "),n("p",[t._v("MySQL对经典的B+TREE做了优化。在原来的B+TREE的基础上，增加了一个指向相邻叶子结点的链表指针，这样就形成了带有顺序指针的B+TREE，提高区间访问的性能。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(975),alt:"99f69cd602c96b25cde366ee5ca66b2e.png"}})]),t._v(" "),n("h1",{attrs:{id:"_4-索引分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-索引分类"}},[t._v("#")]),t._v(" 4. 索引分类")]),t._v(" "),n("ul",[n("li",[t._v("单值索引：索引只包含单个列，一个表可以有多个单值索引")]),t._v(" "),n("li",[t._v("唯一索引：索引列的值必须唯一，但允许有空值")]),t._v(" "),n("li",[t._v("复合索引：一个索引包含多个列")])]),t._v(" "),n("h1",{attrs:{id:"_5-索引语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-索引语法"}},[t._v("#")]),t._v(" 5. 索引语法")]),t._v(" "),n("p",[t._v("准备环境：")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'西安'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NewYork'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'北京'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("city_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'上海'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'China'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'America'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Japan'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("country_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UK'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br")])]),n("h2",{attrs:{id:"_5-1-创建索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-创建索引"}},[t._v("#")]),t._v(" 5.1 创建索引")]),t._v(" "),n("p",[t._v("语法：")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("FULLTEXT"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("SPATIAL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" index_name \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v("  index_type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" tbl_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index_col_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("示例：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(976),alt:"924ddb6920eee1ab687203f707d8a55c.png"}})]),t._v(" "),n("h2",{attrs:{id:"_5-2-查看索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-查看索引"}},[t._v("#")]),t._v(" 5.2 查看索引")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("示例：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(977),alt:"e708c73335cf3e41e79f713c33d7a7ee.png"}})]),t._v(" "),n("h2",{attrs:{id:"_5-3-删除索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-删除索引"}},[t._v("#")]),t._v(" 5.3 删除索引")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" index_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" table_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("示例：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(978),alt:"502d0b890fa42bb62dc8ef1ad98943c9.png"}})]),t._v(" "),n("h2",{attrs:{id:"_5-4-alter命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-alter命令"}},[t._v("#")]),t._v(" 5.4 ALTER命令")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加一个主键，这意味着索引值必须是惟一的，且不能为null")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" tbl_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加唯一索引：索引的值必须是唯一的(除了NULL)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" tbl_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unique")]),t._v(" index_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加普通索引：索引值可以出现多次")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" tbl_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" index_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该语句指定索引为FULLTEXT，用于全文索引")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" tbl_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add")]),t._v(" fulltext index_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("h1",{attrs:{id:"_6-索引的设计原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-索引的设计原则"}},[t._v("#")]),t._v(" 6. 索引的设计原则")]),t._v(" "),n("ul",[n("li",[t._v("对于查询频次较高，数据量较大的表建立索引")]),t._v(" "),n("li",[t._v("最佳索引字段的选择应该从where字段的条件中提取")]),t._v(" "),n("li",[t._v("尽量使用唯一索引。区分度越高，使用索引的效率越高")]),t._v(" "),n("li",[t._v("索引不是多多益善。索引越多，维护索引的代价越高")]),t._v(" "),n("li",[t._v("尽量使用段索引。索引创建之后使用硬盘来存储，因此提升索引访问的IO效率，也可以提升总体的访问效率")]),t._v(" "),n("li",[t._v("利用最左索引。N个列组合而成的组合索引，相当于创建了N个索引")])]),t._v(" "),n("p",[t._v("示例：")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[t._v("创建复合索引:\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" idx_name_email_status "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" tb_seller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("email"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("STATUS")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n就相当于\n    对name 创建索引 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    对name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" email 创建了索引 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    对name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" email"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" 创建了索引 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports},964:function(t,s,a){t.exports=a.p+"assets/img/e639c9bbdd95c0f641aade840902e025.e639c9bb.png"},965:function(t,s,a){t.exports=a.p+"assets/img/86af987763af1bab6ac315530e222da3.86af9877.png"},966:function(t,s){t.exports="data:image/png;base64,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"},967:function(t,s,a){t.exports=a.p+"assets/img/a2b84e963cca57e4c3c34bde67b8e761.a2b84e96.png"},968:function(t,s,a){t.exports=a.p+"assets/img/2bc6d5f96058f896d084ed5bf91e4b05.2bc6d5f9.png"},969:function(t,s,a){t.exports=a.p+"assets/img/7dfa54c4a43e2eb18cdb145ec8559ff9.7dfa54c4.png"},970:function(t,s,a){t.exports=a.p+"assets/img/5c15d0cdd43adc138278d4db1e556ae9.5c15d0cd.png"},971:function(t,s,a){t.exports=a.p+"assets/img/3d08ca0794308e722f15a84bcd47fb55.3d08ca07.png"},972:function(t,s,a){t.exports=a.p+"assets/img/009de96b89561aa795cddb1236d433a4.009de96b.png"},973:function(t,s,a){t.exports=a.p+"assets/img/f503a694dbe9775515dfb6202796ae6e.f503a694.png"},974:function(t,s,a){t.exports=a.p+"assets/img/19ce7830069c57667c1b16eeb3755d65.19ce7830.png"},975:function(t,s,a){t.exports=a.p+"assets/img/99f69cd602c96b25cde366ee5ca66b2e.99f69cd6.png"},976:function(t,s,a){t.exports=a.p+"assets/img/924ddb6920eee1ab687203f707d8a55c.924ddb69.png"},977:function(t,s,a){t.exports=a.p+"assets/img/e708c73335cf3e41e79f713c33d7a7ee.e708c733.png"},978:function(t,s,a){t.exports=a.p+"assets/img/502d0b890fa42bb62dc8ef1ad98943c9.502d0b89.png"}}]);