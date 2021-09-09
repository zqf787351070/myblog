(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1168:function(a,v,e){"use strict";e.r(v);var t=e(6),r=Object(t.a)({},(function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_1-jvm-中的内存是怎么划分的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-jvm-中的内存是怎么划分的"}},[a._v("#")]),a._v(" 1. JVM 中的内存是怎么划分的？")]),a._v(" "),t("p",[a._v("JVM 中的内存主要划分为5个区域，即方法区、堆内存、程序计数器、虚拟机栈、本地方法栈")]),a._v(" "),t("p",[t("img",{attrs:{src:e(658),alt:"c3b0bf5b7cfc5cf0ef5af7419c3507b4.png"}})]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("内存区域")]),a._v(" "),t("th",[a._v("描述")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("方法区")]),a._v(" "),t("td",[a._v("方法区是一个线程共享的区域。常量、静态变量以及 JIT 编译后的代码都在方法区。其主要用于存储已经被虚拟机加载的类信息，也称永久代。可以通过 "),t("code",[a._v("-XX：MaxPermSize")]),a._v(" 来控制上限")])]),a._v(" "),t("tr",[t("td",[a._v("堆内存")]),a._v(" "),t("td",[a._v("堆内存是垃圾回收的主要场所，也是线程共享的区域。主要用来存储创建的对象实例。可通过 "),t("code",[a._v("-Xmx 和 -Xms")]),a._v(" 来控制大小")])]),a._v(" "),t("tr",[t("td",[a._v("虚拟机栈")]),a._v(" "),t("td",[a._v("虚拟机栈内存中主要保存局部变量、基本数据类型变量以及堆内存中某个对象的引用变量。每个方法在执行的同时都会创建一个栈帧（Stack Frame）用于存储局部变量表、操作数栈、方法出入口信息等。栈中的栈帧随着方法的进入和退出有条不紊的执行着入栈和出栈的操作")])]),a._v(" "),t("tr",[t("td",[a._v("程序计数器")]),a._v(" "),t("td",[a._v("程序计数器是当前线程执行的字节码的位置指示器。字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令。这是内存当中唯一一个没有规定任何OutOfMemoryError的区域")])]),a._v(" "),t("tr",[t("td",[a._v("本地方法栈")]),a._v(" "),t("td",[a._v("为 JVM 提供 native 方法的服务")])])])]),a._v(" "),t("h1",{attrs:{id:"_2-可以说一下对象创建过程中的内存分配么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-可以说一下对象创建过程中的内存分配么"}},[a._v("#")]),a._v(" 2. 可以说一下对象创建过程中的内存分配么？")]),a._v(" "),t("p",[a._v("一般情况下，我们通过 new 指令来创建对象，当虚拟机遇到 new 指令的时候，会去检查这个指令的参数能否在常量池中定位到某个类的符号引用，并且检查这个符号引用的代表类是否已经被加载、解析和初始化。若没有，则会执行类加载过程。")]),a._v(" "),t("p",[a._v("通过执行类的加载、验证、准备、解析、初始化等步骤，完成类的加载，此时就会为该对象进行内存分配，即把一块确定大小的内存从Java堆中划分出来，在所分配的内存上完成对象的创建工作。")]),a._v(" "),t("p",[t("img",{attrs:{src:e(659),alt:"JVM02.png"}})]),a._v(" "),t("h2",{attrs:{id:"对象的内存分配的两种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象的内存分配的两种方式"}},[a._v("#")]),a._v(" 对象的内存分配的两种方式")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("指针碰撞方式：\n假设Java堆中的内存是绝对规整的，用过的内存在一边，未使用的内存在一边，中间有一个指示指针，那么所有的内存分配就是把这个指针向空闲内存的方向移动一段与要创建的对象大小相等的一段区域。")])]),a._v(" "),t("li",[t("p",[a._v("空闲列表方式：\n如果Java堆内存中不是规整的，已使用和未使用的内存相互交错，那么虚拟机就必须维护一个列表来记录哪一块内存是可用的，在分配内存的时候通过查表的方式找到一块足够大的空间来分配对象实例，并更新列表上的记录。")])])]),a._v(" "),t("p",[a._v("注意：Java堆内存是否规整是由所使用的垃圾收集器是否拥有压缩功能来决定的。")]),a._v(" "),t("h2",{attrs:{id:"内存的分配如何保证线程安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存的分配如何保证线程安全"}},[a._v("#")]),a._v(" 内存的分配如何保证线程安全？")]),a._v(" "),t("ul",[t("li",[a._v("对分配内存空间的动作进行同步处理，通过 CAS + 失败重试 的方式保证更新指针操作的原子性。")]),a._v(" "),t("li",[a._v("把分配内存的动作按照线程分配在不同的空间之中，即预先给每一个线程都划分一小段的内存空间，称为本地线程分配缓存 (TLAB)，只有当 TLAB 用光并重新分配 TLAB 的时候，才需要同步锁定。虚拟机是否使用 TLAB 可以通过 "),t("code",[a._v("-XX: +/-UserTLAB")]),a._v(" 参数来确定。")])]),a._v(" "),t("h2",{attrs:{id:"对象在何时被销毁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象在何时被销毁"}},[a._v("#")]),a._v(" 对象在何时被销毁？")]),a._v(" "),t("ul",[t("li",[a._v("类在程序运行的时候就会被加载，方法则是在执行的时候才会被加载")]),a._v(" "),t("li",[a._v("静态变量在类加载的时候创建，在整个程序结束时按序销毁；")]),a._v(" "),t("li",[a._v("实例变量在实例化对象时创建，在对象销毁时销毁；")]),a._v(" "),t("li",[a._v("局部变量在局部范围内使用时创建，跳出局部范围是销毁；")])]),a._v(" "),t("h1",{attrs:{id:"_3-对象被访问到的时候是如何被找到的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-对象被访问到的时候是如何被找到的"}},[a._v("#")]),a._v(" 3. 对象被访问到的时候是如何被找到的？")]),a._v(" "),t("p",[a._v("当创建一个对象的时候，栈内存中会有一个引用变量。指向堆内存中的某个对象实例。")]),a._v(" "),t("p",[a._v("Java虚拟机中并没有规定这个引用变量应该以何种方式去访问和定位堆内存中的具体对象，目前常见的对象访问方式有两种：句柄访问和直接指针访问")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("句柄访问：\n在JVM堆内存中划分一块区域作为句柄池，句柄中包含了对象实例数据与类型数据各自的具体地址信息。引用变量中存储的就是对象的句柄地址。句柄访问方式不直接，访问速度较慢。")])]),a._v(" "),t("li",[t("p",[a._v("直接指针访问：\n引用变量中存储的就是对象的直接地址，通过指针可以直接访问对象。直接指针访问方式节省了一次指针定位的时间开销，速度较快。HotSpot虚拟机采用直接指针方式进行对象的访问。")])])]),a._v(" "),t("h1",{attrs:{id:"_4-内存分配与垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-内存分配与垃圾回收"}},[a._v("#")]),a._v(" 4. 内存分配与垃圾回收")]),a._v(" "),t("p",[a._v("JVM的内存可以分为堆内存和非堆内存，其中堆内存又可以分为老年代和年轻代，其中年轻代又可以进一步分为一个 Eden(伊甸园区) 和两个 Survivor(幸存区)。")]),a._v(" "),t("p",[t("img",{attrs:{src:e(660),alt:"f6c8034fbd5699a079cfa3da4371a96e.png"}})]),a._v(" "),t("h3",{attrs:{id:"jvm-堆内存的分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-堆内存的分配"}},[a._v("#")]),a._v(" JVM 堆内存的分配")]),a._v(" "),t("ul",[t("li",[a._v("JVM 初始分配的堆内存由 "),t("code",[a._v("-Xms")]),a._v(" 指定，默认为物理内存的1/64；")]),a._v(" "),t("li",[a._v("JVM 最大分配的堆内存由 "),t("code",[a._v("-Xmx")]),a._v(" 指定，默认为物理内存的1/4；")])]),a._v(" "),t("p",[a._v("默认当空余的堆内存小于40%时，JVM就会增大堆直到 -Xmx 的最大限制；当空余的堆内存小大于70%时，JVM就会减少堆直到 -Xms 的最小限值。因此，我们一般设置 -Xms 与 -Xmx 相等，以避免在每一次GC之后都调整堆的大小。")]),a._v(" "),t("p",[a._v("通过参数 "),t("code",[a._v("-Xmn2G")]),a._v(" 可以设置年轻代的大小为2G。通过参数 "),t("code",[a._v("-XX:SurvivorRatio")]),a._v(" 可以设置年轻代中伊甸区与幸存区的比值（设置为 8 就表示伊甸区：幸存区 from：幸存区 to = 8：1：1）")]),a._v(" "),t("h3",{attrs:{id:"jvm-非堆内存的分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-非堆内存的分配"}},[a._v("#")]),a._v(" JVM 非堆内存的分配")]),a._v(" "),t("ul",[t("li",[a._v("使用 "),t("code",[a._v("-XX:PermSize")]),a._v(" 设置非堆内存初始值，默认为物理内存地址的1/64；")]),a._v(" "),t("li",[a._v("使用 "),t("code",[a._v("-XX:MaxPermSize")]),a._v(" 设置最大非堆内存的大小，默认为物理内存的1/4")])]),a._v(" "),t("h2",{attrs:{id:"堆内存上对象的分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆内存上对象的分配"}},[a._v("#")]),a._v(" 堆内存上对象的分配")]),a._v(" "),t("p",[a._v("我们创建的对象会优先在 Eden 区分配，如果是较大的对象则可以直接进入老年代存放。虚拟机提供一个 "),t("code",[a._v("-XX:PretenureSize Threshold")]),a._v(" 参数，当对象大于该阈值时，就直接在老年代中分配，以避免在 Eden 区和 Survivor 区发生大量的内存拷贝。")]),a._v(" "),t("p",[a._v("长期存活的对象将进入老年代，每一次的 MinorGC，进入幸存区的对象的年龄就+1。通过参数 "),t("code",[a._v("-XX:MaxTenuring Threshold")]),a._v(" 可以设置晋升年龄，默认为15。")]),a._v(" "),t("h2",{attrs:{id:"堆内存上对象的回收-垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆内存上对象的回收-垃圾回收"}},[a._v("#")]),a._v(" 堆内存上对象的回收(垃圾回收)")]),a._v(" "),t("p",[a._v("垃圾回收主要是完成清理对象，整理内存的工作，主要分为年轻代区域发生的 MinorGC 以及老年代发生的 FullGC。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Minor GC：\n对象优先在 Eden 区域中分配，当 Eden 区空间不足时，虚拟机将发生一次 Minor GC。因为 Java 大多数对象都是朝生夕灭的，故 Minor GC 发生非常频繁，速度也很快。")])]),a._v(" "),t("li",[t("p",[a._v("Full GC：\n当老年代没有足够的空间时就会发生 Full GC，发生 Full GC 一般都会伴随着一次 Minor GC。")])])]),a._v(" "),t("h3",{attrs:{id:"jvm-在什么时候会进行-gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-在什么时候会进行-gc"}},[a._v("#")]),a._v(" JVM 在什么时候会进行 GC？")]),a._v(" "),t("p",[a._v("JVM 常在一下几种场景进行 GC 操作：")]),a._v(" "),t("ul",[t("li",[a._v("在 CPU 空闲时自动进行回收；")]),a._v(" "),t("li",[a._v("主动调用 System.gc() 后尝试进行回收，真正是否回收由 JVM 决定；")]),a._v(" "),t("li",[a._v("Eden 区已满或者新创建的对象大小大于 Eden 区剩余的空间大小，此时执行 Minor GC；")]),a._v(" "),t("li",[a._v("升级到老年代的对象大小大于老年代剩余的空间大小，此时执行 Full GC；或者 Young GC 中发生 promotion failure 时强制 Full GC；")]),a._v(" "),t("li",[a._v("堆内存存储满了之后进行 GC，若 GC 和非 GC 的时间比超过了 GC TimeRatio 的限制，将引发 OOM；")])]),a._v(" "),t("h3",{attrs:{id:"动态对象年龄判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态对象年龄判断"}},[a._v("#")]),a._v(" 动态对象年龄判断")]),a._v(" "),t("p",[a._v("如果 Survivor 空间中相同年龄所有对象的大小总和大于 Survivor 空间的一半，则所有年龄大于该年龄的对象就可以晋升到老年代而不必等到阈值年龄。")]),a._v(" "),t("h3",{attrs:{id:"空间分配担保"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#空间分配担保"}},[a._v("#")]),a._v(" 空间分配担保")]),a._v(" "),t("p",[a._v("发生 Minor GC 时，虚拟机会检测之前每一次晋升到老年代的对象的平均大小是否大于老年代的剩余空间大小。如果大于，则进行一次 Full GC；如果小于，则首先查看 HandlePromitionFailure 设置是否允许担保失败，如果允许，则只会进行一次 Minor GC，若不允许，则进行一次 Full GC。")]),a._v(" "),t("h1",{attrs:{id:"_5-jvm如何判断一个对象是否应该被回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-jvm如何判断一个对象是否应该被回收"}},[a._v("#")]),a._v(" 5. JVM如何判断一个对象是否应该被回收？")]),a._v(" "),t("p",[a._v("判断一个对象是否应该被回收，主要看该对象是否还有引用。判断对象是否还存在引用的方法包括引用计数法、root根搜索法")]),a._v(" "),t("h3",{attrs:{id:"引用计数法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用计数法"}},[a._v("#")]),a._v(" 引用计数法")]),a._v(" "),t("p",[a._v("一种古老的回收算法。某对象有一个引用，就增加一个计数；删除一个引用，就减少一个计数。")]),a._v(" "),t("p",[a._v("垃圾回收时，只需要回收计数为 0 的对象。")]),a._v(" "),t("p",[a._v("该算法的致命问题是无法处理循环引用问题")]),a._v(" "),t("h3",{attrs:{id:"root-根搜索法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#root-根搜索法"}},[a._v("#")]),a._v(" root 根搜索法")]),a._v(" "),t("p",[a._v("该方法的基本思路就是通过一系列的可以作为 root 的对象作为起始点，以这些节点为根向下搜索。若一个对象没有任何 root 节点向下搜索的引用时，则证明该对象是可以被回收的。")]),a._v(" "),t("p",[a._v("以下对象会被认为是 root 对象：")]),a._v(" "),t("ul",[t("li",[a._v("栈内存中引用的对象")]),a._v(" "),t("li",[a._v("方法区中静态引用和常量引用指向的对象")]),a._v(" "),t("li",[a._v("被启动类加载的类和创建的对象")]),a._v(" "),t("li",[a._v("native 方法中 JNI 引用的对象")])]),a._v(" "),t("p",[a._v("注意：可达性算法中的不可达对象不是立即死亡的。对线被系统宣告死亡要经历两次标记过程：")]),a._v(" "),t("ol",[t("li",[a._v("经可达性计算发现没有与 GC root 相连接的引用链")]),a._v(" "),t("li",[a._v("在虚拟机自动建立的 Finalizer 队列中判断是否需要执行 finalize() 方法")])]),a._v(" "),t("p",[a._v("当对象不可达时，GC 首先会判断该对象是否覆盖了 finalize() 方法，若未覆盖，则直接回收；否则，若对象未执行过 finalize() 方法（每个对象只能触发一次），则将其放入 Finalizer 队列，由一低优先级线程执行该队列中对象的 finalize() 方法。执行完毕后，GC 会再次判断对象是否可达，若不可达，执行回收；否则的对象复活")]),a._v(" "),t("p",[a._v("由于 finalize() 方法运行代价高，不确定性大，无法保证各个对象的调用顺序，故不推荐使用。")]),a._v(" "),t("h1",{attrs:{id:"_6-对象的引用有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-对象的引用有哪些"}},[a._v("#")]),a._v(" 6. 对象的引用有哪些？")]),a._v(" "),t("p",[a._v("如果 reference 类型的数据中存储的数值代表的是另外一块内存的起始地址，就称这块内存代表一个引用。")]),a._v(" "),t("p",[a._v("JDK1.2 以后将引用分为强引用、软引用、弱引用和虚引用四种。")]),a._v(" "),t("ul",[t("li",[a._v("强引用：只要强引用存在，垃圾收集器就永远不会回收掉被引用的对象")]),a._v(" "),t("li",[a._v("软引用：通过 SoftReference 类来实现软引用，当内存不足时，软引用会被垃圾回收")]),a._v(" "),t("li",[a._v("弱引用：通过 WeakReference 类来实现弱引用，每一次垃圾回收都会回收掉弱引用")]),a._v(" "),t("li",[a._v("虚引用：又称为幽灵引用或幻影引用，通过 PhantomRefeence 类实现。设置虚引用只是为了对象被回收时会收到一个系统通知。（典型体现：释放直接内存所分配的内存）")])]),a._v(" "),t("h1",{attrs:{id:"_7-jvm的垃圾回收算法有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-jvm的垃圾回收算法有哪些"}},[a._v("#")]),a._v(" 7. JVM的垃圾回收算法有哪些？")]),a._v(" "),t("p",[a._v("HotSpot 虚拟机采用 root根搜索方法 来进行内存回收，常见的算法有标记-清除算法、复制算法、标记-整理算法")]),a._v(" "),t("p",[a._v("年轻代 GC 一般采用复制算法；老年代 GC 采用标记-清除和标记-清理算法。")]),a._v(" "),t("h3",{attrs:{id:"标记-清除算法-mark-sweep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除算法-mark-sweep"}},[a._v("#")]),a._v(" 标记-清除算法 (Mark-Sweep)")]),a._v(" "),t("p",[a._v("标记-清除算法执行分两个阶段：")]),a._v(" "),t("ul",[t("li",[a._v("第一阶段从引用根节点开始标记所有被引用的对象")]),a._v(" "),t("li",[a._v("第二阶段遍历整个堆，把未标记的对象清除")])]),a._v(" "),t("p",[a._v("此算法需要暂停整个应用 (STW)，并且会产生内存碎片。")]),a._v(" "),t("p",[t("img",{attrs:{src:e(661),alt:"85316615f78d1c819d8585e662b69e5a.png"}})]),a._v(" "),t("h3",{attrs:{id:"复制算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制算法"}},[a._v("#")]),a._v(" 复制算法")]),a._v(" "),t("p",[a._v("复制算法将内存空间划分为两个相等的区域，每次只使用其中一个区域。")]),a._v(" "),t("p",[a._v("垃圾回收时，遍历当前正在使用的区域，把正在使用的对象复制到另一个区域当中。")]),a._v(" "),t("p",[a._v("复制算法每次只处理正在使用中的对象，因此复制成本较小，同时该算法将对象复制过去之后还可以进行相应的内存整理，不会出现“碎片”问题。")]),a._v(" "),t("p",[a._v("该算法的缺点就是需要两倍的内存空间。\n"),t("img",{attrs:{src:e(662),alt:"7298c8e7128044f1f1b69f4f35d54e15.png"}})]),a._v(" "),t("h3",{attrs:{id:"标记-整理算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-整理算法"}},[a._v("#")]),a._v(" 标记-整理算法")]),a._v(" "),t("p",[a._v("标记-清理算法整合了标记-清除算法和复制算法的优点，同样分为两阶段：")]),a._v(" "),t("ul",[t("li",[a._v("第一阶段从根节点开始标记所有的被引用对象")]),a._v(" "),t("li",[a._v("第二阶段遍历整个堆，清除未标记对象并把存活的对象“压缩”到堆中的一块，顺序排放。")])]),a._v(" "),t("p",[a._v("此算法避免了标记-清除算法的“碎片问题”，同时也解决了复制算法“空间占用”的问题。")]),a._v(" "),t("p",[t("img",{attrs:{src:e(663),alt:"9f83876f334bfc02494dcbf755c7dfe5.png"}})]),a._v(" "),t("h1",{attrs:{id:"_8-jvm中的垃圾收集器有了解么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-jvm中的垃圾收集器有了解么"}},[a._v("#")]),a._v(" 8. JVM中的垃圾收集器有了解么？")]),a._v(" "),t("p",[a._v("JVM中的垃圾收集器主要包括7种：Serial, Serial Old, ParNew, Parallel Scavenge, Parallel Old, CMS, G1")]),a._v(" "),t("p",[t("img",{attrs:{src:e(664),alt:"abf1985b48e0de54720bac13a022caad.png"}})]),a._v(" "),t("h2",{attrs:{id:"serial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serial"}},[a._v("#")]),a._v(" Serial")]),a._v(" "),t("p",[a._v("Serial 是一个单线程的垃圾收集器，在执行垃圾回收的时候需要 Stop The World。")]),a._v(" "),t("p",[a._v("Serial 是当虚拟机运行在 Client 模式下时默认采用的新生代收集器。")]),a._v(" "),t("p",[a._v("Serial 的优点是简单高效，对于限定的单个 CPU 环境来说，Serial 收集器没有多线程交互的开销。")]),a._v(" "),t("h2",{attrs:{id:"serial-old"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serial-old"}},[a._v("#")]),a._v(" Serial Old")]),a._v(" "),t("p",[a._v("Serial Old 是 Serial 的老年代版本，同样是一个单线程收集器。")]),a._v(" "),t("p",[a._v("Serial Old 主要也是给 Client 模式下的虚拟机使用。")]),a._v(" "),t("p",[a._v("在 Server 模式下存在主要是作为 CMS 垃圾回收器的后备预案，当 CMS 并发收集发生 Concurrent Mode Failure 时使用")]),a._v(" "),t("h2",{attrs:{id:"parnew"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parnew"}},[a._v("#")]),a._v(" ParNew")]),a._v(" "),t("p",[a._v("ParNew 是 Serial 收集器的多线程版本。")]),a._v(" "),t("p",[a._v("其新生代收集是并行的(多线程)，采用复制算法。")]),a._v(" "),t("p",[a._v("可以使用 "),t("code",[a._v("-XX:UserParNewGC")]),a._v(" 指令使用该收集器；使用 "),t("code",[a._v("-XX:ParallelGCThreads")]),a._v(" 限制线程数量。")]),a._v(" "),t("h2",{attrs:{id:"parallel-scavenge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parallel-scavenge"}},[a._v("#")]),a._v(" Parallel Scavenge")]),a._v(" "),t("p",[a._v("Parallel Scavenge 是一种新生代收集器，使用复制算法，是并行的多线程收集器。")]),a._v(" "),t("p",[a._v("Parallel Scavenge 的特点是更加关注吞吐量（吞吐量理解为cpu用于执行用户代码的时间与cpu总消耗时间的比值）。")]),a._v(" "),t("p",[a._v("可以通过 "),t("code",[a._v("-XX:MaxGCPauseMilis")]),a._v(" 参数控制最大垃圾收集停顿时间；通过 "),t("code",[a._v("-XX: GCTimeRatio")]),a._v(" 参数直接设置吞吐量大小； 通过 "),t("code",[a._v("-XX:+UseAdaptiveSizePolicy")]),a._v(" 参数可以打开GC自适应调节策略。")]),a._v(" "),t("p",[a._v("GC 自适应调节策略是 Parallel Scavenge 与 ParNew 的主要区别之一，该参数开启后虚拟机会根据系统的运行情况收集性能监控信息，动态的调整虚拟机参数以提供最合适的停顿时间或者最大的吞吐量。")]),a._v(" "),t("h2",{attrs:{id:"parallel-old"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parallel-old"}},[a._v("#")]),a._v(" Parallel Old")]),a._v(" "),t("p",[a._v("Parallel Old 是 Parallel Scavenge 收集器的老年代版本，使用多线程和标记-整理算法。")]),a._v(" "),t("h2",{attrs:{id:"cms-concurrent-mark-sweep-★"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cms-concurrent-mark-sweep-★"}},[a._v("#")]),a._v(" CMS (Concurrent Mark Sweep) ★")]),a._v(" "),t("p",[a._v("CMS 收集器是一种以获取最短回收停顿时间为目标的收集器，基于标记-清除算法实现，是一种老年代收集器，通常与 ParNew 一起使用。")]),a._v(" "),t("h3",{attrs:{id:"cms-收集器的垃圾回收过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cms-收集器的垃圾回收过程"}},[a._v("#")]),a._v(" CMS 收集器的垃圾回收过程")]),a._v(" "),t("ol",[t("li",[a._v("初始标记：需要 STW，初始标记仅仅是标记一下 GC root 可以直接关联到的对象，速度很快。")]),a._v(" "),t("li",[a._v("并发标记：这是主要的标记过程，该过程与用户线程并发执行。")]),a._v(" "),t("li",[a._v("重新标记：需要STW，为了修正并发标记器件因用户线程继续运行导致标记变动的那一部分对象的标记记录。")]),a._v(" "),t("li",[a._v("并发清除：和用户线程并发执行，基于标记结果来清理对象。")])]),a._v(" "),t("p",[t("img",{attrs:{src:e(665),alt:"66c470abd9b08318e3601da5f87a97d5.png"}})]),a._v(" "),t("h3",{attrs:{id:"cms-垃圾回收器的优缺点分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cms-垃圾回收器的优缺点分析"}},[a._v("#")]),a._v(" CMS 垃圾回收器的优缺点分析")]),a._v(" "),t("p",[a._v("CMS 以降低垃圾回收的停顿时间为目的，具有并发收集，停顿时间低的优点。")]),a._v(" "),t("p",[a._v("缺点主要包括：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("对CPU资源敏感，并发标记与并发清理阶段与用户线程一起运行，当CPU数较小是，性能容易出现问题")])]),a._v(" "),t("li",[t("p",[a._v("收集过程中会产生浮动垃圾。不可以在老年代的内存不够用的时候才进行垃圾回收，必须提前进行垃圾收集。\n可以通过参数 "),t("code",[a._v("-XX:CMSInitiatingOccupancyFraction")]),a._v(" 的值来控制内存使用的百分比。如果该值设置的过高，那么 CMS 运行期间预留的内存可能无法满足程序的需要，会出现 Concurrent Mode Failure，之后就会使用 Serial Old 作为老年代收集器，这将导致更长时间的停顿。")])]),a._v(" "),t("li",[t("p",[a._v("标记-清除算法会产生内存碎片。\n可以使用 "),t("code",[a._v("-XX:UseCMSCompactAtFullCollection")]),a._v(" 来控制是否开启内存整理（无法并发，默认开启）。\n参数 "),t("code",[a._v("-XX:CMSFullGCsBeforeCompaction")]),a._v(" 用于设置执行多少次不压缩的 FullGC 后就要进行一次带压缩的内存碎片整理（默认为0）。")])])]),a._v(" "),t("h3",{attrs:{id:"浮动垃圾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浮动垃圾"}},[a._v("#")]),a._v(" 浮动垃圾")]),a._v(" "),t("p",[a._v("由于在清理阶段垃圾回收是与用户进程并发执行，所以有些垃圾可能会在回收完成的时候产生，即所谓的Floating Garbage，这些垃圾需要在下次垃圾回收的时候才能被清理。")]),a._v(" "),t("p",[a._v("所以，并发收集器一般需要20%的预留空间用于这些浮动垃圾。")]),a._v(" "),t("h2",{attrs:{id:"g1-garbage-first"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g1-garbage-first"}},[a._v("#")]),a._v(" G1 (Garbage-First)")]),a._v(" "),t("p",[a._v("G1 取消了新生代和老年代，而是将堆划分为若干的区域，但其仍然属于分代收集器，区域的一部分包含新生代，新生代采用复制算法，老年代采用标记-整理算法。")]),a._v(" "),t("p",[a._v("通过将 JVM 堆内存划分成一个个的区域 (region)，G1 可以避免在 Java 堆中进行全区域的垃圾收集。G1 会根据各个 region 内的垃圾堆积的价值大小（回收所获得的的空间大小以及回收所需时间的经验预估值），在后台维护一个优先列表，每一次都优先回收价值最大的 region。")]),a._v(" "),t("p",[a._v("G1 收集器的特点：")]),a._v(" "),t("ul",[t("li",[a._v("并行与并发：G1 能充分利用多 CPU、多核环境下的硬件优势以缩短 STW，是并发的收集器")]),a._v(" "),t("li",[a._v("分代收集：G1 不需要其他收集器就可以独立管理整个 GC 堆，能够采取不同的方式去处理新建对象、存活一段时间的对象以及熬过多次 GC 的对象")]),a._v(" "),t("li",[a._v("空间整合：G1 从整体来看属于标记-整理算法；从局部上看是基于复制算法。G1 运作期间不会产生内存空间碎片。")]),a._v(" "),t("li",[a._v("可预测的停顿：能够建立可以预测的停顿时间模型，预测停顿时间")])]),a._v(" "),t("p",[a._v("与 CMS 类似，G1 的垃圾回收工作也分为四个阶段：")]),a._v(" "),t("ul",[t("li",[a._v("初始标记")]),a._v(" "),t("li",[a._v("并发标记")]),a._v(" "),t("li",[a._v("最终标记")]),a._v(" "),t("li",[a._v("筛选回收：该阶段首先对各个 region 的回收价值和成本进行预估计算，根据用户期望的GC停顿时间来制定回收计划")])]),a._v(" "),t("h1",{attrs:{id:"_9-jvm-常用的内存调优命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-jvm-常用的内存调优命令"}},[a._v("#")]),a._v(" 9. JVM 常用的内存调优命令")]),a._v(" "),t("p",[a._v("JVM 在内存调优方面，提供了几个常用命令，分别为 jps、jinfo、jstack、jmap、jstat")]),a._v(" "),t("ul",[t("li",[a._v("jps：主要用来输出 JVM 中运行的进程状态信息。一般使用 jps 命令来查看进程的状态信息，包括 JVM 启动参数等")])]),a._v(" "),t("p",[t("img",{attrs:{src:e(666),alt:"33b59638e3d931e3d0c57d3c0fd6406e.png"}})]),a._v(" "),t("ul",[t("li",[a._v("jinfo：主要用来观察进程环境参数等信息")]),a._v(" "),t("li",[a._v("jstack：主要用来查看某个 Java 进程内的线程堆栈信息。"),t("code",[a._v("jstack pid")]),a._v(" 可以看到当前进程中各个线程的状态信息，包括其持有的锁和等待的锁")]),a._v(" "),t("li",[a._v("jmap：用来查看堆内存的使用情况。"),t("code",[a._v("jmap -heap pid")]),a._v(" 可以看到当前进程的堆信息和使用的GC收集器，包括年轻代和老年代的大小分配等")]),a._v(" "),t("li",[a._v("jstat：进行实时命令行的监控，包括堆信息以及实时GC信息等。可以使用 "),t("code",[a._v("jstat -gcutil pid1000")]),a._v(" 来设置每隔一秒查看当前的GC信息")])]),a._v(" "),t("p",[t("img",{attrs:{src:e(667),alt:"5e7ee2a5991f8234c9324da8f6003bd5.png"}})]),a._v(" "),t("h1",{attrs:{id:"_10-jdk8-在内存管理上的变化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-jdk8-在内存管理上的变化"}},[a._v("#")]),a._v(" 10. JDK8 在内存管理上的变化")]),a._v(" "),t("p",[a._v("JDK8 中出现了元空间代替了永久代。元空间与永久代类似，都是对 JVM 规范中方法区的实现。其区别在于元空间不在虚拟机中，而是使用本地内存，默认情况下元空间的大小收本地内存的限制。可以通过 "),t("code",[a._v("-XX:MetaspaceSize")]),a._v(" 指定元空间的大小。")]),a._v(" "),t("h3",{attrs:{id:"为什么要使用元空间代替永久代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用元空间代替永久代"}},[a._v("#")]),a._v(" 为什么要使用元空间代替永久代")]),a._v(" "),t("p",[a._v("字符串在永久代中，容易出现性能问题和内存溢出问题。永久代的大小指定困难，太小容易出现永久代溢出。元空间则使用本地内存。")]),a._v(" "),t("h1",{attrs:{id:"_11-java-中的类加载机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-java-中的类加载机制"}},[a._v("#")]),a._v(" 11. Java 中的类加载机制")]),a._v(" "),t("h2",{attrs:{id:"java-中的类加载机制有了解么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-中的类加载机制有了解么"}},[a._v("#")]),a._v(" Java 中的类加载机制有了解么？")]),a._v(" "),t("p",[a._v("Java 中的类加载机制指虚拟机吧描述类的数据从 Class 文件加载到内存，并对数据进行校验、转换、解析和初始化，最终形成可以被虚拟机直接使用的 Java 类型的过程。")]),a._v(" "),t("p",[a._v("类从被加载到内存到卸载出内存为止，其整个生命周期包括加载、验证、准备、解析、初始化、使用、卸载7个阶段。类加载机制包含前五个阶段。")]),a._v(" "),t("h3",{attrs:{id:"加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载"}},[a._v("#")]),a._v(" 加载")]),a._v(" "),t("p",[a._v("加载是指将类的 .class 文件中的二进制数据读取到内存当中，将其放在运行时数据区的方法区内，然后在堆中创建一个 java.lang.Class 对象，用来封装类在方法区内的数据结构。")]),a._v(" "),t("h3",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[a._v("#")]),a._v(" 验证")]),a._v(" "),t("p",[a._v("验证的作用是确保被加载的类的正确性，包括文件格式验证，元数据验证，字节码验证以及符号引用验证。")]),a._v(" "),t("h3",{attrs:{id:"准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[a._v("#")]),a._v(" 准备")]),a._v(" "),t("p",[a._v("准备阶段是为类的静态变量分配内存，并将其初始化为默认值。")]),a._v(" "),t("p",[a._v("（假设一个类变量的定义为"),t("code",[a._v("public static int val = 3;")]),a._v("，那么变量 val 在准备阶段过后的初始值不是 3 而是 0。）")]),a._v(" "),t("h3",{attrs:{id:"解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[a._v("#")]),a._v(" 解析")]),a._v(" "),t("p",[a._v("解析阶段将类中的符号引用转换为直接引用。")]),a._v(" "),t("p",[a._v("符号引用以一组符号来描述所引用的目标，只要使用时能够无歧义的定位到目标即可。")]),a._v(" "),t("h3",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[a._v("#")]),a._v(" 初始化")]),a._v(" "),t("p",[a._v("初始化阶段为类的静态变量赋予正确的初始值。JVM 负责对类进行初始化，主要对类变量进行初始化。")]),a._v(" "),t("h2",{attrs:{id:"类加载器的分类有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载器的分类有哪些"}},[a._v("#")]),a._v(" 类加载器的分类有哪些？")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("启动类加载器 (Bootstrap ClassLoader)：\n启动类加载器负责加载存放在 "),t("code",[a._v("JDK\\jre\\lib")]),a._v("下（JDK代表JDK安装目录）或被 "),t("code",[a._v("-Xbootclasspath")]),a._v(" 参数指定的路径中的类")])]),a._v(" "),t("li",[t("p",[a._v("扩展类加载器 (ExtClassLoader)：\n扩展类加载器负责加载 "),t("code",[a._v("JDK\\jre\\lib\\ext")]),a._v(" 目录下或者由 "),t("code",[a._v("java.ext.dirs")]),a._v(" 系统变量指定的路径中的所有类库（如 javax.* 开头的类）")])]),a._v(" "),t("li",[t("p",[a._v("应用类加载器 (AppClassLoader)：\n应用类加载器负责加载"),t("code",[a._v("用户路径 ClassPath")]),a._v(" 中所指定的类，开发者可以直接使用该类加载器。")])])]),a._v(" "),t("h2",{attrs:{id:"类加载器的职责有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载器的职责有哪些"}},[a._v("#")]),a._v(" 类加载器的职责有哪些？")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("全盘负责：\n当一个类加载器负责加载某个 class 时，该 class 所依赖和引用的其他类也由该类加载器负责载入，除非显式的使用另外一个类加载器来载入。")])]),a._v(" "),t("li",[t("p",[a._v("父类委托：\n类加载机制优先让父类加载器尝试加载该类，只有当父类加载器无法加载该类是才尝试从自己的类路径中加载该类。\n父类委托机制是为了防止内存中出现多份同样的字节码，以保证 java 程序安全稳定的运行。")])]),a._v(" "),t("li",[t("p",[a._v("缓存机制：\n缓存机制保证所有加载过的 class 都会被缓存。\n当程序中需要使用某个 class 时，优先从缓存区中寻找该 class，只有当缓存区不存在时，系统才会读取该类对应的二进制数据，并将其转换为 Class 对象，存入缓存区。")])])]),a._v(" "),t("h3",{attrs:{id:"双亲委派机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派机制"}},[a._v("#")]),a._v(" 双亲委派机制")]),a._v(" "),t("p",[t("img",{attrs:{src:e(668),alt:"parent.jpg"}})]),a._v(" "),t("p",[a._v("双亲委派模型的好处：")]),a._v(" "),t("ol",[t("li",[a._v("提高了安全性，避免用户自己编写的类动态替换 Java 的核心类，比如 String")]),a._v(" "),t("li",[a._v("避免了类的重复加载，JVM 中区分不同的类，是依靠全类名和类加载器共同判断的，相同的 .class 文件被不同的类加载器加载就是两个不同的类")])]),a._v(" "),t("h1",{attrs:{id:"_12-你遇到过哪些-oom-的情况-什么原因造成的-怎么解决的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-你遇到过哪些-oom-的情况-什么原因造成的-怎么解决的"}},[a._v("#")]),a._v(" 12. 你遇到过哪些 OOM 的情况？什么原因造成的？怎么解决的？")]),a._v(" "),t("h3",{attrs:{id:"java-heap-space"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-heap-space"}},[a._v("#")]),a._v(" Java heap space")]),a._v(" "),t("p",[a._v("当堆内存(heap space)没有足够空间存储新创建的对象时，就会抛出"),t("code",[a._v("java.lang.OutOfMemoryError:Java heap space")]),a._v("错误")]),a._v(" "),t("p",[a._v("常见导致原因：")]),a._v(" "),t("ul",[t("li",[a._v("请求创建一个超大对象，通常是一个大数组")]),a._v(" "),t("li",[a._v("过度使用终结器 finalizer，导致对象没有立即被 GC")]),a._v(" "),t("li",[a._v("内存泄漏，大量对象没有被释放，JVM 无法对其进行回收，常见于使用了 File 等资源没有回收")])]),a._v(" "),t("p",[a._v("解决方法：")]),a._v(" "),t("ul",[t("li",[a._v("大部分情况下只需要通过"),t("code",[a._v("-Xmx")]),a._v("参数提高 JVM 堆内存空间即可")]),a._v(" "),t("li",[a._v("如果是超大对象，检查其合理性，比如是否一次性查询了数据库的全部结果，而没有做结果数限制")]),a._v(" "),t("li",[a._v("如果是内存泄漏，需要找到对应的业务逻辑，修改代码设计")]),a._v(" "),t("li",[a._v("如果是业务峰值压力，考虑添加机器资源，或者做限流降级")])]),a._v(" "),t("h3",{attrs:{id:"gc-overhead-limit-exceeded"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc-overhead-limit-exceeded"}},[a._v("#")]),a._v(" GC overhead limit exceeded")]),a._v(" "),t("p",[a._v("当 Java 花费 98% 以上的时间执行 GC 但只恢复了不到 2% 的内存，且该动作连续重复了 5 次，就会抛出"),t("code",[a._v("java.lang.OutOfMemoryError:GC overhead limit exceeded")]),a._v("错误。\n该错误说明应用程序已经基本耗尽了所有可用内存，GC 也无法回收。")]),a._v(" "),t("p",[a._v("该错误的导致原因和解决方法跟 Java heap space 类似。")]),a._v(" "),t("h3",{attrs:{id:"permgen-space"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permgen-space"}},[a._v("#")]),a._v(" Permgen space")]),a._v(" "),t("p",[a._v("该错误表示永久代 Permgen space 已经用满。")]),a._v(" "),t("p",[a._v("导致原因：通常是因为加载的 class 数目太多或体积太大。Permgen 的使用量与加载到内存的 class 的数量/大小正相关。")]),a._v(" "),t("p",[a._v("解决方案：根据报错的时机，有不同的解决方案")]),a._v(" "),t("ul",[t("li",[a._v("程序启动报错：修改"),t("code",[a._v("-XX:MaxPermSize")]),a._v("启动参数，调大永久代空间")]),a._v(" "),t("li",[a._v("应用重新部署时报错：可能时应用没有重启，导致加载了多份 class 信息，只需重启 JVM 即可解决")]),a._v(" "),t("li",[a._v("运行时报错：应用程序可能动态的创建了大量的 class，而这些 class 的生命周期很短，但 JVM 默认不会卸载 class，可以设置"),t("code",[a._v("-XX:+CMSClassUnloadingEnabled 和 -XX:+UseConcMarkSweepGC")]),a._v("两个参数允许 JVM 卸载 class")])]),a._v(" "),t("h3",{attrs:{id:"metaspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metaspace"}},[a._v("#")]),a._v(" Metaspace")]),a._v(" "),t("p",[a._v("JDK 1.8 使用 Metaspace 替代了永久代，该错误表示 Metaspace 已被用满，通常是因为加载的 class 数目太多或体积太大。")]),a._v(" "),t("p",[a._v("此类问题的原因与解决方法跟 Permgen space 非常类似。需要特别注意的是调整 Metaspace 空间大小的启动参数为"),t("code",[a._v("-XX:MaxMetaspaceSize")])])])}),[],!1,null,null,null);v.default=r.exports},658:function(a,v,e){a.exports=e.p+"assets/img/c3b0bf5b7cfc5cf0ef5af7419c3507b4.c3b0bf5b.png"},659:function(a,v,e){a.exports=e.p+"assets/img/JVM02.5335cd2f.png"},660:function(a,v,e){a.exports=e.p+"assets/img/f6c8034fbd5699a079cfa3da4371a96e.f6c8034f.png"},661:function(a,v,e){a.exports=e.p+"assets/img/85316615f78d1c819d8585e662b69e5a.85316615.png"},662:function(a,v,e){a.exports=e.p+"assets/img/7298c8e7128044f1f1b69f4f35d54e15.7298c8e7.png"},663:function(a,v,e){a.exports=e.p+"assets/img/9f83876f334bfc02494dcbf755c7dfe5.9f83876f.png"},664:function(a,v,e){a.exports=e.p+"assets/img/abf1985b48e0de54720bac13a022caad.abf1985b.png"},665:function(a,v,e){a.exports=e.p+"assets/img/66c470abd9b08318e3601da5f87a97d5.66c470ab.png"},666:function(a,v){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAABhCAYAAABcdvCjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABhrSURBVHhe7Z09izTJkcfnW5x5pj7CfQSZbcqUdwfnrCMQZ8iR045gLXHcsbCwIHqdQ7Ag1hHoECxzyJFxHLsgY2GdEazxHAtij3XqKqoquiKjIiIj66Wn+5n/D4KuirfMyszOjKd7npmnDgAAAAAAgAAUjAAAAAAAIAQFIwAAAAAACEHBCAAAAAAAQlAwAgAAAACAkIcvGJ+e1j9CFLs275b+bOG12pV4fbiHvmXZ2tdM/CONBwAAAEA8/MnFhy+9RmJR03v2iDUxe6DbpXtPNJZuDV6evfJ78HO1iEdky1DLLQUAAAB4FB7+1JIHr3cIt+i1zoslMvFElGMvtrah4+neEwvLj6RmO5qWdnT/LKmhfVrjAQAAgHvkoU8w63C2sPy0sN6iRZ/V7c3WNnS8l6/2fFEeL+eRtLRZ883kinxe4/nBBl4u3amfs6fz86QA4L54Po/n1+Ms0efuTO+pp3N/9ei8dJfTUfvDmPt0eZnu74OHPsH0AewdyBk9X9OrFqmX6Hsioxve5KdLvyQ0YgGah9Vkn95s3Ccte+Dl0XrLj3WR7Ra0tJXx9XxIb4nG0rXw/Ot/657+cZbT599OFnAIKBhBK8/n/n1+u2IIBePBhPOJgvFhyB7K3iHt6VvItE8sdMMiPHWLtTAdUMP6o+vTqb8Xi9XSTcg26LomNTyfWmxkz7S7J9n22I9eLWHktYf2r0kLKBgBuHNuXDCCg0HBWNB2Yt0R3oGrdd6hzHppp2spEn1PaP9ISsZ/ZenF8HI59b7T4hyKw0t36f8FyeuR7OcLFZXlArbbmPFsHGfFRzERkb0WuyfUFreX7ZPlV7Nrsm1t4eXz36BgBOAeQcH4foGCsWCfE0zDX+VIMb+CXQcfvNYBrHU1n9q1fq1h+Vm65dfSavHRQiU7vY4fOfb2fuEOY1t+Okn5WSw8vUT7rMklbXRdk6Pg3LKNTHuWz9octVwW7/77D90Hv/io+3vxKeL5z5NR4BeMX3VnEUvyo5992n34p3eTfeTdV39ctPP0668m60jGp8bwDyBew/2zj+J/sj77yA2a/nHVxzyzj7oWucZ/cM151my2/BVfIcaBoNvSPkMe0hXP1lpIjP+wPD9Pe4PTFqH7PT/7GHt+5q8C9fXkNjDrR1lb+Og8as7FHib7vZivYt0s/Yp/YE9c19xwR/3YY+3Mh3cxzmL/XqwHIfq5FmusOAdylO2p8R0Y5yCzdny2rB3dJ9UP45mvc1fbL0Lyc943OOknaZ7P6Zn6gfDWBbOYc2MerDb12nlt6idgK9MkyPG4LoTpfgs0iIy8lrA+smthPaN10haR9Rs3Q7GA9biRfRgzegNMhSIZxWZLeP2U/bB0Gm2je08sIhtTs++BbEO3t6Z/UT4L8vH8ovh3//lp93eyOJtka8E4ym/mdfa//9X9k+Uji8GMT4LrBije+8PGWewF/fou7qdN+Krjg4gKAz50aP2P17yhjm3J4mGM27rhDv3Vm3v/3izyTu9dqZsPCO7TfLjk4WcX+4KzvxZppwN31Mkxm/tFtvLZluO1HNMM1F4ZM7YpdNMzUD+u7dX2w2T/Bt3ua4djpW7Zn4HhOco+Scr+7YA6D2b42eO1E5NdO4k5F3hjMM5DHydsQ56m8crNuTUWZlvhfPrrIs479VE4Ldeg6u+dUD8BFeNCkFIu1sEuR6vHWiAcvwUvnvWZ/NKHrqWwTr7WyPrxouEFsRgjWqjTPY0p/eziOKwUN4+510/ZD+9aovVZP4J1tRxezr3ItBf1gWyWMPLaQvsTrLNk5uvuww+oKPu4+/kXf+2+/2FSO6S/kv7hu+63vxqLvWvh+e0X3U+GAvCT7uef/0/35bf/NxkEGZ8Ey03Q3gs0pY98n8hNVF4vN2ki01YNaz9bstzcx32y/dlLyj1ixH7WEukzHWpTgHweeW33LdNWAn3oTod1+FzGQa3nYuhzOMZy/LasnXIMR5ZzPpApGM0CbyWVgjEc4yq5tWMSjIO91nhsovnMkJlzp//WWIbzmVgXXpFe5LXmReW5E+ITsBn7Ia1JXx6a7UTx2dyyHzJG66SN0PdMi35YtMO4LMetGDNnccmc3jUR2RhPX6OWO9P2HtTalqzVR3bPJ4q5wgXav/yhLx3r+AXjd92Xv/+s++nPPlp8Wik/qXz3p991Px0K1En++ZPug8+/6b6f7ETGp0b2ABjeB9MYXuXqkzkARp9FDhLVViv2wWi3J9+/83t7C/LZmfn9f2U6lHR/Rp9xnKyDXl6PczXHSinaSmDnEuvAO0QlC5/lWNTXl4zZsnbKMRyROQSVgpEox2dj8WgVOQPJtROSWztEdc4F5RzN1OczQ2bOp/4v+ktyRMFozM+Qd9KbPirPnWCfZhvQC4lon/QcNMEeNZsUxrrWr4y+Z5r0vBiNBeOPmf2ml/lrfbX6wjovjxWjifISUQ6yZdqw8OL20hPZvmm/XFt/mb5K3vYJI+t/8h9/He6///ab7uPzWPBZX213P7zrvvzid92Ph7Y/6j60vnHO+DhkDoC6T+YAaD0I8yz3s8Qh0TPEbd7z5LMz+llrPmV/5fPIa3+/aUQehIw+dBfFoMHkQ+8TlvIZpz7fZO3k5nwgLDCWjM9gFBRZvIKkeHYm86yS3NpJzbnAW2v1+cyQmXPV/4hwPhPrwpufIq81LyrPnZA7BRvQb4Dxvh9UNem8CWzBi2d9lN/yoWsprJOvjL5n2vTT4j4t3xTDuJkL2n7Te/0ktM7zqflZcZItdrLV4i1qOVvI+re06flq/deffjIUdlrmQs/7+cRefvHHYe18/enHtr2Xa54/f2ba6evnj79p8EmQOQAWPlwoXH0aDgB3Yy8ZfXMH5/JgWR4SvMfJzX2IazroLOSzM/r9v/Qpn6/sr3ye4tmmcS/bcljMkWBRPIz9s+Z4foYly3E3UG3xPOy/dpZzrnNcSTxbweBvFBRZ3PjM2qmRXDuZORfoPYBZ7AU9nq9Pbs7HPifGIpzPzLqYfIpn0HOj80z3hc99kDshGxnfgJP0g2BNOtu3YMVrXa0NafeuiWzeVj2PlV4YxRuywH7Te/mJyMZoHy9mSztb7a205sv6R37a5vku9X8zv05uKRi7v/2l+9df8v9s/qj78fn33eXfx0I0Khj/4Zefdb/96rvJoSfjkyB3APDhwtL702Z+9UkeAD3FvjOJteGO/ertiYPIfB9Oh81Vejv5LfqSyB+jDxZi+f6/Ps8kp8vzMDajT3kYyedZPNt0OMpc9qE/z5kMH5kPu1H6QmL4X6oiT6qo0utiEjWmwzNI2yFrpxzDkWUOZjkfcTvxOFjoMZ5lbiu3dmLK5/bXju6PP+eyr1ffqYu5/aJGfs77h1B96cVoy5/PcnxGjHbYz8zBlOudUtIYL/1el9wJuZH2Sc9BAyvR94ynJ6TNutavDN23ypFY+VnX2nbN37PX9FHeWptrWJOTYjKiYZ22yRgt4LWYNudio7ewDgRAjIeo9cnWHnjjbhVBAIBbcZNT6+iCMXMAe3ap9/J5sS3skSPCy9/absZ/TVut/diDW7dptbdmrMCx8CcGyzqwL0ikMvu11ZtjKrgP2NNHnIIR8wHAq3KTU+uoghEAANJcvxYLPhlTX1OhOCm5fqV69MCYX2Ee9YkmACADPuYAAAAAAAAhKBgBAAAAAEAICkYAAAAAABCCghEAAAAAAISgYAQAAAAAACEPWzDS/5rziGw1tsSC18Obt7XzuXcc1hUAAIBH5mFPsdrBvPeBD+6b2npoQcfUckh75hoAAAB4NB72FLMOYK2rHdKZHEQtD3hdovlpnTvPv5aH7fqVqcUDAAAA98zDnWJ08GphvYWnJyxbVrc3/Atx34dfFDz+JQ3rb9BuR/8SeBozS5jIprF8tdTwfHQezw8AAAC4Rx721JIHLl/Lw5hF6jVbdHvzWAWj9QfWZ25dMGpYt2UuW/wiYR+JvgcAAADunYc8ufY6cK08Wd3b5v0qGEnXKhrW6VdC+1vxAAAAwD3zkCeXdyhLkeh7RsdEAiT3XzB6c1abyzVx0mZd69goFwAAAHCP7HxyPXdn+gPxz+KP/Mtru75oonY4E3ytXzNYvlo3FC3n5+IP8Xt/lP+qn0QXWWNxxXZrjGhM6avqsUi7+jZ9dz3Gnp/HXBRfXk9uA7N+FFn4aZuU2e9aMD6fhd14tsJe5rjywutHSPITRkLbLX+mNRdRy8/3tTwAAADAPbPzycUFBR38XOBQoRB/ItUCHbZaWM9onbTVyPhykTc8Dxc9VHUN12XhVBRjk69Z6w2FkV8wFnFTEWXmMZFzQd2Y8w3X10RjW3KersXfdD8Sz+e1CBaFXdlOzzAW5fOO/RJtGc855FYFoyUSea9tjBVj+XrxRMYW+QAAAAD3SvPppT8xKw99WXDIomJZYHD8FmT83J85r37NkPEtiihZJKqCcck4PmahVykYy+IsyGMyFYxTgCze5LUuxkastjIFYzkOZe6yPzNlW4sis8cqGDVaJ+8tm7ZbPhLpw9eWSPhe6wEAAIBHYOfTSxY3tykYrYNY66SNsXRERp8uGK2vU3tZ1EnEvRSMop9Syrb2KRiX8d76mVlTMEoim4afPYP2s+Ja2gYAAADuiZ1PsHzBuBY+xFkY61q/SiwdkdHnCsbGQu9uP2G0iOdza8HIz7XXJ4ySyMaQT0verK8XDwAAANw7O59gsriJC0Y6PNceoBwn4zkfC+vkq8TSERn92oJxKIB6naqBRu6gYBz7oNuyGeKc4rJeMLJP+bw6p84z3pc+1nx5c0jUbJ69Jc7yZV2UBwAAALhXdj69blMwMjLeuyasdry2M/qikHELRlHgTHK6PA/jMBd6UyEnfGZfHqsbFoyE+TV6WfyNjH2wfHShRww6VWDq8bEK0KF/bKd+0hirgtESj8hmUcsniXxZn80FAAAA3BMPfXrJw9e6jg5p0rUKuD+sedE6vs/OIfmxZJH+Oq52DwAAANw7D31yyYNXHtaWfit75QGvQzR/vGZYWvBiWOfla20HAAAAeE1wagEAAAAAgBAUjAAAAAAAIAQFIwAAAAAACEHBCAAAAAAAQlAwAgAAAACAEBSMAAAAAAAg5GELxujXkmz5lSWvFcu05vD898rTyl55tvDafdij/S057mEOjsZ7xjXP/trzpWnJtVe7e/YfAPB+8rC7hLfBsX7tBrh147x1vOe/V55W9sqzlZZ+kG9WsrT4Etq/dh/R2vYj4j3j2mffOmat86NFou8j2Ffm0pIh6wcAeLs87C5hbXBaV9sEMzkIT7dGIthe82Miv2wOgnxrksGKYzkKq62aaLbo9kTm965rkK8n7wvRs9SeU45Hi0SwvebHaD/rXopHZCNqdka2pQUAAJgDdgT1N4bzf/A4hdzMWFhv4ekJy7ZFV6OlL7X8ZLeEiWyayEbU7MSW/FvYI7eVo0XXKhmyfpIoZk2+VQx/T13/7fP9oNyWMJGN0PcZopg1+aOYbL5aOzU7E/llcwAA3gaH7gjP537D3rlgZORmxtf0qkXqNWt1lk+NKMaztcawLrJpojaYms+advdij/zZfre0lfUlv1axYL1l92IO4QYFoyb77Ja9RhTj2WrtaDvfe68aqbd8SOfFStjHywEAAJJDd4WjCsa9NrPsRhm1R7aaRKy1W3rWRTaJ9LeEkdcS7Udk4vbEasNrN9JnJUuLr4Tj9KsH2bWPvK/FPxrW87AusmlIX5OILXbZBovG0lloP3kf5a7FAQCA5tCd4eiCUW9yUiT6ntExkRwB59VtSWG7xtNZekLr5b2Xi/FyWrBvS8wWvPas9r0+ZX29eIsWX0bGeNcZ2H9NH+4d65lI5z3rEWPAObldS9ge4dnXxtfyRWTbBAC8XQ7dHY4oGOWGVrvWrxks35b4DJTPyxnppc3yi+yWP9Oaq0ar/xa8flp98PqV9fXiLVp8Ce1fu6/R6r+el+5ymgslFusr6WE/CHyu+8XLpTtd/c6d3EFIp5E6bbf81zL2x84X6VtitC6TV1571OxExgcA8HY5dIc4qmDUwnpG66StRtaX/FolQ4ufJRJ5r20Sy5aNlZBf1ncvon5GNolly+oI0mdF4+ktMn4t+Y5hLCB1MfhyOXXFVjD9rKPUzQUlF4lTMSqc+Pm0SOS9ZWuVDFk/iY7xcuh+8LXn34rODwAAFs27hP6U4Onp1Hk/3x4VjHtsUjJ+7s+cV79maPGV6Li98nhYflEforxks4SR1xY6zpMj0HnlvXetIVtWsrT4WrTGyz5Gcjx2wbhk/G0Ky4Kx/ESRCs2n06XPOmI9g9bJ+9ozR7EttMSxL72yMFKnbYS819eRWFh+lgAAAHHobnCLgpFzyFxaJ22MpSNa9Yy21/wZ8quJhaX3fIk1NtZ7bbHwfUTNvhad12pnTd/W5JFkfMlnreh4vo+o2ffBKRiLr5lnWRSMoji0sJ7B0jGRjdD2mj9DfjXxYJvlo3WZPJpaDAvfR9TsAIC3w6G7QVQwrkVueHIzs671q8TSEa16Rttr/h7ZOMsvij3CJqn5eXbSZ9uw0LFWrlr+bEwtj6TFV8OxrTlq/pGdbK3t2VgF4/hpoqV71IJR0xLHvlZMS388WxSjqfm25AIAvN8cuhsc9Qkjx8l4zsfCOvkqsXREq57I5I/iJVv8oti1NsmWHJ6d9Nn2NZm4tT5ZnUeLr0TH7dlmZCdbS1s+uYJx2Bt63WsWjJlcUbwk60ew79b2PVsUo6n5tuQCALzf7L8bTD/MvpTl/3Yk2YKM964Jqx2v7VY9kckfxUta/CzxWGuTbMmxR/uaLW0yno+lb+lniy/T0heLmt9Wew77K+nhZxH7/Cyny/Pgt6ZgtMSj1aZ1Ubwk60ewL72yMDqPvpd4tihGU/NtyQUAeL956N1AbmbWtX6VkK5VLLJ6675VJPqe8HwsXw35ZMTD8tVi4elryDjZRkYk+p6Rer62YteKxNJpWnwi8YhsbVhfP++H1U+t4/s1z+vlYui+VSSenpH2yI9gm/b3xMLy0wIAAMRD7wZyM+NrvcntteHpPLodC/bJ+B7FrdqttfNazx/R0qcj+k85W/NGMbVcrW2leLl0Z1Ecjp8k+r854VZEY5QZJym3RLcXtb9H32o5bv38AID7BbsBAGAT5dfNr18sAgAA2B8UjAAAAAAAIAQFIwAAAAAACEHBCAAAAAAAQlAwAgAAAACAEBSMAAAAAAAg5GELxujXPWz5VRCP8msk1vbTi3uU5wYAAADA7XnYKqFW+OxdUN0Tuo+1Pkt75hoAAAAAQPKwVYJV4GhdrQjK5CBqeW6J15fss+pXphYPAAAAgLfLw1UJVNhoYb2FpycsW1ZXMP397KP+HBpDbdSkhuej83h+AAAAAHh7PGxVIAsavpbFDovUa7boCm5UMEqqfZogv0jYR6LvAQAAAPC2ecjKYK+CxsqT1d0Sar9VNKzTr4T2t+IBAAAA8HZ5yMrAK3qkSPQ9o2MiuRe8vkR9lDbrWsdGuQAAAADw9ti5Mnjuzn2x8XR+nu4nXi7dqddr9RpqxQ/B1/o1g+W71L10l9OyqJRfSb9cTr3u1OlvqZ/Pve/p0meYfPpBGXSUQ11rSK+Rupqd8O5reQAAAADwdtm9MhgLpXNfOs4MuqlI2goVM1pYz2idtNVo8Z0ZC8jyZxjH4tnScS04jtXkM/0c5FAoDtflGOp+Db5KR1g6JmOLfAAAAADwNmmuDq6fgF1Ff4pWFkV2MTUWJluLExk/92fOq18ztPjO2M+4KJRVIVgU19ImruXzEPqesO5Zx9eWSPhe6wEAAAAADqkO5NeuukhirKKlFZlD5tI6aWMsHdGqH7ELxr4iFF/FL30yBWME9Snu14z2s+KyuQAAAADwtjimQhgKpfGTx6F4NH4eby1cJLEw1rV+lVg6olU/4hSMPdfnF2PCrC0YqS9bn6klHgAAAABvm8MqBCqUTpdLdzb+4wdBxcnaAoXjZDznY2GdfJVYOqJVP+IXjGOheO4uVByqwrm1YKQ+rOmfjrN8WRflAQAAAMDb5LjqYCh6+kLF+XRxsG0sTmS8d01Y7Xhtt+pHgoJxsln/Y3rrV9IE9Svu20zky/psLgAAAAC8HR66OpDFjXUdFUGkaxUf639EH0euTyXSX8fV7gEAAADwtnnoykAWNrIYsvRbKfK8XLqzKA7HTwrtr973gJ+JpQUvhnVevtZ2AAAAAPD+gqpgJWORyEXcccUiAAAAAMBrg4IRAAAAAACEoGAEAAAAAAAhKBgBAAAAAEAICkYAAAAAABCCghEAAAAAAISgYAQAAAAAACEoGAEAAAAAQAgKRgAAAAAAEIKCEQAAAAAABHTd/wNS1YeZukgTNgAAAABJRU5ErkJggg=="},667:function(a,v,e){a.exports=e.p+"assets/img/5e7ee2a5991f8234c9324da8f6003bd5.5e7ee2a5.png"},668:function(a,v,e){a.exports=e.p+"assets/img/parent.0b395656.jpg"}}]);