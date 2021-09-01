(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1170:function(s,e,t){"use strict";t.r(e);var a=t(6),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" 字段       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 执行 select 选出数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 首先执行 where 过滤原始数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 执行 group by 进行分组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("having")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 执行 having 对分组数据进行操作 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5. 执行 order by 排序")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h1",{attrs:{id:"_1-简单查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单查询"}},[s._v("#")]),s._v(" 1. 简单查询")]),s._v(" "),t("ul",[t("li",[s._v("查询一个字段："),t("code",[s._v("select 字段名 from 表名;")])]),s._v(" "),t("li",[s._v("查询多个字段："),t("code",[s._v("select 字段1, 字段2, ... from 表名;")])]),s._v(" "),t("li",[s._v("查询全部字段："),t("code",[s._v("select * from 表名;")])])]),s._v(" "),t("p",[s._v("注意：")]),s._v(" "),t("ul",[t("li",[s._v("在 select 语句中可以使用运算符："),t("code",[s._v("select empno, ename, sal * 12 from emp;")])]),s._v(" "),t("li",[s._v("查询出的字段可命名："),t("code",[s._v('select sal * 12 as "年薪" from emp;')]),s._v(" 其中 as 可省略")])]),s._v(" "),t("h1",{attrs:{id:"_2-条件查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-条件查询"}},[s._v("#")]),s._v(" 2. 条件查询")]),s._v(" "),t("ul",[t("li",[s._v("等于："),t("code",[s._v("select empno, ename, sal from emp where sal = 2000;")])]),s._v(" "),t("li",[s._v("大于小于："),t("code",[s._v("select empno, ename, sal, from emp where sal <> 5000;")])]),s._v(" "),t("li",[s._v("between...and...："),t("code",[s._v("select empno, ename, sal from emp where sal between 1600 and 3000;")])]),s._v(" "),t("li",[s._v("is null："),t("code",[s._v("select * from emp where comm is null;")])]),s._v(" "),t("li",[s._v("and："),t("code",[s._v('select * from emp where job = "manager" and sal > 2000;')])]),s._v(" "),t("li",[s._v("or："),t("code",[s._v('select* from emp where job = "manager" or job = "salesman";')])]),s._v(" "),t("li",[s._v("in："),t("code",[s._v('select * from emp where job in ("manager","salesman");')])]),s._v(" "),t("li",[s._v("not："),t("code",[s._v('select * from emp where job not in ("manager","salesman");')])]),s._v(" "),t("li",[s._v("like："),t("code",[s._v('select * from emp where ename = "_M%";')]),s._v(" %匹配任意个数，_只匹配一个字符")])]),s._v(" "),t("h1",{attrs:{id:"_3-数据排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据排序"}},[s._v("#")]),s._v(" 3. 数据排序")]),s._v(" "),t("p",[s._v("排序采用 order by 子句，后跟排序字段，默认升序，在 where 之后使用")]),s._v(" "),t("ul",[t("li",[s._v("单一字段排序："),t("code",[s._v("select * from emp order by sal;")])]),s._v(" "),t("li",[s._v("手动指定排序顺序：\n"),t("ul",[t("li",[s._v("升序："),t("code",[s._v("select * from emp order by sal asc;")])]),s._v(" "),t("li",[s._v("降序："),t("code",[s._v("select * from emp order by sal desc;")])])])]),s._v(" "),t("li",[s._v("多个字段排序："),t("code",[s._v("select * from emp order by sal asc, job desc;")])])]),s._v(" "),t("h1",{attrs:{id:"_4-数据处理函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-数据处理函数"}},[s._v("#")]),s._v(" 4. 数据处理函数")]),s._v(" "),t("ul",[t("li",[s._v("lower(转换小写)："),t("code",[s._v("select lower(ename) from emp;")])]),s._v(" "),t("li",[s._v("upper(转换大写)："),t("code",[s._v('select * from emp where job = upper("manager");')])]),s._v(" "),t("li",[s._v("substr(切分字符串)："),t("code",[s._v('select * from emp where substr(ename, 1, 1) = upper("m");')])]),s._v(" "),t("li",[s._v("length(取长度)："),t("code",[s._v("select ename from emp where length(ename) = 5;")])]),s._v(" "),t("li",[s._v("trim(去除首尾空格)："),t("code",[s._v('select * from emp where job = trim("manager");')])]),s._v(" "),t("li",[s._v("str_to_date(将字符串转换为日期)："),t("code",[s._v('select * from emp where hiredate = str_to_date("1981-02-20", "%Y-%m-%d");')])]),s._v(" "),t("li",[s._v("date_format(日期格式化)："),t("code",[s._v('select date_format(hiredate, "%Y-%m-%d") hiredate from emp;')])]),s._v(" "),t("li",[s._v("format(格式化)："),t("code",[s._v("select ename, format((sal, 2) from emp);")]),s._v(" 查询薪水，加入千分位，保留2位小数")]),s._v(" "),t("li",[s._v("round(四舍五入)")]),s._v(" "),t("li",[s._v("rand(生成随机数)")]),s._v(" "),t("li",[s._v("case...when...then...else...and(条件分类判断)："),t("code",[s._v('select case job when "manager" then sal * 1.1 when "salesman" then sal * 1.5 else sal end as new sal from emp;')])]),s._v(" "),t("li",[s._v("isfull(若字段为null就替换)："),t("code",[s._v("select empno, ename, sal, (sal + ifnull(comm, 0)) * 12 as yearsal from emp;")])])]),s._v(" "),t("h1",{attrs:{id:"_5-聚合函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-聚合函数"}},[s._v("#")]),s._v(" 5. 聚合函数")]),s._v(" "),t("ul",[t("li",[s._v("count(计数函数)：\n"),t("ul",[t("li",[t("code",[s._v("select count(*) from emp;")]),s._v(" count(*)表示取得所有记录，包括null")]),s._v(" "),t("li",[t("code",[s._v("select count(comm) from emp;")]),s._v(" count(字段名)不会计算 null 的记录")])])]),s._v(" "),t("li",[s._v("sum(求和函数)："),t("code",[s._v("select sum(sal) from emp;")])]),s._v(" "),t("li",[s._v("avg(均值函数)："),t("code",[s._v("select avg(sal) from emp;")])]),s._v(" "),t("li",[s._v("max/min(最值函数)：\n"),t("ul",[t("li",[t("code",[s._v("select max(sal) from empl;")])]),s._v(" "),t("li",[t("code",[s._v("select min(sal) from empl;")])])])])]),s._v(" "),t("h1",{attrs:{id:"_6-分组查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-分组查询"}},[s._v("#")]),s._v(" 6. 分组查询")]),s._v(" "),t("p",[s._v("分组函数执行顺序：根据条件查询数据 =》分组 =》使用 having 过滤")]),s._v(" "),t("ul",[t("li",[s._v("group by\n"),t("ul",[t("li",[s._v("SQL 中若使用 group by 语句，则 select 后只能查询 分组函数+参与分组的字段")]),s._v(" "),t("li",[t("code",[s._v("select job, sum(sal) from emp group by job;")])])])]),s._v(" "),t("li",[s._v("having\n"),t("ul",[t("li",[s._v("对分组后的数据进行过滤")]),s._v(" "),t("li",[t("code",[s._v("select job, avg(sal) from emp group by job having avg(sal) > 2000;")])])])])]),s._v(" "),t("h1",{attrs:{id:"_7-连接查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-连接查询"}},[s._v("#")]),s._v(" 7. 连接查询")]),s._v(" "),t("p",[t("code",[s._v("select ename, dneme from emp, dept;")]),s._v(" =》显示笛卡尔积。原因是没有指定连接条件")]),s._v(" "),t("ul",[t("li",[s._v("内连接\n"),t("ul",[t("li",[s._v("又称等值连接，返回的是两张表公共的满足条件的部分")]),s._v(" "),t("li",[t("code",[s._v("select e.ename, e.sal, d.dname from emp e inner dept d on e. deptno = d.deptno;")])])])]),s._v(" "),t("li",[s._v("外连接\n"),t("ul",[t("li",[s._v("取左边表的全部和左右表公共的满足条件的部分")]),s._v(" "),t("li",[t("code",[s._v("select e.ename, e.sal, d.dname from emp e right join dept d on e. deptno = d.deptno;")])]),s._v(" "),t("li",[t("code",[s._v("select e.ename, e.sal, d.dname from dept d left join emp e on e. deptno = d.deptno;")])])])])]),s._v(" "),t("h1",{attrs:{id:"_8-子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-子查询"}},[s._v("#")]),s._v(" 8. 子查询")]),s._v(" "),t("p",[s._v("子查询就是嵌套的 select 语句，可以将其理解为一张表")]),s._v(" "),t("ul",[t("li",[s._v("在 where 语句中使用子查询")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例：查询哪些人的薪水高于员工的平均薪水，需要显示员工编号、姓名、薪水")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (1) 查询平均薪水")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (2) 获取大于平均薪水的员工")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" empno"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sal "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" sal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("在 from 语句中使用子查询")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例：查询各个部门的平均薪水等级，需要显示部门编号、平均薪水、等级编号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (1) 查询各个部分平均薪水")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" deptno"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" avg_sal "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" deptno"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (2) 将部门平均薪水最为一张表与薪水等级表连表查询")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deptno"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("avg_sal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("grade\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" deptno"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" avg_sal "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" deptno"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" t\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" salgrade g\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("avg_sal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("losal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hisal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[s._v("在 select 语句中使用子查询")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例：查询员工信息，并显示出所属部门的部门名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方法①：员工表和部门表连表查询")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dname "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dept d "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deptno "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deptno"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方法②：select 子查询")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dname "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dept d "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deptno "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deptno"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" dname "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h1",{attrs:{id:"_9-union-合并集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-union-合并集合"}},[s._v("#")]),s._v(" 9. Union -- 合并集合")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例：查询 job 为 manager 和 salesman 的员工")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方法①：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" job "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"manager"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"salesman"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方法②：union合并")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" job "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"manager"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" job "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"salesman"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h1",{attrs:{id:"_10-limit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-limit"}},[s._v("#")]),s._v(" 10. limit")]),s._v(" "),t("ul",[t("li",[s._v("取得前5条数据："),t("code",[s._v("select * from emp limit 5;")])]),s._v(" "),t("li",[s._v("从第2条数据开始取2条数据："),t("code",[s._v("select * from emp limit 1,2;")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);