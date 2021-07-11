(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1120:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_1-java-容器有哪些"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-java-容器有哪些"}},[t._v("#")]),t._v(" 1. Java 容器有哪些？")]),t._v(" "),n("ul",[n("li",[t._v("Collection\n"),n("ul",[n("li",[t._v("Set：HashSet、TreeSet")]),t._v(" "),n("li",[t._v("List：ArrayList、LinkedList、Vector")])])]),t._v(" "),n("li",[t._v("Map: HashMap、HashTable、TreeMap")])]),t._v(" "),n("h1",{attrs:{id:"_2-collection-和-collections-有什么区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-collection-和-collections-有什么区别"}},[t._v("#")]),t._v(" 2. Collection 和 Collections 有什么区别？")]),t._v(" "),n("ul",[n("li",[t._v("Collection 是最基本的集合接口，其派生了两个子接口 Set 和 List，分别定义了两种不同的存储方式；")]),t._v(" "),n("li",[t._v("Collections 是一个包装工具类，服务于 Collection 框架，其包含各种有关集合操作的静态方法（对集合的搜索、排序、线程安全化等）；")])]),t._v(" "),n("h1",{attrs:{id:"_3-list-与-set-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-list-与-set-的区别"}},[t._v("#")]),t._v(" 3. List 与 Set 的区别？")]),t._v(" "),n("h2",{attrs:{id:"list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" List")]),t._v(" "),n("p",[t._v("Java 中有两种 List，一种是 ArrayList，其优点在于随机访问元素；另一种是 LinkedList，它并不是为快速随机访问而设计的，其特点是快速的插入和删除。")]),t._v(" "),n("ul",[n("li",[t._v("ArrayList：底层由数组实现。其允许对元素进行快速的随机访问，但是向 List 中插入与删除元素的速度很慢；")]),t._v(" "),n("li",[t._v("LinkedList：对访问顺序进行了优化，向 List 中插入与删除的开销不大，但随机访问相对较慢；\n其具有下列方法："),n("code",[t._v("addFirst() / addLast() / getFirst() / GetLast() / removeFirst() / removeLast")]),t._v("，这些方法使得 LinkedList 可以当做堆栈、队列和双向队列使用。")])]),t._v(" "),n("h2",{attrs:{id:"set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" Set")]),t._v(" "),n("p",[t._v("Set 具有与 Collection 完全相同的接口，因此没有任何额外的功能。实际上 Set 就是 Collection，只是行为不同。")]),t._v(" "),n("p",[t._v("存入 Set 的元素都必须是唯一的，Set 不存储重复元素。加入 Set 的元素必须定义 equals() 方法来保证对象的唯一性。Set 不维护元素的次序。")]),t._v(" "),n("ul",[n("li",[t._v("HashSet：为快速查找而设计的 Set。加入 Set 的对象必须定义 hashcode()；")]),t._v(" "),n("li",[t._v("TreeSet：维护元素次序的 Set，底层为树结构，使用 TreeSet 可以从 Set 中获取有序的序列；")])]),t._v(" "),n("h2",{attrs:{id:"list-与-set-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#list-与-set-的区别"}},[t._v("#")]),t._v(" List 与 Set 的区别")]),t._v(" "),n("ul",[n("li",[t._v("两者均继承自 Collection 接口")]),t._v(" "),n("li",[t._v("List 特点：有序可重复；Set 特点：无需不可重复")]),t._v(" "),n("li",[t._v("List 支持 for 循环下标遍历或者迭代器；Set 只能使用迭代器（因为无序）")]),t._v(" "),n("li",[t._v("List 与数组相似，可以动态增长，查找元素效率高，插入删除元素效率低（因为会引起其他元素位置的改变）；Set 检索元素效率低，插入和删除元素效率高（不会引起其他元素位置的改变）")])]),t._v(" "),n("h1",{attrs:{id:"_4-hashmap-和-hashtable-有什么区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-hashmap-和-hashtable-有什么区别"}},[t._v("#")]),t._v(" 4. HashMap 和 HashTable 有什么区别？")]),t._v(" "),n("ul",[n("li",[t._v("HashMap 是线程不安全的；HashTable 是线程安全的")]),t._v(" "),n("li",[t._v("HashMap 中允许键和值为 null；HashTable 不允许")]),t._v(" "),n("li",[t._v("HashMap 默认的容量为 16，2 倍扩容；HashTable 初始容量为 11，为 2 倍 + 1 扩容")])]),t._v(" "),n("h1",{attrs:{id:"_5-说一下-hashmap-的实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-说一下-hashmap-的实现原理"}},[t._v("#")]),t._v(" 5. 说一下 HashMap 的实现原理？")]),t._v(" "),n("p",[t._v("HashMap 基于 Map 接口，元素以键值对的方式存储，允许存在 null 值，其是线程不安全的")]),t._v(" "),n("h2",{attrs:{id:"hashmap-的基本属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-的基本属性"}},[t._v("#")]),t._v(" HashMap 的基本属性")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("static final int DEFAULT_INITIAL_CAPACITY = 1 << 4;")]),t._v("：初始化大小默认 16，2 倍扩容")]),t._v(" "),n("li",[n("code",[t._v("static final float DEFAULT_LOAD_FACTOR = 0.75f;")]),t._v("：负载因子 0.75")]),t._v(" "),n("li",[n("code",[t._v("transient Node<K,V>[] table;")]),t._v("：初始化的默认数组")]),t._v(" "),n("li",[n("code",[t._v("transient int size;")]),t._v("：Map 大小")]),t._v(" "),n("li",[n("code",[t._v("int threshold;")]),t._v("：判断是否需要调整 HashMap 容量")])]),t._v(" "),n("h2",{attrs:{id:"hashmap-存储结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-存储结构"}},[t._v("#")]),t._v(" HashMap 存储结构")]),t._v(" "),n("p",[t._v("在 JDK 1.7 中采用数组 + 链表的方式存储。HashMap 采用 Node<K, V> 数组来存储 key-value，每一个键值对组成一个 Entry 实体，Entry 类实际上是一个单向的链表结构，它具有 next 指针，指向下一个 Entry 实体，以此来解决 Hash 冲突问题。")]),t._v(" "),n("p",[t._v("HashMap 实现一个内部类 Node<K, V>，其重要属性有 hash, key, value, next。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(924),alt:"java02-1.jpg"}})]),t._v(" "),n("p",[t._v("在 JDK 1.8 中采用数据 + 链表 + 红黑树的存储方式。当链表的长度超过阈值"),n("code",[t._v("static final int TREEIFY_THRESHOLD = 8;")]),t._v("时，将链表转换为红黑树，使性能进一步提升。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(925),alt:"java02-2.jpg"}})]),t._v(" "),n("h1",{attrs:{id:"_6-set-有哪些实现类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-set-有哪些实现类"}},[t._v("#")]),t._v(" 6. Set 有哪些实现类？")]),t._v(" "),n("ul",[n("li",[t._v("HashSet\n"),n("ul",[n("li",[t._v("HashSet 是 Set 接口的实现类，也是使用最多的实现类")]),t._v(" "),n("li",[t._v("HashSet 是无序不可重复的，通过对象的 hashcode() 和 equals() 方法保证对象的唯一性")]),t._v(" "),n("li",[t._v("HashSet 内部的存储结构是 HashMap，是线程不安全的")])])]),t._v(" "),n("li",[t._v("TreeSet\n"),n("ul",[n("li",[t._v("TreeSet 对元素进行排序有两种方式：若元素自身具备比较功能，则需要实现 Comparable 接口，覆盖 compareTo() 方法；若元素自身不具备比较功能，则需要实现 Comparator 接口，覆盖 compare() 方法")])])]),t._v(" "),n("li",[t._v("LinkedHashSet\n"),n("ul",[n("li",[t._v("LinkedHashSet 是一种有序的 Set 集合，即元素的存入与输出的顺序是相同的")])])])]),t._v(" "),n("h2",{attrs:{id:"comparable接口和comparator接口有哪些区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#comparable接口和comparator接口有哪些区别"}},[t._v("#")]),t._v(" Comparable接口和Comparator接口有哪些区别？")]),t._v(" "),n("ul",[n("li",[t._v("Comparable 实现比较简单，但是当需要重新定义比较规则的时候，必须修改源代码，即修改 User 类里边的 compareTo() 方法")]),t._v(" "),n("li",[t._v("Comparator 接口不需要修改源代码，只需要在创建 TreeMap 的时候重新传入一个具有指定规则的比较器 Comparator 即可。")])]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式一：定义该类的时候，就指定比较规则")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Comparable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这里边定义其比较规则：0判定为相同，1为不同")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式二：创建TreeMap的时候，可以指定比较规则")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeMap")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Comparator")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" o1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" o2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这里边定义其比较规则：0判定为相同，1为不同")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])]),n("h1",{attrs:{id:"_7-说一下-hashset-的实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-说一下-hashset-的实现原理"}},[t._v("#")]),t._v(" 7. 说一下 HashSet 的实现原理？")]),t._v(" "),n("p",[t._v("HashSet 实际上是一个HashMap 实例，数据存储结构均为数组 + 链表。HashSet 中的元素都存放在 HashMap 的 key，而 value 都是一个统一的对象 PRESENT。 "),n("code",[t._v("private static final Object PRESENT = new Object();")])]),t._v(" "),n("p",[t._v("HashSet 中的 add() 方法底层调用的是 HashMap 中的 put() 方法，该方法首先判断要插入的值是否存在，如果存在则不插入，不存在则插入，以此保证 HashSet 中不存在重复值。")]),t._v(" "),n("h1",{attrs:{id:"_8-arraylist-和-linkedlist-的区别是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-arraylist-和-linkedlist-的区别是什么"}},[t._v("#")]),t._v(" 8. ArrayList 和 LinkedList 的区别是什么？")]),t._v(" "),n("ul",[n("li",[t._v("ArrayList 采用动态数组实现，查询和遍历效率高")]),t._v(" "),n("li",[t._v("LinkedList 采用双向链表实现，增加和删除的效率高")])]),t._v(" "),n("h1",{attrs:{id:"_9-如何实现-list-和-array-之间的转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-如何实现-list-和-array-之间的转换"}},[t._v("#")]),t._v(" 9. 如何实现 List 和 Array 之间的转换？")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ls"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ww"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// array --\x3e list")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlist1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlist1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"李四"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlist1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"王五"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("list1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// list --\x3e array")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("h1",{attrs:{id:"_10-在队列-queue-中-poll-和-remove-有什么区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-在队列-queue-中-poll-和-remove-有什么区别"}},[t._v("#")]),t._v(" 10. 在队列 Queue 中，poll() 和 remove() 有什么区别？")]),t._v(" "),n("ul",[n("li",[t._v("offer() VS add()\n"),n("ul",[n("li",[t._v("offer()：添加新元素时，若队列满，返回 false；")]),t._v(" "),n("li",[t._v("add()：添加新元素时，若队列满，抛出异常；")])])]),t._v(" "),n("li",[t._v("poll() VS remove()\n"),n("ul",[n("li",[t._v("poll()：从队列中删除第一个元素，若队列空，返回 null；")]),t._v(" "),n("li",[t._v("remove()：从队列中删除第一个元素，若队列空，抛出异常；")])])]),t._v(" "),n("li",[t._v("peek() VS element()\n"),n("ul",[n("li",[t._v("peek()：查询队列头元素，若队列空，返回 null；")]),t._v(" "),n("li",[t._v("element()：查询队列头元素，若队列空，抛出异常；")])])])]),t._v(" "),n("h1",{attrs:{id:"_11-哪些集合类是线程安全的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-哪些集合类是线程安全的"}},[t._v("#")]),t._v(" 11. 哪些集合类是线程安全的？")]),t._v(" "),n("ul",[n("li",[t._v("Vector：较 ArrayList 相比添加了同步化机制保证线程安全")]),t._v(" "),n("li",[t._v("Stack：栈继承于 Vector")]),t._v(" "),n("li",[t._v("HashTable：较 HashMap 相比增加了线程安全")]),t._v(" "),n("li",[t._v("ConcurrentHashMap：高效且线程安全的集合")])]),t._v(" "),n("h1",{attrs:{id:"_12-迭代器-iterator-是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12-迭代器-iterator-是什么"}},[t._v("#")]),t._v(" 12. 迭代器 Iterator 是什么？")]),t._v(" "),n("p",[t._v("为方便处理集合中的元素，Java 中出现了一个对象，该对象提供了一些专门处理集合中元素的方法，该对象即迭代器 Iterator")]),t._v(" "),n("h1",{attrs:{id:"_13-iterator-如何使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_13-iterator-如何使用"}},[t._v("#")]),t._v(" 13. Iterator 如何使用？")]),t._v(" "),n("ul",[n("li",[t._v("Iterator 接口被 Collection 接口继承，Collection 接口的 iterator() 方法返回一个 Iterator 对象")]),t._v(" "),n("li",[t._v("next()：获得集合中的下一个元素")]),t._v(" "),n("li",[t._v("hasnext()：检查集合中是否还存在元素")]),t._v(" "),n("li",[t._v("remove()：将迭代器返回的元素删除")])]),t._v(" "),n("h1",{attrs:{id:"_14-iterator-和-listiterator-有什么区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14-iterator-和-listiterator-有什么区别"}},[t._v("#")]),t._v(" 14. Iterator 和 ListIterator 有什么区别？")]),t._v(" "),n("p",[t._v("ListIterator 继承自 Iterator。Iterator 可以迭代所有集合，ListIterator 只能迭代 List 及其子类。")]),t._v(" "),n("p",[t._v("ListIterator 新增的方法：")]),t._v(" "),n("ul",[n("li",[t._v("add(E e)：将指定的元素插入列表，插入位置为迭代器当前位置之前")]),t._v(" "),n("li",[t._v("set(E e)：迭代器返回的最后一个元素替换参数 e")]),t._v(" "),n("li",[t._v("hasPrevious()：迭代器当前位置，反向遍历集合是否含有元素")]),t._v(" "),n("li",[t._v("previous()：迭代器当前位置，反向遍历集合，下一个元素")]),t._v(" "),n("li",[t._v("previousIndex()：迭代器当前位置，反向遍历集合，返回下一个元素的下标")]),t._v(" "),n("li",[t._v("nextIndex()：迭代器当前位置，返回下一个元素的下标")])]),t._v(" "),n("h1",{attrs:{id:"_15-如何确保一个集合不可被修改"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_15-如何确保一个集合不可被修改"}},[t._v("#")]),t._v(" 15. 如何确保一个集合不可被修改？")]),t._v(" "),n("p",[t._v("首先这个问题很容易想到 final 关键字。final 关键字修饰类，则该类不可被继承；修饰方法，则该方法不可被重写；修饰成员变量，则该成员变量必须有初始化值，若该变量为基本数据类型，则变量值不能改变，若为引用变量，则其引用地址不可改变，但是其值可以改变！")]),t._v(" "),n("p",[t._v("因此为解决这个问题，Collections 包中提供了 unmodifiableMap(Map) 方法，通过该方法返回的 map 是不可以被修改的。若执行修改则会产生 java.lang.UnsupportedOperationException。")]),t._v(" "),n("p",[t._v("同理，Collections 也提供了对应的 List 和 Set 方法：Collections.unmodifiableList(List)、Collections.unmodifiableSet(Set)")]),t._v(" "),n("h1",{attrs:{id:"_16-队列和栈是什么-有何区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_16-队列和栈是什么-有何区别"}},[t._v("#")]),t._v(" 16. 队列和栈是什么？有何区别？")]),t._v(" "),n("ul",[n("li",[t._v("队列先进先出；栈先进后出；")]),t._v(" "),n("li",[t._v("遍历数据的速度不同\n"),n("ul",[n("li",[t._v("栈只能从头部取数据，即最先放入的数据需要遍历整个栈才能取出，且在遍历时还需要开辟额外空间以保持数据在遍历前后的一致性；")]),t._v(" "),n("li",[t._v("队列基于地址指针进行遍历，可以从头部或者尾部开始遍历，但不可同时遍历，其无需开辟额外空间，查询速度快得多；")])])])]),t._v(" "),n("h1",{attrs:{id:"_17-concurrenthashmap-和-hashtable-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_17-concurrenthashmap-和-hashtable-的区别"}},[t._v("#")]),t._v(" 17. ConcurrentHashMap 和 Hashtable 的区别")]),t._v(" "),n("p",[t._v("ConcurrentHashMap 结合了 HashMap 和 Hashtable 二者的优势。HashMap 没有考虑同步，Hashtable 考虑了同步的问题。但是Hashtable 在每次同步执行时都要锁住整个结构。")]),t._v(" "),n("p",[t._v("ConcurrentHashMap 锁是微细粒度的，ConcurrentHashMap 将 hash 表分为 16 个桶，诸如 get，put，remove 等常用操作只锁上当前需要用到的桶。")]),t._v(" "),n("p",[t._v("而且在迭代时，concurrentHashMap 使用了不同于传统集合的快速失败迭代器的另一种迭代方式，弱一致迭代器。\n在这种方式中，当 iterator 被创建后集合再发生改变就不会抛出 ConcurrentModificationException，取而代之的是在改变时 new 新的数据而不是影响原来的数据，iterator 完成后再讲头指针替代为新的数据。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(926),alt:"java02-5.jpg"}})]),t._v(" "),n("h2",{attrs:{id:"concurrenthashmap-的原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap-的原理"}},[t._v("#")]),t._v(" ConcurrentHashMap 的原理")]),t._v(" "),n("ul",[n("li",[t._v("JDK 7\n"),n("ul",[n("li",[t._v("数据结构：ReentrantLock + Segment + HashEntry；在一个 Segment 中包含一个数组，数组的每一个位置存储的又是一个链表结构。其 get() 方法无须加锁，Node.val 使用 voltaile 保证可见性。")]),t._v(" "),n("li",[t._v("元素查询：需要二次 hash，第一次定位到 Segment，第二次定位到元素所在链表的头部。")]),t._v(" "),n("li",[t._v("锁：使用 Segment 分段锁，Segment 继承 ReentrantLock，只锁定当前操作的 Segment，其他的 Segment 不受影响。其并发度为 Segment 的个数，可以通过构造函数指定。数组扩容不会影响其他 Segment。")])])])]),t._v(" "),n("p",[n("img",{attrs:{src:s(927),alt:"java02-3.jpg"}})]),t._v(" "),n("ul",[n("li",[t._v("JDK 8\n"),n("ul",[n("li",[t._v("数据结构：suychronized + CAS + HashEntry + 红黑树；Node 的 val 和 next 都使用 voltaile 保证可见性，数组使用 voltaile 修饰以保证扩容时被读线程感知。")]),t._v(" "),n("li",[t._v("其元素的查找、替换、赋值操作都使用 CAS 实现。")]),t._v(" "),n("li",[t._v("锁：只锁住链表的 head 节点，不影响其他元素的读写，细粒度更细，效率更高。扩容时阻塞所有的读写操作，并发扩容。")])])])]),t._v(" "),n("p",[n("img",{attrs:{src:s(928),alt:"java02-4.jpg"}})]),t._v(" "),n("h1",{attrs:{id:"_18-hashmap-和-hashset-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_18-hashmap-和-hashset-的区别"}},[t._v("#")]),t._v(" 18. HashMap 和 HashSet 的区别？")]),t._v(" "),n("ul",[n("li",[t._v("HashMap\n"),n("ul",[n("li",[t._v("实现了 Map 接口")]),t._v(" "),n("li",[t._v("存储键值对")]),t._v(" "),n("li",[t._v("调用 put() 方法添加元素")]),t._v(" "),n("li",[t._v("HashMap 使用 key 计算 HashCode")]),t._v(" "),n("li",[t._v("HashMap 比 HashSet 速度快")])])]),t._v(" "),n("li",[t._v("HashSet\n"),n("ul",[n("li",[t._v("实现了 Set 接口")]),t._v(" "),n("li",[t._v("存储对象")]),t._v(" "),n("li",[t._v("调用 add() 方法添加元素")]),t._v(" "),n("li",[t._v("HashSet 使用成员对象来计算 hashcode 值，若 hashcode 相同则调用 equals() 方法判断是否相等")]),t._v(" "),n("li",[t._v("HashSet 比 HashMap 速度慢")])])])])])}),[],!1,null,null,null);a.default=e.exports},924:function(t,a,s){t.exports=s.p+"assets/img/java02-1.4a73770e.jpg"},925:function(t,a,s){t.exports=s.p+"assets/img/java02-2.27885287.jpg"},926:function(t,a,s){t.exports=s.p+"assets/img/java02-5.f5d72b7d.jpg"},927:function(t,a,s){t.exports=s.p+"assets/img/java02-3.f73a2cf5.jpg"},928:function(t,a,s){t.exports=s.p+"assets/img/java02-4.82377282.jpg"}}]);