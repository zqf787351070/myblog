(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1050:function(a,t,s){a.exports=s.p+"assets/img/e9c68dc02a487b0cab09f97495742ab2.e9c68dc0.png"},1051:function(a,t,s){a.exports=s.p+"assets/img/cb320655318344ad1785bf855fdb25ee.cb320655.png"},1052:function(a,t,s){a.exports=s.p+"assets/img/8aaa80ca2c7fe14f7077f67d0719e8ad.8aaa80ca.png"},1053:function(a,t,s){a.exports=s.p+"assets/img/7027bca8766f2d37c60000369a06b0f6.7027bca8.png"},1054:function(a,t,s){a.exports=s.p+"assets/img/d4c36f5dd33f891f1aa7fe7902d1a362.d4c36f5d.png"},1055:function(a,t,s){a.exports=s.p+"assets/img/9e78e419eefd10237562146199b9fbd0.9e78e419.png"},1056:function(a,t,s){a.exports=s.p+"assets/img/d20a36a2e8ee385aa7d4fcba80c4091d.d20a36a2.png"},1057:function(a,t,s){a.exports=s.p+"assets/img/352be54916ed51e6df43a8850416bff9.352be549.png"},1058:function(a,t,s){a.exports=s.p+"assets/img/6c530a131fb222e8fc1c7da2b6316e10.6c530a13.png"},1059:function(a,t,s){a.exports=s.p+"assets/img/3b4c099eed98384ad061a79bf528eaad.3b4c099e.png"},1060:function(a,t,s){a.exports=s.p+"assets/img/b105e2ef22be32f62a55c0c5edd7d5e0.b105e2ef.png"},1061:function(a,t,s){a.exports=s.p+"assets/img/870b64160081f7675dff8fc6cae37021.870b6416.png"},1062:function(a,t,s){a.exports=s.p+"assets/img/fa13554a3b8a828a47b618908959582b.fa13554a.png"},1063:function(a,t,s){a.exports=s.p+"assets/img/1e8fd4fe6cecc0bf7a584462b7bf7f40.1e8fd4fe.png"},1151:function(a,t,s){"use strict";s.r(t);var e=s(6),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_1-主从复制简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-主从复制简介"}},[a._v("#")]),a._v(" 1. 主从复制简介")]),a._v(" "),e("ul",[e("li",[a._v("主从复制：主机数据更新后根据配置和策略， 自动同步到备机的master/slaver机制，"),e("strong",[a._v("Master以写为主，Slave以读为主")])]),a._v(" "),e("li",[a._v("作用："),e("strong",[a._v("读写分离、容灾恢复")])])]),a._v(" "),e("h1",{attrs:{id:"_2-主库与从库的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-主库与从库的配置"}},[a._v("#")]),a._v(" 2. 主库与从库的配置")]),a._v(" "),e("p",[a._v("复制三份配置文件并修改配置，主要关注"),e("strong",[a._v("端口号、pid文件名、日志文件名、dump.rdb文件名")]),a._v("的修改")]),a._v(" "),e("p",[a._v("完成配置后开启 3 个 redis 服务器，并使用 3 个客户端连接")]),a._v(" "),e("p",[e("img",{attrs:{src:s(1050),alt:"e9c68dc02a487b0cab09f97495742ab2.png"}})]),a._v(" "),e("p",[a._v("使用命令查询信息，配置从库")]),a._v(" "),e("ul",[e("li",[a._v("info replication：查询当前库详细信息")]),a._v(" "),e("li",[a._v("slaveof 主库IP 主库端口号：配置从库")])]),a._v(" "),e("p",[a._v("配置完成后。当前三个库没有关系，均是主库，且无从库：")]),a._v(" "),e("p",[a._v("设置从库后：")]),a._v(" "),e("p",[a._v("从库跟随主库作相应的操作：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(1051),alt:"cb320655318344ad1785bf855fdb25ee.png"}})]),a._v(" "),e("p",[e("img",{attrs:{src:s(1052),alt:"8aaa80ca2c7fe14f7077f67d0719e8ad.png"}})]),a._v(" "),e("p",[e("img",{attrs:{src:s(1053),alt:"7027bca8766f2d37c60000369a06b0f6.png"}})]),a._v(" "),e("h1",{attrs:{id:"_3-常用三招"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用三招"}},[a._v("#")]),a._v(" 3. 常用三招")]),a._v(" "),e("h2",{attrs:{id:"_3-1-一主二仆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-一主二仆"}},[a._v("#")]),a._v(" 3.1 “一主二仆”")]),a._v(" "),e("p",[a._v("即上述配置过程所示")]),a._v(" "),e("p",[a._v("问题：")]),a._v(" "),e("ol",[e("li",[a._v("切入点问题？slave1、slave2是从头开始复制还是从切入点开始复制?比如从k4进来，那之前的123是否也可以复制？")])]),a._v(" "),e("p",[a._v("答：从头开始复制，123也可以复制")]),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[a._v("从机是否可以写？")])]),a._v(" "),e("p",[a._v("答：从机不可写，主机可写")]),a._v(" "),e("p",[e("img",{attrs:{src:s(1054),alt:"d4c36f5dd33f891f1aa7fe7902d1a362.png"}})]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("主机 shutdown 后情况如何？从机是上位还是原地待命？")])]),a._v(" "),e("p",[a._v("答：原地待命（咸鱼翻身还是咸鱼）")]),a._v(" "),e("p",[e("img",{attrs:{src:s(1055),alt:"9e78e419eefd10237562146199b9fbd0.png"}})]),a._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[a._v("主机又回来了后，主机新增记录，从机还能否顺利复制？")])]),a._v(" "),e("p",[a._v("答：可以")]),a._v(" "),e("p",[e("img",{attrs:{src:s(1056),alt:"d20a36a2e8ee385aa7d4fcba80c4091d.png"}})]),a._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[a._v("其中一台从机down后情况如何？依照原有它能跟上大部队吗？")])]),a._v(" "),e("p",[a._v("答：不能跟上，每次与master断开之后，都需要重新连接，除非你配置进redis.conf文件")]),a._v(" "),e("p",[e("img",{attrs:{src:s(1057),alt:"352be54916ed51e6df43a8850416bff9.png"}})]),a._v(" "),e("h2",{attrs:{id:"_3-2-薪火相传"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-薪火相传"}},[a._v("#")]),a._v(" 3.2 “薪火相传”")]),a._v(" "),e("ul",[e("li",[a._v("上一个Slave可以是下一个slave的Master，Slave同样可以接收其他 slaves的连接和同步请求，那么该slave作为了链条中下一个的master, 可以有效减轻master的写压力（奴隶的奴隶还是奴隶）")]),a._v(" "),e("li",[a._v("中途变更转向：会清除之前的数据，重新建立拷贝最新的")])]),a._v(" "),e("p",[e("img",{attrs:{src:s(1058),alt:"6c530a131fb222e8fc1c7da2b6316e10.png"}})]),a._v(" "),e("h2",{attrs:{id:"_3-3-反客为主"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-反客为主"}},[a._v("#")]),a._v(" 3.3 “反客为主”")]),a._v(" "),e("p",[a._v("slaveof no one：是当前数据库停止与其他数据库同步，转为主数据库")]),a._v(" "),e("p",[e("img",{attrs:{src:s(1059),alt:"3b4c099eed98384ad061a79bf528eaad.png"}})]),a._v(" "),e("h1",{attrs:{id:"_4-复制原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-复制原理"}},[a._v("#")]),a._v(" 4. 复制原理")]),a._v(" "),e("ul",[e("li",[a._v("slave 启动成功连接到 master 后会发送一个 sync 命令")]),a._v(" "),e("li",[a._v("master 接到命令启动后台的存盘进程，同时收集所有接收到的用于修改数据集命令， 在后台进程执行完毕之后， master 将传送整个数据文件到 slave，以完成一次完全同步")]),a._v(" "),e("li",[a._v("全量复制： slave 服务在接收到数据库文件数据后，将其存盘并加载到内存中。")]),a._v(" "),e("li",[a._v("增量复制：master 继续将新的所有收集到的修改命令依次传给 slave，完成同步。但是只要是重新连接 master，一次完全同步(全量复制)将被自动执行")])]),a._v(" "),e("h1",{attrs:{id:"_5-哨兵模式-sentinel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-哨兵模式-sentinel"}},[a._v("#")]),a._v(" 5. 哨兵模式（sentinel）")]),a._v(" "),e("h2",{attrs:{id:"_5-1-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-简介"}},[a._v("#")]),a._v(" 5.1 简介")]),a._v(" "),e("p",[a._v("使用一组 sentinel 监控多个 master，是反客为主的自动版，能够在后台监控主库的运行状态，如果主库宕机则采取投票的方式自动选取一个从库转换为主库")]),a._v(" "),e("h2",{attrs:{id:"_5-2-配置与使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-配置与使用"}},[a._v("#")]),a._v(" 5.2 配置与使用")]),a._v(" "),e("ol",[e("li",[a._v("新建 sentinel.conf 文件，并配置内容")])]),a._v(" "),e("p",[e("strong",[e("code",[a._v("sentinel monitor <master-group-name> <ip> <port> <quorum>")])])]),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[a._v("使用**"),e("code",[a._v("redis-server sentinel.conf --sentinel")]),a._v("**命令启动哨兵")])]),a._v(" "),e("p",[a._v("输出工作日志：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(1060),alt:"b105e2ef22be32f62a55c0c5edd7d5e0.png"}})]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("演示主库宕机后的自动配置")])]),a._v(" "),e("p",[a._v("端口号为6382的从库被自动选举为主库：")]),a._v(" "),e("p",[a._v("工作日志：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(1061),alt:"870b64160081f7675dff8fc6cae37021.png"}})]),a._v(" "),e("p",[e("img",{attrs:{src:s(1062),alt:"fa13554a3b8a828a47b618908959582b.png"}})]),a._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[a._v("原主库6380重新上线后沦为从库")])]),a._v(" "),e("p",[e("img",{attrs:{src:s(1063),alt:"1e8fd4fe6cecc0bf7a584462b7bf7f40.png"}})]),a._v(" "),e("h2",{attrs:{id:"_5-3-复制的缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-复制的缺点"}},[a._v("#")]),a._v(" 5.3 复制的缺点")]),a._v(" "),e("p",[a._v("由于所有的写操作都是先在 Master 上操作，然后同步更新到 slave 上，所以从 Master 同步到 Slave 机器有一定的延迟，当系统很繁忙的时候，延迟问题会更加严重，Slave 机器数量的增加也会使这个问题更加严重")])])}),[],!1,null,null,null);t.default=r.exports}}]);