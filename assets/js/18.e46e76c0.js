(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1116:function(t,a,s){"use strict";s.r(a);var e=s(6),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_1-如何判断对象可以回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何判断对象可以回收"}},[t._v("#")]),t._v(" 1. 如何判断对象可以回收？")]),t._v(" "),e("h2",{attrs:{id:"_1-1-引用计数法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-引用计数法"}},[t._v("#")]),t._v(" 1.1 引用计数法")]),t._v(" "),e("p",[t._v("当一个对象被引用时，计数+1；当不再被引用时，引用-1。当该计数为 0 时，该对象不再被引用，将会被回收。")]),t._v(" "),e("p",[t._v("弊端：当存在循环引用时，两个对象都无法被回收（A 对象中引用 B 对象，B 对象中引用 A 对象）")]),t._v(" "),e("h2",{attrs:{id:"_1-2-可达性分析算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-可达性分析算法"}},[t._v("#")]),t._v(" 1.2 可达性分析算法")]),t._v(" "),e("p",[t._v("JVM 中的垃圾回收器通过可达性分析来探索所有存活的对象。")]),t._v(" "),e("p",[t._v("扫描堆中的对象，看能否沿着以 GC root 对象为起点的引用链找到该对象。如果找不到，则表示该对象可以被回收。")]),t._v(" "),e("p",[t._v("可以作为 GC root 的对象：")]),t._v(" "),e("ul",[e("li",[t._v("虚拟机栈中引用的对象")]),t._v(" "),e("li",[t._v("方法区中类静态属性引用的对象")]),t._v(" "),e("li",[t._v("方法区中常量引用的对象")]),t._v(" "),e("li",[t._v("本地方法栈中 JNI(即一般说的Native方法)引用的对象")])]),t._v(" "),e("h1",{attrs:{id:"_2-五种引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-五种引用"}},[t._v("#")]),t._v(" 2. 五种引用")]),t._v(" "),e("p",[e("img",{attrs:{src:s(726),alt:"41a46fb64be146b810a0adaf635a67b1.png"}})]),t._v(" "),e("h2",{attrs:{id:"_2-1-强引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-强引用"}},[t._v("#")]),t._v(" 2.1 强引用")]),t._v(" "),e("p",[t._v("只有全部的GC root对象都不引用该对象，才会回收强引用对象。")]),t._v(" "),e("p",[t._v("上图中当 A, B 对象都不引用 A1 对象时，A1 才会被回收。")]),t._v(" "),e("h2",{attrs:{id:"_2-2-软引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-软引用"}},[t._v("#")]),t._v(" 2.2 软引用")]),t._v(" "),e("p",[t._v("GC root对象软引用的对象，在内存不足时会被回收")]),t._v(" "),e("p",[t._v("上图中 B 对象不再引用 A2 对象且内存不足时，软引用所引用的 A2 对象就会被回收。")]),t._v(" "),e("p",[t._v("注意，当软引用所指向的对象被回收清理时，对象被回收，但软引用不会被回收。")]),t._v(" "),e("p",[t._v("若想回收软引用，需要利用引用队列（如果不回收软引用，则最终清理过后 list 中被清理的软引用的对象的位置为 null）")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" _4M "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用引用队列，用于移除引用为空的软引用对象")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReferenceQueue")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" queue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReferenceQueue")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用软引用对象 list和SoftReference是强引用，而SoftReference和byte数组则是软引用")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SoftReference")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" list "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SoftReference")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ref"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SoftReference")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_4M"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//遍历引用队列，如果有元素，则移除")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Reference")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" poll "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("poll "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引用队列不为空，则从集合中移除该元素")]),t._v("\n\t\t\tlist"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("poll"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//移动到引用队列中的下一个元素")]),t._v("\n\t\t\tpoll "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br")])]),e("h2",{attrs:{id:"_2-3-弱引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-弱引用"}},[t._v("#")]),t._v(" 2.3 弱引用")]),t._v(" "),e("p",[t._v("GC root对象弱引用的对象在垃圾回收时，无论内存是否充足，都会被回收")]),t._v(" "),e("p",[t._v("上图如果 B 对象不再引用 A3 对象，则 A3 对象会被回收")]),t._v(" "),e("p",[t._v("与软引用类似，若想回收弱引用，需要利用引用队列")]),t._v(" "),e("h2",{attrs:{id:"_2-4-虚引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-虚引用"}},[t._v("#")]),t._v(" 2.4 虚引用")]),t._v(" "),e("p",[t._v("当虚引用的对象被回收之后，虚引用就会被放入引用队列当中")]),t._v(" "),e("p",[t._v("虚引用的一个体现就是释放直接内存所分配的内存。当引用对象 ByteBuffer 被垃圾回收之后，虚引用对象 Cleaner 就会被放入引用队列，然后调用其 clear 方法来释放直接内存。")]),t._v(" "),e("p",[t._v("如上图，B 对象不再引用 ByteBuffer 对象，ByteBuffer 就会被回收。但是直接内存中的内存还未被回收。这时需要将虚引用对象 Cleaner 放入引用队列中，然后调用它的 clean 方法来释放直接内存")]),t._v(" "),e("h2",{attrs:{id:"_2-5-终结器引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-终结器引用"}},[t._v("#")]),t._v(" 2.5 终结器引用")]),t._v(" "),e("p",[t._v("当某一个对象不再被其他对象所引用时，会先将其终结器引用对象放入引用队列当中，然后根据终结器引用对象找到其所引用的对象，调用对象的 finalize 方法（所有的类都继承自Object类，Object类有一个finalize方法）。调用之后，该对象就可以被垃圾回收了")]),t._v(" "),e("p",[t._v("如上图，B 对象不再引用 A4 对象。此时终结器引用对象就会被放入引用队列中，引用队列会根据它，找到它所引用的对象。然后调用被引用对象的 finalize 方法。调用以后，该对象就可以被垃圾回收了")]),t._v(" "),e("h2",{attrs:{id:"_2-6-引用队列小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-引用队列小结"}},[t._v("#")]),t._v(" 2.6 引用队列小结")]),t._v(" "),e("ul",[e("li",[t._v("软引用和弱引用可以配合引用队列：在软引用对象和弱引用对象所引用的对象被垃圾回收之后，会将软引用对象和弱引用对象放入引用队列当中，方便回收")]),t._v(" "),e("li",[t._v("虚引用和终结器引用必须配合引用队列：虚引用和终结器引用在使用时必须关联一个引用队列，以便进行垃圾回收")])]),t._v(" "),e("h1",{attrs:{id:"_3-垃圾回收算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-垃圾回收算法"}},[t._v("#")]),t._v(" 3. 垃圾回收算法")]),t._v(" "),e("h2",{attrs:{id:"_3-1-标记-清除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-标记-清除"}},[t._v("#")]),t._v(" 3.1 标记-清除")]),t._v(" "),e("p",[e("strong",[t._v("定义")]),t._v("：标记-清除算法是指在虚拟机执行垃圾回收的过程中，首先采用标记算法确定可回收的对象，然后垃圾收集器会根据标识清除对应的内容，给堆中腾出响应的空间。")]),t._v(" "),e("p",[e("strong",[t._v("注意")]),t._v("：这里的腾出内存空间并不是将标记的内存空间字节清零，而是记录下这段内存的起始地址与结束地址。当下次分配内存时，新的内容会直接覆盖这段内存。")]),t._v(" "),e("p",[e("strong",[t._v("缺点")]),t._v("：标记-清除算法会产生大量的内存碎片，因此可能无法满足大对象的内存分配。一旦对象的内存无法分配，就会导致 jvm 启动 GC，GC 的启动会到值应用程序暂停，导致应用的响应速度变慢。")]),t._v(" "),e("p",[e("strong",[t._v("图示")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(727),alt:"0abdb3302e77c11bc165b71e409a0ee1.png"}})]),t._v(" "),e("h2",{attrs:{id:"_3-2-标记-整理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-标记-整理"}},[t._v("#")]),t._v(" 3.2 标记-整理")]),t._v(" "),e("p",[e("strong",[t._v("定义")]),t._v("：标记-整理算法会将不被GC root引用的对象回收，清除其占用的内存空间，然后整理剩余的对象，可以有效避免因内存碎片而导致的问题")]),t._v(" "),e("p",[e("strong",[t._v("缺点")]),t._v("：整理需要消耗的时间较多，所以效率比较低")]),t._v(" "),e("p",[e("strong",[t._v("图示")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(728),alt:"61659e4296e7c81e56e830d5efee8a96.png"}})]),t._v(" "),e("h2",{attrs:{id:"_3-3-复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-复制"}},[t._v("#")]),t._v(" 3.3 复制")]),t._v(" "),e("p",[e("strong",[t._v("定义")]),t._v("：将内存分为等大小的两个区域 FROM 和 TO，其中 TO 为空。首先将被GC root引用的对象从 FROM 复制到 TO 中，然后将不被引用的对象回收。完成后，交换 FROM 和 TO 的指示地址，为下一次复制做准备。")]),t._v(" "),e("p",[e("strong",[t._v("缺点")]),t._v("：复制可以有效避免内存碎片的问题，但是会占用双倍的空间")]),t._v(" "),e("p",[e("strong",[t._v("图示")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(729),alt:"52dfab1124852d59ff984923d1f0ad86.png"}})]),t._v(" "),e("h1",{attrs:{id:"_4-分代回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-分代回收"}},[t._v("#")]),t._v(" 4. 分代回收")]),t._v(" "),e("p",[t._v("分带回收的思想：创建两块内存空间--新生代和老年代。在新生代中，又分为三块区域--伊甸园区，幸存区From和幸存区To。如图：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(730),alt:"0edf4222d812cff2ef996d9d359bdee3.png"}})]),t._v(" "),e("p",[t._v("当新对象被创建时，会将它们全部存放在伊甸园区。随着对象的创建，伊甸园区内存不足时，就会进行垃圾回收，此时的垃圾回收称为 Minor GC")]),t._v(" "),e("p",[t._v("Minor GC 会将伊甸园区中的还正在被引用着的幸存对象复制到幸存区To中，并使他们的寿命+1。全部转移完成后，再将两个幸存区From和To的指示地址交换为下一次垃圾回收做准备。如图：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(731),alt:"65cbbcc2368da34d6300543dacaa2733.png"}})]),t._v(" "),e("p",[t._v("当伊甸园区内存又满了时，则会再次触发Minor GC（会触发stop the world，暂停其他用户进程，只允许垃圾回收线程工作）。此时，不仅会回收伊甸园区中的垃圾，还会回收幸存区中的垃圾。同样的也是将幸存的活跃对象复制到幸存区To，并将他们的寿命+1。然后回收伊甸园区和幸存区中的垃圾，最后交换From和To。")]),t._v(" "),e("p",[t._v("不断的重复上述过程的垃圾回收时，如果某个对象的寿命超过了某个阈值(最大为15，由4个bit控制)，就会被放入老年代中。如图：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(732),alt:"69971401432d60abeb0ee64afc9677ed.png"}})]),t._v(" "),e("p",[t._v("如果新生代和老年代中的空间都满了，就会先触发Minor GC，再触发Full GC，将新生代和老年代中的不再被引用的对象全部回收。")]),t._v(" "),e("p",[t._v("注意：当遇到一个比较大的对象（新生代装不下）时，会将该对象直接晋升到老年代存储。")]),t._v(" "),e("p",[t._v("当新生代和老年代的内存空间被全部占满且通过垃圾回收也无法存放下新的对象时，会抛出out of memory异常(OOM)。如果某个线程内存溢出而抛出了OOM，它不会让其他的线程结束运行。这是因为当一个线程抛出OOM异常后，他所占据的内存会全部被释放，从而不影响其他进程。")]),t._v(" "),e("h1",{attrs:{id:"_5-垃圾回收器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-垃圾回收器"}},[t._v("#")]),t._v(" 5. 垃圾回收器")]),t._v(" "),e("h2",{attrs:{id:"_5-1-串行垃圾回收器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-串行垃圾回收器"}},[t._v("#")]),t._v(" 5.1 串行垃圾回收器")]),t._v(" "),e("p",[e("img",{attrs:{src:s(733),alt:"687863e8bbc67db7b57266ff81d3bba2.png"}})]),t._v(" "),e("ul",[e("li",[t._v("单线程")]),t._v(" "),e("li",[t._v("适用于内存小、CPU核数较少的个人电脑")]),t._v(" "),e("li",[t._v("安全点：让其他的用户线程在安全点全部停下来，以免因为垃圾回收而移动对象地址时，其他的线程找不到被移动的对象")]),t._v(" "),e("li",[t._v("因为是串行的，所以只有一个垃圾回收的线程在运行，其他线程全部进入阻塞状态")])]),t._v(" "),e("h3",{attrs:{id:"serial收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serial收集器"}},[t._v("#")]),t._v(" Serial收集器")]),t._v(" "),e("p",[t._v("Serial收集器是最基本、发展历史最久的串行垃圾收集器。")]),t._v(" "),e("p",[t._v("特点：单线程、简单高效，采用复制算法。对于限定单个CPU的环境来说，Serial收集器由于没有线程交互的开销，所以有最高的单线程收集效率。收集器在进行垃圾回收时，必须暂停其他的所有工作线程(stop the world)，直到垃圾回收结束。")]),t._v(" "),e("h3",{attrs:{id:"serial-old收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serial-old收集器"}},[t._v("#")]),t._v(" Serial Old收集器")]),t._v(" "),e("p",[t._v("Serial Old收集器是Serial收集器的老年代版本。")]),t._v(" "),e("p",[t._v("特点：单线程收集器，采用标记-整理算法。")]),t._v(" "),e("h2",{attrs:{id:"_5-2-吞吐量优先垃圾回收器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-吞吐量优先垃圾回收器"}},[t._v("#")]),t._v(" 5.2 吞吐量优先垃圾回收器")]),t._v(" "),e("p",[e("img",{attrs:{src:s(734),alt:"073611cea79409473dd7970ee091bd33.png"}})]),t._v(" "),e("ul",[e("li",[t._v("多线程")]),t._v(" "),e("li",[t._v("适用于堆内存较大、多核CPU")]),t._v(" "),e("li",[t._v("在单位时间内，STW(stop the world/停掉其他工作线程)的时间最短")]),t._v(" "),e("li",[t._v("JDK 1.8默认使用的垃圾回收器")])]),t._v(" "),e("h3",{attrs:{id:"parallel-scavenge-收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parallel-scavenge-收集器"}},[t._v("#")]),t._v(" Parallel Scavenge 收集器")]),t._v(" "),e("p",[t._v("特点：属于新生代垃圾收集器，采用复制算法，是并行的多线程收集器")]),t._v(" "),e("p",[t._v("该收集器的目标是达到一个可控制的吞吐量，并采取GC自适应调节策略")]),t._v(" "),e("h3",{attrs:{id:"parallel-old-收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parallel-old-收集器"}},[t._v("#")]),t._v(" Parallel Old 收集器")]),t._v(" "),e("p",[t._v("Parallel Scavenge 收集器的老年代版本。")]),t._v(" "),e("p",[t._v("特点：多线程，采用标记-整理算法")]),t._v(" "),e("h2",{attrs:{id:"_5-3-响应时间优先垃圾回收器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-响应时间优先垃圾回收器"}},[t._v("#")]),t._v(" 5.3 响应时间优先垃圾回收器")]),t._v(" "),e("p",[e("img",{attrs:{src:s(735),alt:"3c54615183e106cfebc5502a912971d6.png"}})]),t._v(" "),e("ul",[e("li",[t._v("多线程")]),t._v(" "),e("li",[t._v("适用于堆内存较大、多核CPU")]),t._v(" "),e("li",[t._v("尽可能让单次的STW时间最短(尽量不影响其他线程运行)")])]),t._v(" "),e("h3",{attrs:{id:"cms垃圾收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cms垃圾收集器"}},[t._v("#")]),t._v(" CMS垃圾收集器")]),t._v(" "),e("p",[t._v("Concurrent Mark Sweep，一种以获取最短停顿时间为目标的老年代收集器。")]),t._v(" "),e("p",[t._v("特点：采用标记-清除算法。并发收集、低停顿，但是会产生内存碎片")]),t._v(" "),e("p",[t._v("CMS收集器的运行步骤：")]),t._v(" "),e("ol",[e("li",[t._v("初始标记：标记GC root可以直接引用到的对象。速度很快，但是依然存在STW问题。")]),t._v(" "),e("li",[t._v("并发标记：进行GC Roots Tracing的过程，找出存活对象且用户线程可以并发执行。")]),t._v(" "),e("li",[t._v("重新标记：为了修正并发标记期间因用户程序继续执行而导致的标记产生变动的那一部分对象的标记记录。该过程仍然存在STW问题")]),t._v(" "),e("li",[t._v("并发清除：对标记的对象进行清除回收")])]),t._v(" "),e("h1",{attrs:{id:"_6-garbage-first-g1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-garbage-first-g1"}},[t._v("#")]),t._v(" 6. Garbage First (G1)")]),t._v(" "),e("p",[t._v("G1垃圾收集器，JDK 9以后默认使用，替代了CMS收集器")]),t._v(" "),e("p",[t._v("运行示意图：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(736),alt:"906644b004e563c7410f3d327b6da8f8.png"}})]),t._v(" "),e("p",[t._v("适用场景：")]),t._v(" "),e("ul",[e("li",[t._v("同时注重吞吐量和低响应时间")]),t._v(" "),e("li",[t._v("超大堆内存（会将堆内存划分为多个大小相等的区域）")]),t._v(" "),e("li",[t._v("整体上采用标记-整理算法，两个区域之间采用复制算法")])]),t._v(" "),e("p",[t._v("相关参数：在JDK 8中需要手动设置参数开启")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("-XX:+UseG1GC")])]),t._v(" "),e("li",[e("code",[t._v("-XX:G1HeapRegionSize=size")])]),t._v(" "),e("li",[e("code",[t._v("-XX:MaxGCPauseMillis=time")])])]),t._v(" "),e("p",[t._v("G1的垃圾回收步骤：")]),t._v(" "),e("p",[t._v("新生代伊甸园垃圾回收--》内存不足时，新生代回收+并发标记--》回收新生代伊甸园、幸存区、老年代内存--》新生代伊甸园垃圾回收（循环往复）")]),t._v(" "),e("p",[e("img",{attrs:{src:s(737),alt:"db5917492570569880bf169092abb764.png"}})]),t._v(" "),e("h1",{attrs:{id:"_7-gc调优"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-gc调优"}},[t._v("#")]),t._v(" 7. GC调优")]),t._v(" "),e("p",[e("strong",[t._v("确定目标")]),t._v("：依据需求（低延迟？高吞吐量？）选择合适的GC回收器")]),t._v(" "),e("p",[e("strong",[t._v("最快的GC是不发生GC")]),t._v("：首先减少因自身编写的代码而引发的内存问题")]),t._v(" "),e("p",[t._v("查看Full GC 前后的内存占用，考虑数据是不是太多？数据的表示是否太臃肿？是否存在内存泄漏？")]),t._v(" "),e("p",[e("strong",[t._v("新生代调优")])]),t._v(" "),e("p",[t._v("新生代的特点：")]),t._v(" "),e("ul",[e("li",[t._v("new操作分配的内存都是非常廉价的")]),t._v(" "),e("li",[t._v("死亡对象回收零代价")]),t._v(" "),e("li",[t._v("大部分对象用过即死")]),t._v(" "),e("li",[t._v("Minor GC的时间远小于Full GC")])]),t._v(" "),e("p",[e("strong",[t._v("新生代内存越大越好么？")])]),t._v(" "),e("p",[t._v("答：不是")]),t._v(" "),e("ul",[e("li",[t._v("新生代内存太小，会频繁的触发Minor GC，会产生STW，使得吞吐量下降")]),t._v(" "),e("li",[t._v("新生代内存太大，会导致老年代的内存占比降低，会频繁的触发Full GC。而且触发Minor GC时，清理新生代的内存所花费的时间会更长")]),t._v(" "),e("li",[t._v("新生代的内存设置为容纳"),e("code",[t._v("[并发量*(请求-响应)]")]),t._v("的数据为宜")])]),t._v(" "),e("p",[e("strong",[t._v("幸存区调优")])]),t._v(" "),e("ul",[e("li",[t._v("幸存区需要能够保存当前活跃对象+需要晋升的对象的空间")]),t._v(" "),e("li",[t._v("晋升的阈值要配置得当，让长时间存活的对象尽快得到晋升")])])])}),[],!1,null,null,null);a.default=r.exports},726:function(t,a,s){t.exports=s.p+"assets/img/41a46fb64be146b810a0adaf635a67b1.41a46fb6.png"},727:function(t,a,s){t.exports=s.p+"assets/img/0abdb3302e77c11bc165b71e409a0ee1.0abdb330.png"},728:function(t,a,s){t.exports=s.p+"assets/img/61659e4296e7c81e56e830d5efee8a96.61659e42.png"},729:function(t,a,s){t.exports=s.p+"assets/img/52dfab1124852d59ff984923d1f0ad86.52dfab11.png"},730:function(t,a,s){t.exports=s.p+"assets/img/0edf4222d812cff2ef996d9d359bdee3.0edf4222.png"},731:function(t,a,s){t.exports=s.p+"assets/img/65cbbcc2368da34d6300543dacaa2733.65cbbcc2.png"},732:function(t,a,s){t.exports=s.p+"assets/img/69971401432d60abeb0ee64afc9677ed.69971401.png"},733:function(t,a,s){t.exports=s.p+"assets/img/687863e8bbc67db7b57266ff81d3bba2.687863e8.png"},734:function(t,a,s){t.exports=s.p+"assets/img/073611cea79409473dd7970ee091bd33.073611ce.png"},735:function(t,a,s){t.exports=s.p+"assets/img/3c54615183e106cfebc5502a912971d6.3c546151.png"},736:function(t,a,s){t.exports=s.p+"assets/img/906644b004e563c7410f3d327b6da8f8.906644b0.png"},737:function(t,a,s){t.exports=s.p+"assets/img/db5917492570569880bf169092abb764.db591749.png"}}]);