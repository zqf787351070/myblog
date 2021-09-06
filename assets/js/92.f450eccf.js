(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1206:function(t,e,v){"use strict";v.r(e);var _=v(6),d=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_1-配置文件及数据库备份位置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置文件及数据库备份位置"}},[t._v("#")]),t._v(" 1. 配置文件及数据库备份位置")]),t._v(" "),v("p",[t._v("配置文件位置："),v("code",[t._v("/etc/redis/redis.conf")])]),t._v(" "),v("p",[t._v("数据库备份dump.rdb位置："),v("code",[t._v("/var/lib/redis")])]),t._v(" "),v("h1",{attrs:{id:"_2-network"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-network"}},[t._v("#")]),t._v(" 2. NETWORK")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("bind 127.0.0.1 ::1")])]),t._v(" "),v("td",[t._v("绑定的主机地址")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("protected-mode yes")])]),t._v(" "),v("td",[t._v("默认情况下启用保护模式。 仅当您确定您希望其他主机的客户端连接到Redis（即使未配置身份验证），或者使用“ bind”指令未明确列出一组特定的接口时，才应禁用它")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("port 6379")])]),t._v(" "),v("td",[t._v("指定 Redis 监听端口，默认端口为 6379")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("tcp-backlog 511")])]),t._v(" "),v("td",[t._v("TCP listen() backlog")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("timeout 0")])]),t._v(" "),v("td",[t._v("客户端闲置N秒后关闭连接（0禁用）")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("tcp-keepalive 300")])]),t._v(" "),v("td",[t._v("此选项的合理值为300秒，这是从Redis 3.2.1开始的新Redis默认值")])])])]),t._v(" "),v("h1",{attrs:{id:"_3-general"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-general"}},[t._v("#")]),t._v(" 3. GENERAL")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("daemonize yes")])]),t._v(" "),v("td",[t._v("默认情况下，Redis不会作为守护程序运行。 如果需要，请使用 yes。请注意，Redis守护进程将在/var/run/redis.pid中写入一个pid文件。")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("supervised no")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("pidfile /var/run/redis/redis-server.pid")])]),t._v(" "),v("td",[t._v("当 Redis 以守护进程方式运行时，Redis 默认会把 pid 写入 /var/run/redis.pid 文件，可以通过 pidfile 指定")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("loglevel notice")])]),t._v(" "),v("td",[t._v("指定日志记录级别，Redis 总共支持四个级别：debug、verbose、notice、warning，默认为 notice")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("logfile /var/log/redis/redis-server.log")])]),t._v(" "),v("td",[t._v("定制日志文件的名称及存放路径")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("databases 16")])]),t._v(" "),v("td",[t._v("设置数据库的数量，默认数据库为0，可以使用SELECT 命令在连接上指定数据库id")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("always-show-logo yes")])]),t._v(" "),v("td")])])]),t._v(" "),v("h1",{attrs:{id:"_4-snapshotting"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-snapshotting"}},[t._v("#")]),t._v(" 4. SNAPSHOTTING")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("save <seconds> <changes>")])]),t._v(" "),v("td",[t._v("Redis 默认配置文件中提供了三个条件：save 900 1；save 300 10；save 60 10000，分别表示 900 秒（15 分钟）内有 1 个更改，300 秒（5 分钟）内有 10 个更改以及 60 秒内有 10000 个更改。指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("stop-writes-on-bgsave-error yes")])]),t._v(" "),v("td",[t._v("默认情况下，如果启用了RDB快照（至少一个保存点）并且最新的后台保存失败，则Redis将停止接受写入操作")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("rdbcompression yes")])]),t._v(" "),v("td",[t._v("指定存储至本地数据库时是否压缩数据，默认为 yes，Redis 采用 LZF 压缩，如果为了节省 CPU 时间，可以关闭该选项，但会导致数据库文件变的巨大")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("rdbchecksum yes")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("dbfilename dump.rdb")])]),t._v(" "),v("td",[t._v("指定本地数据库文件名，默认值为 dump.rdb")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("dir /var/lib/redis")])]),t._v(" "),v("td",[t._v("指定本地数据库存放目录")])])])]),t._v(" "),v("h1",{attrs:{id:"_5-replication"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-replication"}},[t._v("#")]),t._v(" 5. REPLICATION")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("masterauth <master-password>")])]),t._v(" "),v("td",[t._v("当 master 服务设置了密码保护时，slav 服务连接 master 的密码")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("replica-serve-stale-data yes")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("replica-read-only yes")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("repl-diskless-sync no")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("repl-diskless-sync-delay 5")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("repl-disable-tcp-nodelay no")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("replica-priority 100")])]),t._v(" "),v("td")])])]),t._v(" "),v("h1",{attrs:{id:"_6-security"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-security"}},[t._v("#")]),t._v(" 6. SECURITY")]),t._v(" "),v("h1",{attrs:{id:"_7-clients"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-clients"}},[t._v("#")]),t._v(" 7. CLIENTS")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("maxclients 10000")])]),t._v(" "),v("td",[t._v("设置同一时间最大客户端连接数，默认无限制，Redis 可以同时打开的客户端连接数为 Redis 进程可以打开的最大文件描述符数，如果设置 maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis 会关闭新的连接并向客户端返回 max number of clients reached 错误信息")])])])]),t._v(" "),v("h1",{attrs:{id:"_8-memory-management"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-memory-management"}},[t._v("#")]),t._v(" 8. MEMORY MANAGEMENT")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("maxmemory <bytes>")])]),t._v(" "),v("td",[t._v("指定 Redis 最大内存限制，Redis 在启动时会把数据加载到内存中，达到最大内存后，Redis 会先尝试清除已到期或即将到期的 Key，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis 新的 vm 机制，会把 Key 存放内存，Value 会存放在 swap 区")])])])]),t._v(" "),v("h1",{attrs:{id:"_9-lazy-freeing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-lazy-freeing"}},[t._v("#")]),t._v(" 9. LAZY FREEING")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("lazyfree-lazy-eviction no；lazyfree-lazy-expire no；lazyfree-lazy-server-del no；replica-lazy-flush no")])]),t._v(" "),v("td")])])]),t._v(" "),v("h1",{attrs:{id:"_10-append-only-mode"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-append-only-mode"}},[t._v("#")]),t._v(" 10. APPEND ONLY MODE")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("appendonly no")])]),t._v(" "),v("td",[t._v("指定是否在每次更新操作后进行日志记录，Redis 在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为 redis 本身同步数据文件是按上面 save 条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为 no")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v('appendfilename "appendonly.aof"')])]),t._v(" "),v("td",[t._v("指定更新日志文件名，默认为 appendonly.aof")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("appendfsync everysec")])]),t._v(" "),v("td",[t._v("指定更新日志条件，共有 3 个可选值：no：表示等操作系统进行数据缓存同步到磁盘（快）always：表示每次更新操作后手动调用 fsync() 将数据写到磁盘（慢，安全）everysec：表示每秒同步一次（折中，默认值）")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("no-appendfsync-on-rewrite no")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("auto-aof-rewrite-percentage 100")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("auto-aof-rewrite-min-size 64mb")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("aof-load-truncated yes")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("aof-use-rdb-preamble yes")])]),t._v(" "),v("td")])])]),t._v(" "),v("h1",{attrs:{id:"_11-lua-scripting"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-lua-scripting"}},[t._v("#")]),t._v(" 11. LUA SCRIPTING")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("lua-time-limit 5000")])]),t._v(" "),v("td")])])]),t._v(" "),v("h1",{attrs:{id:"_12-redis-cluster"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-redis-cluster"}},[t._v("#")]),t._v(" 12. REDIS CLUSTER")]),t._v(" "),v("h1",{attrs:{id:"_13-slow-log"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13-slow-log"}},[t._v("#")]),t._v(" 13. SLOW LOG")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("slowlog-log-slower-than 10000")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("slowlog-max-len 128")])]),t._v(" "),v("td")])])]),t._v(" "),v("h1",{attrs:{id:"_14-latency-monitor"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-latency-monitor"}},[t._v("#")]),t._v(" 14. LATENCY MONITOR")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("latency-monitor-threshold 0")])]),t._v(" "),v("td")])])]),t._v(" "),v("h1",{attrs:{id:"_15-event-notification"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_15-event-notification"}},[t._v("#")]),t._v(" 15. EVENT NOTIFICATION")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v('notify-keyspace-events ""')])]),t._v(" "),v("td")])])]),t._v(" "),v("h1",{attrs:{id:"_16-advanced-config"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_16-advanced-config"}},[t._v("#")]),t._v(" 16. ADVANCED CONFIG")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("hash-max-ziplist-entries 512")])]),t._v(" "),v("td",[t._v("指定在超过一定的数量或者最大的元素超过某一临界值时，采用一种特殊的哈希算法")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("hash-max-ziplist-value 64")])]),t._v(" "),v("td",[t._v("指定在超过一定的数量或者最大的元素超过某一临界值时，采用一种特殊的哈希算法")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("list-max-ziplist-size -2")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("list-compress-depth 0")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("set-max-intset-entries 512")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("zset-max-ziplist-entries 128")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("zset-max-ziplist-value 64")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("hll-sparse-max-bytes 3000")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("stream-node-max-bytes 4096")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("stream-node-max-entries 100")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("activerehashing yes")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("client-output-buffer-limit normal 0 0 0")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("client-output-buffer-limit replica 256mb 64mb 60")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("client-output-buffer-limit pubsub 32mb 8mb 60")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("hz 10")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("dynamic-hz yes")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("aof-rewrite-incremental-fsync yes")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("rdb-save-incremental-fsync yes")])]),t._v(" "),v("td")])])]),t._v(" "),v("h1",{attrs:{id:"_17-active-defragmentation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_17-active-defragmentation"}},[t._v("#")]),t._v(" 17. ACTIVE DEFRAGMENTATION")])])}),[],!1,null,null,null);e.default=d.exports}}]);