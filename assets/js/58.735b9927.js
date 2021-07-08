(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1034:function(_,v,a){_.exports=a.p+"assets/img/37b6fcaf4cb40b52bd02b67f00972a5d.37b6fcaf.png"},1035:function(_,v,a){_.exports=a.p+"assets/img/4a5c203e2d74d774b732e221a7500c88.4a5c203e.png"},1128:function(_,v,a){"use strict";a.r(v);var r=a(6),s=Object(r.a)({},(function(){var _=this,v=_.$createElement,r=_._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h1",{attrs:{id:"_1-rdb-redis-database"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-rdb-redis-database"}},[_._v("#")]),_._v(" 1. RDB -- Redis DataBase")]),_._v(" "),r("h2",{attrs:{id:"_1-1-rdb-是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-rdb-是什么"}},[_._v("#")]),_._v(" 1.1 RDB 是什么？")]),_._v(" "),r("ul",[r("li",[_._v("在指定的时间间隔内将内存中的数据集快照写入磁盘，也就是行话讲的 Snapshot 快照，它恢复时是将快照文件直接读到内存里")]),_._v(" "),r("li",[_._v("Redis会"),r("strong",[_._v("单独创建（fork）一个子进程来进行持久化")]),_._v("，会先将数据写入到一个临时文件中，待持久化过程都结束了，再用这个临时文件替换上次持久化好的文件。 整个过程中，主进程是"),r("strong",[_._v("不进行任何 IO 操作")]),_._v("的，这就确保了极高的性能。如果需要进行"),r("strong",[_._v("大规模数据的恢复，且对于数据恢复的完整性不是非常敏感，那 RDB 方式要比 AOF 方式更加的高效")]),_._v("。RDB 的缺点是最后一次持久化后的数据可能丢失。")]),_._v(" "),r("li",[_._v("Fork的作用是复制一个与当前进程一样的进程。新进程的所有数据（变量、环境变量、程序计数器等） 数值都和原进程一致，但是是一个全新的进程，并作为原进程的子进程")]),_._v(" "),r("li",[_._v("rdb 保存的是 "),r("strong",[_._v("dump.rdb")]),_._v(" 文件")]),_._v(" "),r("li",[_._v("相关配置："),r("strong",[_._v("SNAPSHOTTING")])])]),_._v(" "),r("h2",{attrs:{id:"_1-2-rdb-快照的使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-rdb-快照的使用"}},[_._v("#")]),_._v(" 1.2 RDB 快照的使用")]),_._v(" "),r("ul",[r("li",[_._v("在配置文件中默认配置了 dump.rbd 作为存入磁盘的文件")]),_._v(" "),r("li",[_._v("可以使用 save 或者 bgsave 命令将当前数据库内容写入磁盘持久化")]),_._v(" "),r("li",[_._v("执行拷贝命令 cp dump.rdb dump_new.rdb 保存当前的数据，当需要恢复数据时删除 dump.rdb 并将 dump_new.rdb 重新复制并命名为 dump.rdb 即可")]),_._v(" "),r("li",[_._v("执行flushall命令，也会产生dump.rdb文件，但里面是空的，无意义")]),_._v(" "),r("li",[_._v('停止使用 RDB 快照：redis-cli config set save ""')])]),_._v(" "),r("h2",{attrs:{id:"_1-3-rdb-的优劣"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-rdb-的优劣"}},[_._v("#")]),_._v(" 1.3 RDB 的优劣")]),_._v(" "),r("ul",[r("li",[r("p",[_._v("优势：")]),_._v(" "),r("ul",[r("li",[_._v("适合大规模的数据恢复")]),_._v(" "),r("li",[_._v("对数据的完整性和一致性要求不高")])])]),_._v(" "),r("li",[r("p",[_._v("劣势：")]),_._v(" "),r("ul",[r("li",[_._v("在一定间隔时间内做一次备份，如果 redis 意外宕机，就会丢失最后一次快照后的所有更改")]),_._v(" "),r("li",[_._v("Fork 的时候，内存中的数据被克隆了一份，占用的磁盘空间膨胀一倍")])])])]),_._v(" "),r("h2",{attrs:{id:"_1-4-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-总结"}},[_._v("#")]),_._v(" 1.4 总结")]),_._v(" "),r("p",[r("img",{attrs:{src:a(1034),alt:"37b6fcaf4cb40b52bd02b67f00972a5d.png"}})]),_._v(" "),r("ul",[r("li",[_._v("RDB是一个非常紧凑的文件。")]),_._v(" "),r("li",[_._v("RDB 在保存 RDB 文件时父进程唯一需要做的就是 fork 出一个子进程，接下来的工作全部由子进程来做，父进程不需要再做其他 IO 操作，所以 RDB 持久化方式可以最大化redis的性能。")]),_._v(" "),r("li",[_._v("与 AOF 相比，在恢复大的数据集的时候，RDB 方式会更快一。")]),_._v(" "),r("li",[_._v("数据丢失风险大。")]),_._v(" "),r("li",[_._v("RDB 需要经常 fork 子进程来保存数据集到硬盘上，当数据集比较大的时候 fork 的过程是非常耗时的，可能会导致Redis 在一些毫秒级不能回应客户端请求。")])]),_._v(" "),r("h1",{attrs:{id:"_2-aof-append-only-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-aof-append-only-file"}},[_._v("#")]),_._v(" 2. AOF -- Append Only File")]),_._v(" "),r("h2",{attrs:{id:"_2-1-aof-是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-aof-是什么"}},[_._v("#")]),_._v(" 2.1 AOF 是什么？")]),_._v(" "),r("p",[_._v("AOF 以日志的形式来记录每个写操作，将 Redis 执行过的所有写指令记录下来(读操作不记录)， 只许追加文件但不可以改写文件，redis 启动之初会读取该文件重新构建数据，即 redis 重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作")]),_._v(" "),r("h2",{attrs:{id:"_2-2-aof-的使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-aof-的使用"}},[_._v("#")]),_._v(" 2.2 AOF 的使用")]),_._v(" "),r("ul",[r("li",[_._v("相关配置：APPEND ONLY MODE")]),_._v(" "),r("li",[_._v("aof保存的是 appendonly.aof 文件（在配置文件可修改文件名）")]),_._v(" "),r("li",[_._v("使用是首先在配置文件中启用 AOF：appendonly no，改为yes")]),_._v(" "),r("li",[_._v("备份当前的 appendonly.aof 文件，当需要恢复数据时重新拷贝一份即可")]),_._v(" "),r("li",[_._v("当 appendonly.aof 文件出现损坏时，可以使用")])]),_._v(" "),r("p",[_._v("Redis-check-aof --fix 文件名 来进行持久化文件的修复")]),_._v(" "),r("h2",{attrs:{id:"_2-3-rewrite"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-rewrite"}},[_._v("#")]),_._v(" 2.3 Rewrite")]),_._v(" "),r("ul",[r("li",[_._v("是什么？")])]),_._v(" "),r("p",[_._v("AOF采用文件追加方式，文件会越来越大。为避免出现此种情况，新增了重写机制。")]),_._v(" "),r("p",[_._v("当 AOF 文件的大小超过所设定的阈值时，Redis就会启动 AOF 文件的内容压缩，只保留可以恢复数据的最小指令集。可以使用命令 bgrewriteaof")]),_._v(" "),r("ul",[r("li",[_._v("重写原理")])]),_._v(" "),r("p",[_._v("AOF 文件持续增长而过大时，会 fork 出一条新进程来将文件重写(也是先写临时文件最后再 rename)， 遍历新进程的内存中数据，每条记录有一条的 Set 语句。")]),_._v(" "),r("p",[_._v("重写 aof 文件的操作，并没有读取旧的 aof 文件， 而是将整个内存中的数据库内容用命令的方式重写了一个新的 aof 文件，这点和快照有点类似")]),_._v(" "),r("ul",[r("li",[_._v("触发机制")])]),_._v(" "),r("p",[_._v("Redis会记录上次重写时的 AOF 大小，默认配置是当 AOF 文件大小是上次 rewrite 后大小的一倍且文件大于 64M 时触发")]),_._v(" "),r("h2",{attrs:{id:"_2-4-aof-的优劣"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-aof-的优劣"}},[_._v("#")]),_._v(" 2.4 AOF 的优劣")]),_._v(" "),r("ul",[r("li",[r("p",[_._v("优势：")]),_._v(" "),r("ul",[r("li",[_._v("每修改同步：appendfsync always 同步持久化 每次发生数据变更会被立即记录到磁盘，性能较差但数据完整性比较好")]),_._v(" "),r("li",[_._v("每秒同步：appendfsync everysec 异步操作，每秒记录，如果一秒内宕机，有数据丢失")]),_._v(" "),r("li",[_._v("不同步：appendfsync no 从不同步")])])]),_._v(" "),r("li",[r("p",[_._v("劣势：")]),_._v(" "),r("ul",[r("li",[_._v("相同数据集的数据而言 aof 文件要远大于 rdb 文件，恢复速度慢于 rdb")]),_._v(" "),r("li",[_._v("Aof运行效率要慢于 rdb，每秒同步策略效率较好，不同步效率和 rdb 相同")])])])]),_._v(" "),r("h2",{attrs:{id:"_2-5-小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-小结"}},[_._v("#")]),_._v(" 2.5 小结")]),_._v(" "),r("p",[r("img",{attrs:{src:a(1035),alt:"4a5c203e2d74d774b732e221a7500c88.png"}})]),_._v(" "),r("ul",[r("li",[_._v("AOF 文件时一个只进行追加的日志文件")]),_._v(" "),r("li",[_._v("Redis 可以在AOF文件体积变得过大时，自动地在后台对 AOF 进行重写")]),_._v(" "),r("li",[_._v("AOF 文件有序地保存了对数据库执行的所有写入操作，这些写入操作以Redis协议的格式保存，因此AOF文件的内容非常容易被人读懂，对文件进行分析也很轻松")]),_._v(" "),r("li",[_._v("对于相同的数据集来说，AOF 文件的体积通常要大于 RDB 文件的体积")]),_._v(" "),r("li",[_._v("根据所使用的 fsync 策略，AOF 的速度可能会慢于 RDB")]),_._v(" "),r("li",[_._v("当 RDB 与 AOF 同时存在时，Redis 会优先根据 AOF 的文件来恢复数据库")])])])}),[],!1,null,null,null);v.default=s.exports}}]);