(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1169:function(v,_,t){"use strict";t.r(_);var e=t(6),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"_1-redis-有了解么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis-有了解么"}},[v._v("#")]),v._v(" 1. Redis 有了解么？")]),v._v(" "),t("p",[v._v("Redis（Remote Dictionary Server远程字典服务）是一款高性能的分布式内存数据库，是基于内存运行并支持持久化的 NoSQL 数据库。")]),v._v(" "),t("p",[v._v("Redis 支持丰富的数据类型，支持数据持久化、事务、主从复制、哨兵模式......")]),v._v(" "),t("h2",{attrs:{id:"为什么要使用-redis-哪些业务场景中会使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-redis-哪些业务场景中会使用"}},[v._v("#")]),v._v(" 为什么要使用 Redis？哪些业务场景中会使用？")]),v._v(" "),t("p",[v._v("Redis 是目前最为人熟知的缓解高并发、提升高可用能力的手段之一，在提升服务器性能方面效果显著。\n在高并发场景下，其核心点在于数据库，引入缓存(或负载均衡、集群等策略)的目的都是在减轻数据库的压力，让更多原本打在数据库上的请求，在中间过程被拦截处理。")]),v._v(" "),t("p",[v._v("Redis 的优势：")]),v._v(" "),t("ul",[t("li",[v._v("读写性能优异：读的速度是 110000 次/s，写的速度是 81000 次/s")]),v._v(" "),t("li",[v._v("支持数据持久化：支持 AOF 和 RDB 两种持久化方式")]),v._v(" "),t("li",[v._v("支持事务：Redis 的所有操作都是原子性的，同时 Redis 还支持对几个操作合并后的复合操作原子性的执行")]),v._v(" "),t("li",[v._v("数据从结构丰富：String、Hash、Set、ZSet、List 等常用数据结构")]),v._v(" "),t("li",[v._v("支持主从复制：主机自动将数据同步到从机，可以进行读写分离")]),v._v(" "),t("li",[v._v("支持大量集群节点")])]),v._v(" "),t("p",[v._v("当用户第一次访问数据库中的某些数据，整个过程会比较缓慢，因为是从硬盘上读取数据。将该用户读取的数据存储到 Redis 中，这样在下一次访问这些数据时就可以直接从缓存中进行读取。\n同样的，我们可以直接将数据库中的部分数据转移到缓存当中，这样一部分请求就会直接打到缓存而不会访问数据库。\n当数据库中的数据改变后，我们同步的将缓存中的对应数据更新即可。")]),v._v(" "),t("p",[v._v("在日常业务中，例如热点词查询、实时排行榜数据、访问量点赞量统计等场景都可以引入 Redis 进行处理。")]),v._v(" "),t("h2",{attrs:{id:"redis-和-memcached-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-和-memcached-有什么区别"}},[v._v("#")]),v._v(" Redis 和 Memcached 有什么区别？")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th"),v._v(" "),t("th",[v._v("Redis")]),v._v(" "),t("th",[v._v("Memcached")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("类型")]),v._v(" "),t("td",[v._v("支持内存；非关系型数据库")]),v._v(" "),t("td",[v._v("支持内存；键值对形式；缓存形式")])]),v._v(" "),t("tr",[t("td",[v._v("数据类型")]),v._v(" "),t("td",[v._v("String、Hash、List、Set、Zset")]),v._v(" "),t("td",[v._v("文本型；二进制类型")])]),v._v(" "),t("tr",[t("td",[v._v("附加功能")]),v._v(" "),t("td",[v._v("发布/订阅模式、主从分区、序列化支持、脚本支持")]),v._v(" "),t("td",[v._v("多线程服务支持")])]),v._v(" "),t("tr",[t("td",[v._v("网络IO模型")]),v._v(" "),t("td",[v._v("单线程的多路 IO 复用模型")]),v._v(" "),t("td",[v._v("多线程、非阻塞 IO 模式")])]),v._v(" "),t("tr",[t("td",[v._v("持久化支持")]),v._v(" "),t("td",[v._v("RDB/AOF")]),v._v(" "),t("td",[v._v("不支持")])]),v._v(" "),t("tr",[t("td",[v._v("集群模式")]),v._v(" "),t("td",[v._v("原生支持 cluster 模式，可以实现主从复制、读写分离")]),v._v(" "),t("td",[v._v("没有原生集群模式，需要依靠客户端来实现往集群中分片的写入数据")])]),v._v(" "),t("tr",[t("td",[v._v("内存管理机制")]),v._v(" "),t("td",[v._v("并不是所有数据都储存在内存中，一些和牛没用的 value 存储在磁盘")]),v._v(" "),t("td",[v._v("数据一直储存在内存中，其将内存分割成特定长度的块来存储数据以完全解决内存碎片问题")])]),v._v(" "),t("tr",[t("td",[v._v("使用场景")]),v._v(" "),t("td",[v._v("复杂数据结构、有持久化和高可用的需求、value 存储内容较大(最大 512M)")]),v._v(" "),t("td",[v._v("纯 Key-Value 数据、大数据量、高并发量")])])])]),v._v(" "),t("p",[v._v("核心要点：")]),v._v(" "),t("ul",[t("li",[v._v("memcached 所有值均为简单的字符串；redis 支持更加丰富的数据结构")]),v._v(" "),t("li",[v._v("redis 速度比 memcached 快很多")]),v._v(" "),t("li",[v._v("redis 可以将数据持久化到硬盘，宕机断电可以恢复数据")])]),v._v(" "),t("h2",{attrs:{id:"redis-支持哪些数据类型-应用场景有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-支持哪些数据类型-应用场景有哪些"}},[v._v("#")]),v._v(" Redis 支持哪些数据类型？应用场景有哪些？")]),v._v(" "),t("ul",[t("li",[v._v("String\n"),t("ul",[t("li",[v._v("字符串 value 的最大值为 512M")]),v._v(" "),t("li",[v._v("常用来做一些计数功能的缓存")])])]),v._v(" "),t("li",[v._v("List\n"),t("ul",[t("li",[v._v("按插入顺序排序，可以添加一个元素到列表的头部或尾部")]),v._v(" "),t("li",[v._v("底层为一个链表")]),v._v(" "),t("li",[v._v("可以实现简单消息队列功能，做基于 redis 的分页功能")])])]),v._v(" "),t("li",[v._v("Set\n"),t("ul",[t("li",[v._v("字符串类型的无序集合")]),v._v(" "),t("li",[v._v("可用来全局去重")])])]),v._v(" "),t("li",[v._v("Zset\n"),t("ul",[t("li",[v._v("字符串类型的有序集合，每一个元素配有一个 score 来保持顺序")]),v._v(" "),t("li",[v._v("可以用来做排行榜应用或者进行范围查找")])])]),v._v(" "),t("li",[v._v("Hash\n"),t("ul",[t("li",[v._v("键值对集合")]),v._v(" "),t("li",[v._v("用来存放对象")])])])]),v._v(" "),t("h2",{attrs:{id:"redis-配置文件有了解么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-配置文件有了解么"}},[v._v("#")]),v._v(" Redis 配置文件有了解么？")]),v._v(" "),t("p",[v._v("常用模块如下：")]),v._v(" "),t("ul",[t("li",[v._v("NETWORK：配置 redis 服务器地址，端口，超时时间等")]),v._v(" "),t("li",[v._v("GENERAL：配置日志文件的路径和日志级别等")]),v._v(" "),t("li",[v._v("SNAPSHOTTING：RDB 持久化配置信息")]),v._v(" "),t("li",[v._v("REPLICATION：redis 集群配置信息")]),v._v(" "),t("li",[v._v("MEMORY MANAGEMENT：内存管理，包括数据过期删除策略等信息的设置")]),v._v(" "),t("li",[v._v("APPEND ONLY MODE：AOF 持久化配置信息")])]),v._v(" "),t("h1",{attrs:{id:"_2-redis-是单线程的么-为什么执行速度这么快"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis-是单线程的么-为什么执行速度这么快"}},[v._v("#")]),v._v(" 2. Redis 是单线程的么？为什么执行速度这么快？")]),v._v(" "),t("p",[v._v("redis 是单线程的。redis 的单线程指网络请求模块使用了一个线程，所以不需要考虑并发安全性。")]),v._v(" "),t("p",[v._v("但是对于需要依赖多个操作的复合操作来说，可能需要分布式锁。")]),v._v(" "),t("p",[v._v("redis 执行速度快基于以下原因：")]),v._v(" "),t("ul",[t("li",[v._v("基于内存实现，完全内存计算")]),v._v(" "),t("li",[v._v("单线程操作，避免上下文切换")]),v._v(" "),t("li",[v._v("多路 I/O 复用的线程模型，实现了一个线程监控多个 IO 流，及时响应请求")]),v._v(" "),t("li",[v._v("redis 对外部依赖小，属于轻量级的内存数据库")])]),v._v(" "),t("h1",{attrs:{id:"_3-使用-redis-可能出现的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用-redis-可能出现的问题"}},[v._v("#")]),v._v(" 3. 使用 Redis 可能出现的问题")]),v._v(" "),t("p",[v._v("缓存雪崩、缓存击穿、缓存穿透、数据库和缓存的双写一致性问题")]),v._v(" "),t("h3",{attrs:{id:"缓存雪崩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[v._v("#")]),v._v(" 缓存雪崩")]),v._v(" "),t("ul",[t("li",[v._v("概述：缓存雪崩指缓存在同一时间大面积的失效，而此时又有大量的请求发送到数据库上，导致数据库连接异常。")]),v._v(" "),t("li",[v._v("解决方法：可以给缓存设置不同的缓存时间，更新数据使用互斥锁，或者通过双缓存避免缓存雪崩。")])]),v._v(" "),t("h3",{attrs:{id:"缓存击穿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[v._v("#")]),v._v(" 缓存击穿")]),v._v(" "),t("ul",[t("li",[v._v("概述：redis 中存储的是热点数据，当高并发请求访问 redis 中的热点数据时，若 redis 中的数据过期了，就会造成缓存击穿现象，请求穿过缓存直接打在了数据库上。")]),v._v(" "),t("li",[v._v("解决方法：\n"),t("ul",[t("li",[v._v("方法1：根据实际的业务情况，在 Redis 中维护一个热点数据表，将其中的数据批量设置为永不过期(如前 1000 的热点数据)，并定时更新 top1000；")]),v._v(" "),t("li",[v._v("方法2：添加互斥锁。缓存击穿后，会有多个线程同时去数据库中查询某一个数据，那么我们可以在第一个到达数据库的查询请求上使用互斥锁来锁住它。其他的线程进行到这一步会因为没有获取到锁而阻塞。当第一个线程查询到对应的数据之后，将数据写入缓存。此时其他的请求检查缓存发现已经有响应的数据，便直接从缓存中返回对应数据。")])])])]),v._v(" "),t("h3",{attrs:{id:"缓存穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[v._v("#")]),v._v(" 缓存穿透")]),v._v(" "),t("ul",[t("li",[v._v("概述：故意去请求缓存中不存在的数据，导致请求全部打在数据库上，导致数据库异常。")]),v._v(" "),t("li",[v._v("解决方法：可以使用互斥锁，或者无论是否取到结果都将结果存入缓存，还可以使用有效的机制（例如布隆过滤器）来拦截不合法的 key 值。")])]),v._v(" "),t("h3",{attrs:{id:"数据库和缓存的双写一致性问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库和缓存的双写一致性问题"}},[v._v("#")]),v._v(" 数据库和缓存的双写一致性问题")]),v._v(" "),t("ul",[t("li",[v._v("概述：在高并发请求下容易导致数据不一致的问题，若业务需要强一致性，建议不使用缓存。在数据库中和缓存数据的删除或者写入过程中，如果有失败的情况，会导致数据的不一致。")]),v._v(" "),t("li",[v._v("解决方法：\n"),t("ul",[t("li",[v._v("双删延迟：可以先删除缓存数据，再更新数据库。最后再间隔固定的时间去再次删除缓存。")]),v._v(" "),t("li",[v._v("更新数据库产生的binlog订阅（使用canal）：如果上次删除缓存失败，则将有变化的 key 记录下来，并且尝试去不断的删除缓存。")])])])]),v._v(" "),t("h1",{attrs:{id:"_4-redis-的持久化方式有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-redis-的持久化方式有哪些"}},[v._v("#")]),v._v(" 4. Redis 的持久化方式有哪些？")]),v._v(" "),t("ul",[t("li",[v._v("RDB 持久化 (快照)\n"),t("ul",[t("li",[v._v("在某个时间点将所有数据生成快照，存放在硬盘上。当数据量很大时，这个过程很慢")]),v._v(" "),t("li",[v._v("可以将快照复制到其他的服务器从而创建具有相同数据的服务器副本")]),v._v(" "),t("li",[v._v("若系统故障宕机，将会丢失上一次快照之后所有的数据")])])]),v._v(" "),t("li",[v._v("AOF 持久化 (即时更新)\n"),t("ul",[t("li",[v._v("将所有的写命令添加到 AOF 文件 (Append Only File) 的末尾")]),v._v(" "),t("li",[v._v("使用 AOF 持久化需要设置同步选项，从而确保写命令同步到磁盘上的时机。这是因为对文件的写操作并不会马上将内容同步到磁盘，而是先存储到缓冲区，然后由操作系统决定何时同步到磁盘。同步频率包括：\n"),t("ul",[t("li",[v._v("always：每一个写命令都同步")]),v._v(" "),t("li",[v._v("everysec：每秒同步一次(最合适，可以保证服务器崩溃时最多只丢失一秒左右的数据且不会影响服务器性能)")]),v._v(" "),t("li",[v._v("no：由操作系统决定何时同步")])])])])])]),v._v(" "),t("h3",{attrs:{id:"持久化策略如何选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久化策略如何选择"}},[v._v("#")]),v._v(" 持久化策略如何选择？")]),v._v(" "),t("ul",[t("li",[v._v("AOF 更安全，可将数据及时同步到文件中，但需要较多的磁盘IO，AOF文件尺寸较大，文件内容恢复相对较慢也更加完整。")]),v._v(" "),t("li",[v._v("RDB 持久化，安全性较差，它是正常时期数据备份及 master-slave数据同步的最佳手段，文件尺寸较小并且恢复速度较快。")])]),v._v(" "),t("h1",{attrs:{id:"_5-redis-数据的过期回收策略与内存淘汰机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-redis-数据的过期回收策略与内存淘汰机制"}},[v._v("#")]),v._v(" 5. Redis 数据的过期回收策略与内存淘汰机制")]),v._v(" "),t("ul",[t("li",[v._v("过期策略主要用于处理过期的缓存数据")]),v._v(" "),t("li",[v._v("内存淘汰策略则用于处理内存不足时的需要申请额外空间的数据。")])]),v._v(" "),t("h3",{attrs:{id:"内存过期策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存过期策略"}},[v._v("#")]),v._v(" 内存过期策略")]),v._v(" "),t("p",[v._v("在 redis 中过期的 key 不会被立即从内存中删除，而是会同时以下列两种策略执行删除：")]),v._v(" "),t("ul",[t("li",[v._v("定期删除：每隔一段时间随机检查设置了过期时间的 key 并删除已经过期的 key，该策略维护一个定时器，消耗 CPU 资源；")]),v._v(" "),t("li",[v._v("惰性删除：当 key 被访问时检查该 key 的过期时间，若过期则删除，该策略的问题是已经过期但是未被访问的数据仍然保持在内存当中，消耗内存资源；")])]),v._v(" "),t("p",[v._v("如果使用定期删除策略漏掉了很多已经过期的 key，这些 key 还没有及时的访问，那么就会有大量过期的 key 保留在内存当中，导致空间占用，此时就需要内存淘汰策略。")]),v._v(" "),t("h3",{attrs:{id:"内存淘汰策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存淘汰策略"}},[v._v("#")]),v._v(" 内存淘汰策略")]),v._v(" "),t("p",[v._v("内存淘汰策略规定了如何淘汰旧数据以为新数据腾出足够的内存空间，其并不会影响过期 key 的处理，其包含下列几个机制：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("策略")]),v._v(" "),t("th",[v._v("描述")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("no eviction")]),v._v(" "),t("td",[v._v("当内存不足以容纳新写入的数据时，新写入的操作会报错")])]),v._v(" "),t("tr",[t("td",[v._v("all keys-lru")]),v._v(" "),t("td",[v._v("当内存不足以容纳新写入的数据时，在 key 空间中移除最近最少使用的 key (该策略最常用)")])]),v._v(" "),t("tr",[t("td",[v._v("all keys-random")]),v._v(" "),t("td",[v._v("当内存不足以容纳新写入的数据时，在 key 空间中随机移除某个 key")])]),v._v(" "),t("tr",[t("td",[v._v("volatile-lru")]),v._v(" "),t("td",[v._v("当内存不足以容纳新写入的数据时，在设置了过期时间的 key 中移除最近最少使用的 key")])]),v._v(" "),t("tr",[t("td",[v._v("volatile-random")]),v._v(" "),t("td",[v._v("当内存不足以容纳新写入的数据时，在设置了过期时间的 key 中随机移除某个 key")])]),v._v(" "),t("tr",[t("td",[v._v("volatile-ttl")]),v._v(" "),t("td",[v._v("当内存不足以容纳新写入的数据时，在设置了过期时间的 key 中，有更早过期时间的 key 优先被删除")])])])]),v._v(" "),t("h2",{attrs:{id:"简单介绍一下-lru-淘汰机制吧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单介绍一下-lru-淘汰机制吧"}},[v._v("#")]),v._v(" 简单介绍一下 LRU 淘汰机制吧")]),v._v(" "),t("p",[v._v("LRU (Least Recently Used) 算法：淘汰最近最少使用的。该算法根据数据的历史访问记录来进行淘汰数据，其核心思想为：如果数据最近被访问过，那么将来被访问的几率也就更高。")]),v._v(" "),t("p",[v._v("算法思路：")]),v._v(" "),t("ul",[t("li",[v._v("新数据插入到链表头部")]),v._v(" "),t("li",[v._v("每当缓存被命中时，就将该数据移动到链表头部")]),v._v(" "),t("li",[v._v("链表满时将链表尾部的数据丢弃")])]),v._v(" "),t("p",[v._v("在 Redis 服务其配置中保存了 lru 计数器 server.lrulock，该计数器定时更新，其值是根据 server.unixtine 计算并进行排序，选择最近一次使用时间最久远的数据进行删除。每一个 redis 对象都会设置相应的 lru，每一次访问数据该值都会更新。")]),v._v(" "),t("p",[v._v("在 Redis 中，LRU 算法是一个近似算法，默认情况下 Redis 会随机挑选 5 个键，从中选择一个最久未使用的 key 进行淘汰。\n在配置文件中可以配置 maxmemory-samples 项，该项配置的越大，消耗的时间越长，但结构也就更精确。")]),v._v(" "),t("h2",{attrs:{id:"如果-redis-的内存耗尽会怎样"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果-redis-的内存耗尽会怎样"}},[v._v("#")]),v._v(" 如果 Redis 的内存耗尽会怎样？")]),v._v(" "),t("p",[v._v("如果达到设置的内存上线，Redis 的写命令会返回错误信息，但是读命令会正常执行返回；如果配置了相应的内存淘汰策略，当内存达到上限时就会冲刷掉旧的内容。")]),v._v(" "),t("h2",{attrs:{id:"redis-如何进行内存优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-如何进行内存优化"}},[v._v("#")]),v._v(" Redis 如何进行内存优化？")]),v._v(" "),t("p",[v._v("尽可能地利用 Hash、List、Set、ZSet 等集合数据类型。尽可能地多使用 Hash，因为其使用的内存很小，所以在设计的时候应该尽量的将数据模型抽象到一个散列表当中。\n比如 web 项目中的用户对象，不要为这个用户的用户名、密码、昵称、电话、邮箱等设置单独的 key，而是应该将这个用户的所有信息存储到一张散列表当中。")]),v._v(" "),t("h1",{attrs:{id:"_6-redis-主从复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-redis-主从复制"}},[v._v("#")]),v._v(" 6. Redis 主从复制")]),v._v(" "),t("p",[v._v("当项目较大时，可以使用主从架构 Master/Slave 机制。其中 Master 以写为主，Slave 以读为主，Master 主节点更新后根据配置自动同步到从机 Slave 节点。")]),v._v(" "),t("p",[v._v("主从复制的原理包括旧版同步和命令传播，其代价是系统复制较重是会导致主从延迟，且根据 CAP 理论，无法同时保证高可用性和一致性。")]),v._v(" "),t("h1",{attrs:{id:"_7-redis-对事务的支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-redis-对事务的支持"}},[v._v("#")]),v._v(" 7. Redis 对事务的支持")]),v._v(" "),t("p",[v._v("redis 事务有三大特性：单独的隔离操作、没有隔离级别的概念、不保证原子性。")]),v._v(" "),t("ul",[t("li",[v._v("单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。")]),v._v(" "),t("li",[v._v("没有隔离级别的概念：队列中的命令没有提交之前都不会实际的被执行，因为事务提交前任何指令都不会被实际执行，也就不存在”事务内的查询要看到事务里的更新，在事务外查询不能看到”这个让人万分头痛的问题")]),v._v(" "),t("li",[v._v("不保证原子性：redis 同一个事务中如果有一条命令执行失败，其后的命令仍然会被执行，没有回滚")])]),v._v(" "),t("h3",{attrs:{id:"事务操作的相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务操作的相关命令"}},[v._v("#")]),v._v(" 事务操作的相关命令")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("命令")]),v._v(" "),t("th",[v._v("描述")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("discard")]),v._v(" "),t("td",[v._v("取消事务，放弃执行事务块内的所有命令")])]),v._v(" "),t("tr",[t("td",[v._v("exec")]),v._v(" "),t("td",[v._v("执行事务块内的所有命令")])]),v._v(" "),t("tr",[t("td",[v._v("multi")]),v._v(" "),t("td",[v._v("标记一个事务块的开始")])]),v._v(" "),t("tr",[t("td",[v._v("unwatch")]),v._v(" "),t("td",[v._v("取消watch命令对所有key的监视")])]),v._v(" "),t("tr",[t("td",[v._v("watch key [key...]")]),v._v(" "),t("td",[v._v("监视一个或者多个key，如果事务执行之前这些key被其他命令所改动，那么事务将会被打断")])])])]),v._v(" "),t("h1",{attrs:{id:"_8-介绍一下-redis-的哨兵模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-介绍一下-redis-的哨兵模式"}},[v._v("#")]),v._v(" 8. 介绍一下 Redis 的哨兵模式")]),v._v(" "),t("p",[v._v("哨兵模式的介绍：")]),v._v(" "),t("ul",[t("li",[v._v("Sentinel 进程用于监控 redis 集群中 master 主服务器的工作状态")]),v._v(" "),t("li",[v._v("在 master 主服务器发生故障时，可以实现 master 和 slave 服务器的切换，保证系统的高可用")])]),v._v(" "),t("p",[v._v("哨兵进程的作用：")]),v._v(" "),t("ul",[t("li",[v._v("通过发送命令，让 redis 服务器返回信息监控其运行状态，包括主服务器和从服务器")]),v._v(" "),t("li",[v._v("当哨兵检测到 master 宕机，会自动将 slave 转换成 master，然后通过发布订阅模式通知其它服务器，修改配置文件，切换主机")]),v._v(" "),t("li",[v._v("可以使用多个哨兵进行监控，各个哨兵之间还可以互相监控，形成多哨兵模式")])]),v._v(" "),t("h2",{attrs:{id:"介绍一下-redis-故障的自动切换过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-redis-故障的自动切换过程"}},[v._v("#")]),v._v(" 介绍一下 Redis 故障的自动切换过程")]),v._v(" "),t("p",[v._v("当主服务器宕机是，哨兵 1 首先检测到服务器宕机，但仅仅是哨兵 1 主观认为服务器不可用，这个现象称为主观下线。\n当其他的哨兵也检测到主服务器不可用，并且观察到的哨兵的数量达到一定值时，哨兵们就会进行一次投票，并根据投票的结果，由一个哨兵执行，切换主服务器。\n切换成功后，就会根据发布订阅模式，让各个哨兵把自己监控的从服务器切换主机，这个过程称为客观下线。")]),v._v(" "),t("h2",{attrs:{id:"说一下主观下线和客观下线的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说一下主观下线和客观下线的区别"}},[v._v("#")]),v._v(" 说一下主观下线和客观下线的区别")]),v._v(" "),t("ul",[t("li",[v._v("主观下线：指单个 Sentinel 实例对服务器做出下线判断")]),v._v(" "),t("li",[v._v("客观下线：指多个 Sentinel 实例对同一个服务器做出主观下线判断，并通过 SENTINEL is-master-down-by-addr 命令相互交流之后，得出服务器的下线判断")])]),v._v(" "),t("p",[v._v("从主观下线到客观下线状态的转换并没有使用严格的法定人数算法(strong quorom algorithm)，而是使用了流言协议：\n如果 Sentinel 在给定的时间范围内，从其他的 Sentinel 接受了足够数量的主服务器下线报告，那么 Sentinel 就会将主服务器的状态从主观下线转换为客观下线。\n如果之后其他的 Sentinel 不在报告主服务器已下线，那么客观下线的状态就会被移除。")]),v._v(" "),t("h2",{attrs:{id:"说一下哨兵进程的工作方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说一下哨兵进程的工作方式"}},[v._v("#")]),v._v(" 说一下哨兵进程的工作方式")]),v._v(" "),t("ul",[t("li",[v._v("每个 Sentinel 进程以每秒一次的频率向整个集群中的 master 主服务器、slave 从服务器以及其它的 Sentinel 哨兵发送一个 PING 命令")]),v._v(" "),t("li",[v._v("如果某一个实例距离最后一次有效回复 PING 命令的时间超过 down-after-milliseconds 属性所规定的值，则该实例就会被 Sentinel 标记为主观下线")]),v._v(" "),t("li",[v._v("如果一个 master 主服务器被标记为主观下线，则正在监视该 master 服务器的所有 Sentinel 都要以每秒一次的频率确认 master 主服务器的确进入了主观下线状态")]),v._v(" "),t("li",[v._v("当有足够数量(大于配置中数值)的 Sentinel 进程在指定的时间范围内确认 master 主服务器进入了主观下线状态，则 master 主服务器就会被标记为客观下线状态")]),v._v(" "),t("li",[v._v("若没有足够数量的 Sentinel 进程同意 master 主服务器下线，则 master 的客观下线状态就会被移除；若 master 重新向 Sentinel 进程发送有效回复，则 master 的主观下线状态就会被移除")])])])}),[],!1,null,null,null);_.default=s.exports}}]);