import{_ as s}from"./chunks/CS.8a81f91e.js";import{_ as n,o as a,c as e,Q as l}from"./chunks/framework.e90f0c97.js";const p="/assets/HARD1.31d5a707.png",g=JSON.parse('{"title":"CS-HARD-01-cache","description":"","frontmatter":{"prev":{"text":"CS-MEDIUM-04 计算机网络常识与实验","link":"./CS-MEDIUM-04 计算机网络常识与实验"},"next":false},"headers":[],"relativePath":"md/计算机系统/CS-HARD-01-cache.md","filePath":"md/计算机系统/CS-HARD-01-cache.md"}'),c={name:"md/计算机系统/CS-HARD-01-cache.md"},o=l('<p><img src="'+s+'" alt="标题"></p><h1 id="cs-hard-01-cache" tabindex="-1">CS-HARD-01-cache <a class="header-anchor" href="#cs-hard-01-cache" aria-label="Permalink to &quot;CS-HARD-01-cache&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>​ 所有的现代处理器都包含一个或多个高速缓存存储器，以对这样少量的存储器提供快速的访问。这一设计的根本原因在于中央处理器与主存储器之间存在的巨大性能鸿沟。随着处理器时钟频率的飞速提升，主存的访问延迟已成为制约系统整体性能的关键瓶颈，这一现象被称为“<strong>内存墙</strong>”。</p><p>​ 为了有效弥合这一差距，计算机设计者引入了“<strong>存储层次结构</strong>”的概念。高速缓存正是这一层次结构中至关重要的一环，它作为CPU与主存之间的高速缓冲层而存在。</p><p>​ 高速缓存之所以能以较小的容量实现显著的性能提升，其理论基石是程序的“<strong>局部性原理</strong>”。该原理指出，程序在一段时间内的内存访问行为并非随机分布，而是倾向于集中在特定的区域。它主要表现为两种形式：</p><ul><li><strong>时间局部性</strong>：被访问过的内存位置，在不久的将来很可能被再次访问。</li><li><strong>空间局部性</strong>：如果一个内存位置被访问，其附近的内存位置也很可能在不久的将来被访问。</li></ul><p>​ 本项目的任务就是实现一个高速缓存模拟器。通过编程模拟缓存的<strong>命中</strong>、<strong>未命中</strong>以及<strong>数据替换</strong>等行为，你将对缓存的组织结构、地址映射和替换策略有深入的、实践性的理解。</p><h2 id="step-1-前置知识学习" tabindex="-1">Step 1 前置知识学习 <a class="header-anchor" href="#step-1-前置知识学习" aria-label="Permalink to &quot;Step 1 前置知识学习&quot;">​</a></h2><h3 id="任务" tabindex="-1">任务 : <a class="header-anchor" href="#任务" aria-label="Permalink to &quot;任务 :&quot;">​</a></h3><ul><li><p>了解存储层次结构，尤其是高速缓存 (L1, L2, L3) 在其中所处的位置，简单理解寄存器、各级缓存、主存与磁盘之间的速度、容量和成本关系。</p></li><li><p>了解缓存的基本原理和缓存的地址映射</p></li><li><p>了解缓存的核心操作与算法</p><ul><li>缓存未命中时使用的替换策略(LRU ,FIFO,Random等)</li><li>缓存写入时使用的策略</li></ul></li><li><p>了解量缓存性能的关键指标</p><ul><li>命中率与 和 未命中率</li><li>平均访存时间</li></ul></li></ul><h3 id="要求" tabindex="-1">要求 <a class="header-anchor" href="#要求" aria-label="Permalink to &quot;要求&quot;">​</a></h3><ul><li>将任务中问题用你自己的语言描述讲解，可配图</li></ul><h2 id="step-2-实现一个你的cache模拟器" tabindex="-1">Step 2 实现一个你的cache模拟器 <a class="header-anchor" href="#step-2-实现一个你的cache模拟器" aria-label="Permalink to &quot;Step 2 实现一个你的cache模拟器&quot;">​</a></h2><blockquote><p>实现一个高速缓存模拟器也许对你并不容易，但别担心，只需要将大问题分解成一个个小问题，相信你也能实现</p></blockquote><h4 id="高速缓存模拟器介绍" tabindex="-1">高速缓存模拟器介绍 <a class="header-anchor" href="#高速缓存模拟器介绍" aria-label="Permalink to &quot;高速缓存模拟器介绍&quot;">​</a></h4><p>该高速缓存模拟器(以下简称模拟器)支持 <code>4</code> 个参数:</p><ul><li><code>-s</code> 组索引的位数</li><li><code>-E</code> 行数</li><li><code>-b</code> 块大小 <code>B = 2^b</code></li><li><code>-t</code> 输入文件 <code>trace</code> 的路径</li></ul><p>其中前三个参数描述了一个高速缓存存储器，可以参考下图</p><p><img src="'+p+`" alt=""></p><p>第四个参数给出了输入文件的路径</p><h3 id="模拟器输入与输出" tabindex="-1">模拟器输入与输出 <a class="header-anchor" href="#模拟器输入与输出" aria-label="Permalink to &quot;模拟器输入与输出&quot;">​</a></h3><p>在输入文件中我们将给出模拟器的指令,其中每一行都是一次独立操作</p><p>输入文件格式遵循 <code>[space]operation address, size</code> ，其中操作有三种</p><ul><li><code>L</code> 加载数据</li><li><code>S</code> 存储数据</li><li><code>M</code> 修改数据</li></ul><p>而 <code>address</code> 为 <code>64</code> 位，以 <code>16</code> 进制给出，<code>size</code> 以字节为单位</p><p>你的程序面对每个操作需要给出模拟的结果，分为三种</p><ul><li><code>hit</code> 命中</li><li><code>miss</code> 不命中</li><li><code>eviction</code> 驱赶，进行了替换操作</li></ul><h4 id="代码编写" tabindex="-1">代码编写 <a class="header-anchor" href="#代码编写" aria-label="Permalink to &quot;代码编写&quot;">​</a></h4><ol><li><p>缓存组结构</p><p>本题缓存组和缓存行使用双向链表进行实现，本题需要你 <strong>模拟和分析缓存的性能</strong>，可以不真正存储数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">typedef struct cache_line {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int tag;                 // 存储地址的标签(tag)部分</span></span>
<span class="line"><span style="color:#e1e4e8;">    // int data </span></span>
<span class="line"><span style="color:#e1e4e8;">    struct cache_line* prev; // 指向前一个节点的指针</span></span>
<span class="line"><span style="color:#e1e4e8;">    struct cache_line* next; // 指向后一个节点的指针</span></span>
<span class="line"><span style="color:#e1e4e8;">} cache_line;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 定义缓存组结构体</span></span>
<span class="line"><span style="color:#e1e4e8;">// 每个组本质上是一个缓存行的集合。</span></span>
<span class="line"><span style="color:#e1e4e8;">typedef struct cache_set {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int len;            // 当前组中已存储的缓存行数量</span></span>
<span class="line"><span style="color:#e1e4e8;">    cache_line* head;   // 指向链表头部的指针（LRU端）</span></span>
<span class="line"><span style="color:#e1e4e8;">    cache_line* tail;   // 指向链表尾部的指针（MRU端）</span></span>
<span class="line"><span style="color:#e1e4e8;">} cache_set;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">typedef struct cache_line {</span></span>
<span class="line"><span style="color:#24292e;">    int tag;                 // 存储地址的标签(tag)部分</span></span>
<span class="line"><span style="color:#24292e;">    // int data </span></span>
<span class="line"><span style="color:#24292e;">    struct cache_line* prev; // 指向前一个节点的指针</span></span>
<span class="line"><span style="color:#24292e;">    struct cache_line* next; // 指向后一个节点的指针</span></span>
<span class="line"><span style="color:#24292e;">} cache_line;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 定义缓存组结构体</span></span>
<span class="line"><span style="color:#24292e;">// 每个组本质上是一个缓存行的集合。</span></span>
<span class="line"><span style="color:#24292e;">typedef struct cache_set {</span></span>
<span class="line"><span style="color:#24292e;">    int len;            // 当前组中已存储的缓存行数量</span></span>
<span class="line"><span style="color:#24292e;">    cache_line* head;   // 指向链表头部的指针（LRU端）</span></span>
<span class="line"><span style="color:#24292e;">    cache_line* tail;   // 指向链表尾部的指针（MRU端）</span></span>
<span class="line"><span style="color:#24292e;">} cache_set;</span></span></code></pre></div></li><li><p><strong>Cache</strong> 替换算法</p><p>本题使用 <code>LRU</code> 算法，即将最近最少使用的内容替换掉</p><ul><li>请你思考再本题的缓存组结构下如何使用 <code>LRU</code> 算法</li></ul></li></ol><p>请你仔细阅读代码后，根据代码注释给出的要求完成你的模拟器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;getopt.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;string.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdarg.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;unistd.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdbool.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;math.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;assert.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;time.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 读取文件时每行的最大长度</span></span>
<span class="line"><span style="color:#e1e4e8;">#define MAXLINE 100</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 全局变量，用于存储缓存的参数</span></span>
<span class="line"><span style="color:#e1e4e8;">// s: 组索引的位数 (number of set index bits)</span></span>
<span class="line"><span style="color:#e1e4e8;">// S: 缓存组的数量 (number of sets), S = 2^s</span></span>
<span class="line"><span style="color:#e1e4e8;">// E: 每个组的行数 (associativity, number of lines per set)</span></span>
<span class="line"><span style="color:#e1e4e8;">// b: 块内偏移的位数 (number of block bits)</span></span>
<span class="line"><span style="color:#e1e4e8;">int s, S, E, b;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 定义缓存行结构体</span></span>
<span class="line"><span style="color:#e1e4e8;">typedef struct cache_line {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int tag;                 // 存储地址的标签(tag)部分</span></span>
<span class="line"><span style="color:#e1e4e8;">     int data </span></span>
<span class="line"><span style="color:#e1e4e8;">    struct cache_line* prev; // 指向前一个节点的指针</span></span>
<span class="line"><span style="color:#e1e4e8;">    struct cache_line* next; // 指向后一个节点的指针</span></span>
<span class="line"><span style="color:#e1e4e8;">} cache_line;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 定义缓存组结构体</span></span>
<span class="line"><span style="color:#e1e4e8;">// 每个组本质上是一个缓存行的集合。</span></span>
<span class="line"><span style="color:#e1e4e8;">// 使用双向链表来管理这些行，以便高效实现LRU策略。</span></span>
<span class="line"><span style="color:#e1e4e8;">typedef struct cache_set {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int len;            // 当前组中已存储的缓存行数量</span></span>
<span class="line"><span style="color:#e1e4e8;">    cache_line* head;   // 指向链表头部的指针</span></span>
<span class="line"><span style="color:#e1e4e8;">    cache_line* tail;   // 指向链表尾部的指针</span></span>
<span class="line"><span style="color:#e1e4e8;">} cache_set;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @brief 总结并打印缓存模拟的统计数据。</span></span>
<span class="line"><span style="color:#e1e4e8;"> *</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param hits 命中总次数。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param misses 未命中总次数。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param evictions 驱逐总次数。</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">void printSummary(int hits, int misses, int evictions)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    printf(&quot;hits:%d misses:%d evictions:%d\\n&quot;, hits, misses, evictions);</span></span>
<span class="line"><span style="color:#e1e4e8;">    FILE* output_fp = fopen(&quot;.csim_results&quot;, &quot;w&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    assert(output_fp);</span></span>
<span class="line"><span style="color:#e1e4e8;">    fprintf(output_fp, &quot;%d %d %d\\n&quot;, hits, misses, evictions);</span></span>
<span class="line"><span style="color:#e1e4e8;">    fclose(output_fp);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @brief 打印错误信息到标准错误流并退出程序。</span></span>
<span class="line"><span style="color:#e1e4e8;"> *</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param msg 格式化的错误信息字符串。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param ... 可变参数，用于格式化字符串。</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">void err_sys(const char *msg, ...) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    char buf[MAXLINE];</span></span>
<span class="line"><span style="color:#e1e4e8;">    va_list ap;</span></span>
<span class="line"><span style="color:#e1e4e8;">    va_start(ap, msg);</span></span>
<span class="line"><span style="color:#e1e4e8;">    vsnprintf(buf, MAXLINE - 1, msg, ap);</span></span>
<span class="line"><span style="color:#e1e4e8;">    va_end(ap);</span></span>
<span class="line"><span style="color:#e1e4e8;">    strcat(buf, &quot;\\n&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    fputs(buf, stderr);</span></span>
<span class="line"><span style="color:#e1e4e8;">    fflush(NULL);</span></span>
<span class="line"><span style="color:#e1e4e8;">    exit(0);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @brief 将一个缓存行节点插入到缓存组队列的尾部。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @brief 这是LRU策略的一部分，最近使用的项放在队尾(MRU端)。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 此函数需要处理链表为空和不为空两种情况。</span></span>
<span class="line"><span style="color:#e1e4e8;"> *</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param set 指向目标缓存组的指针。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param ptr 指向要插入的缓存行节点的指针。</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">void cache_insert(cache_set* set, cache_line* ptr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @brief 模拟一次缓存操作（命中、未命中、驱逐）。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @brief 采用LRU（最近最少使用）替换策略。</span></span>
<span class="line"><span style="color:#e1e4e8;"> *</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param set 指向要操作的缓存组的指针。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param address_tag 访问地址的标签(tag)部分。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @return 0 表示命中(hit)，1 表示未命中(miss)，2 表示未命中且有驱逐(miss eviction)。</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">int cache_operate(cache_set* set, int address_tag) {</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @brief 初始化一个缓存组</span></span>
<span class="line"><span style="color:#e1e4e8;"> *</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param set 指向要初始化的缓存组的指针。</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">void cache_init(cache_set* set) {</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @brief 运行缓存模拟。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @brief 此函数负责初始化缓存、读取trace文件并逐行模拟。</span></span>
<span class="line"><span style="color:#e1e4e8;"> *</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param filename 要读取的trace文件名。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param flagV 是否启用详细输出模式的标志。</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">void run_simulation(const char* filename, bool flagV) {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 提示：你可按照以下步骤完成该函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 1. [初始化统计变量] 定义并初始化 hits, misses, evictions 计数器为 0。</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 2. [打开文件] 记得处理失败情况</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 3. [初始化缓存]</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 4. [读取和处理Trace文件]</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 5. [计算地址部分]</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 6. [执行模拟] </span></span>
<span class="line"><span style="color:#e1e4e8;">    // 7. [释放内存]</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 8. [调用 printSummary] </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @brief 程序主入口。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @brief 负责解析命令行参数，保存到全局变量并调用模拟器核心函数。</span></span>
<span class="line"><span style="color:#e1e4e8;"> *</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param argc 命令行参数数量。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @param argv 命令行参数数组。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @return 成功时返回 0。</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">int main(int argc, char *argv[]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 提示：</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 需要检查用户输出了不合法参数</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#include &lt;getopt.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;string.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdarg.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;unistd.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdbool.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;math.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;assert.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;time.h&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 读取文件时每行的最大长度</span></span>
<span class="line"><span style="color:#24292e;">#define MAXLINE 100</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 全局变量，用于存储缓存的参数</span></span>
<span class="line"><span style="color:#24292e;">// s: 组索引的位数 (number of set index bits)</span></span>
<span class="line"><span style="color:#24292e;">// S: 缓存组的数量 (number of sets), S = 2^s</span></span>
<span class="line"><span style="color:#24292e;">// E: 每个组的行数 (associativity, number of lines per set)</span></span>
<span class="line"><span style="color:#24292e;">// b: 块内偏移的位数 (number of block bits)</span></span>
<span class="line"><span style="color:#24292e;">int s, S, E, b;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 定义缓存行结构体</span></span>
<span class="line"><span style="color:#24292e;">typedef struct cache_line {</span></span>
<span class="line"><span style="color:#24292e;">    int tag;                 // 存储地址的标签(tag)部分</span></span>
<span class="line"><span style="color:#24292e;">     int data </span></span>
<span class="line"><span style="color:#24292e;">    struct cache_line* prev; // 指向前一个节点的指针</span></span>
<span class="line"><span style="color:#24292e;">    struct cache_line* next; // 指向后一个节点的指针</span></span>
<span class="line"><span style="color:#24292e;">} cache_line;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 定义缓存组结构体</span></span>
<span class="line"><span style="color:#24292e;">// 每个组本质上是一个缓存行的集合。</span></span>
<span class="line"><span style="color:#24292e;">// 使用双向链表来管理这些行，以便高效实现LRU策略。</span></span>
<span class="line"><span style="color:#24292e;">typedef struct cache_set {</span></span>
<span class="line"><span style="color:#24292e;">    int len;            // 当前组中已存储的缓存行数量</span></span>
<span class="line"><span style="color:#24292e;">    cache_line* head;   // 指向链表头部的指针</span></span>
<span class="line"><span style="color:#24292e;">    cache_line* tail;   // 指向链表尾部的指针</span></span>
<span class="line"><span style="color:#24292e;">} cache_set;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * @brief 总结并打印缓存模拟的统计数据。</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> * @param hits 命中总次数。</span></span>
<span class="line"><span style="color:#24292e;"> * @param misses 未命中总次数。</span></span>
<span class="line"><span style="color:#24292e;"> * @param evictions 驱逐总次数。</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">void printSummary(int hits, int misses, int evictions)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    printf(&quot;hits:%d misses:%d evictions:%d\\n&quot;, hits, misses, evictions);</span></span>
<span class="line"><span style="color:#24292e;">    FILE* output_fp = fopen(&quot;.csim_results&quot;, &quot;w&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    assert(output_fp);</span></span>
<span class="line"><span style="color:#24292e;">    fprintf(output_fp, &quot;%d %d %d\\n&quot;, hits, misses, evictions);</span></span>
<span class="line"><span style="color:#24292e;">    fclose(output_fp);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * @brief 打印错误信息到标准错误流并退出程序。</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> * @param msg 格式化的错误信息字符串。</span></span>
<span class="line"><span style="color:#24292e;"> * @param ... 可变参数，用于格式化字符串。</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">void err_sys(const char *msg, ...) {</span></span>
<span class="line"><span style="color:#24292e;">    char buf[MAXLINE];</span></span>
<span class="line"><span style="color:#24292e;">    va_list ap;</span></span>
<span class="line"><span style="color:#24292e;">    va_start(ap, msg);</span></span>
<span class="line"><span style="color:#24292e;">    vsnprintf(buf, MAXLINE - 1, msg, ap);</span></span>
<span class="line"><span style="color:#24292e;">    va_end(ap);</span></span>
<span class="line"><span style="color:#24292e;">    strcat(buf, &quot;\\n&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    fputs(buf, stderr);</span></span>
<span class="line"><span style="color:#24292e;">    fflush(NULL);</span></span>
<span class="line"><span style="color:#24292e;">    exit(0);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * @brief 将一个缓存行节点插入到缓存组队列的尾部。</span></span>
<span class="line"><span style="color:#24292e;"> * @brief 这是LRU策略的一部分，最近使用的项放在队尾(MRU端)。</span></span>
<span class="line"><span style="color:#24292e;"> * 此函数需要处理链表为空和不为空两种情况。</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> * @param set 指向目标缓存组的指针。</span></span>
<span class="line"><span style="color:#24292e;"> * @param ptr 指向要插入的缓存行节点的指针。</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">void cache_insert(cache_set* set, cache_line* ptr) {</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * @brief 模拟一次缓存操作（命中、未命中、驱逐）。</span></span>
<span class="line"><span style="color:#24292e;"> * @brief 采用LRU（最近最少使用）替换策略。</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> * @param set 指向要操作的缓存组的指针。</span></span>
<span class="line"><span style="color:#24292e;"> * @param address_tag 访问地址的标签(tag)部分。</span></span>
<span class="line"><span style="color:#24292e;"> * @return 0 表示命中(hit)，1 表示未命中(miss)，2 表示未命中且有驱逐(miss eviction)。</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">int cache_operate(cache_set* set, int address_tag) {</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * @brief 初始化一个缓存组</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> * @param set 指向要初始化的缓存组的指针。</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">void cache_init(cache_set* set) {</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * @brief 运行缓存模拟。</span></span>
<span class="line"><span style="color:#24292e;"> * @brief 此函数负责初始化缓存、读取trace文件并逐行模拟。</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> * @param filename 要读取的trace文件名。</span></span>
<span class="line"><span style="color:#24292e;"> * @param flagV 是否启用详细输出模式的标志。</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">void run_simulation(const char* filename, bool flagV) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 提示：你可按照以下步骤完成该函数</span></span>
<span class="line"><span style="color:#24292e;">    // 1. [初始化统计变量] 定义并初始化 hits, misses, evictions 计数器为 0。</span></span>
<span class="line"><span style="color:#24292e;">    // 2. [打开文件] 记得处理失败情况</span></span>
<span class="line"><span style="color:#24292e;">    // 3. [初始化缓存]</span></span>
<span class="line"><span style="color:#24292e;">    // 4. [读取和处理Trace文件]</span></span>
<span class="line"><span style="color:#24292e;">    // 5. [计算地址部分]</span></span>
<span class="line"><span style="color:#24292e;">    // 6. [执行模拟] </span></span>
<span class="line"><span style="color:#24292e;">    // 7. [释放内存]</span></span>
<span class="line"><span style="color:#24292e;">    // 8. [调用 printSummary] </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * @brief 程序主入口。</span></span>
<span class="line"><span style="color:#24292e;"> * @brief 负责解析命令行参数，保存到全局变量并调用模拟器核心函数。</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> * @param argc 命令行参数数量。</span></span>
<span class="line"><span style="color:#24292e;"> * @param argv 命令行参数数组。</span></span>
<span class="line"><span style="color:#24292e;"> * @return 成功时返回 0。</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">int main(int argc, char *argv[]) {</span></span>
<span class="line"><span style="color:#24292e;">    // 提示：</span></span>
<span class="line"><span style="color:#24292e;">    // 需要检查用户输出了不合法参数</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    return 0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="要求-1" tabindex="-1">要求 <a class="header-anchor" href="#要求-1" aria-label="Permalink to &quot;要求&quot;">​</a></h3><ul><li><p>完成你的模拟器编写，并运行测试用例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">-s 1 -E 1 -b 2</span></span>
<span class="line"><span style="color:#e1e4e8;"> L 0,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> L 1,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> L 2,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> L 3,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> S 4,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> L 5,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> S 6,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> L 7,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> S 8,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> L 9,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> S a,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> L b,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> S c,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> L d,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> S e,1</span></span>
<span class="line"><span style="color:#e1e4e8;"> M f,1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">-s 1 -E 1 -b 2</span></span>
<span class="line"><span style="color:#24292e;"> L 0,1</span></span>
<span class="line"><span style="color:#24292e;"> L 1,1</span></span>
<span class="line"><span style="color:#24292e;"> L 2,1</span></span>
<span class="line"><span style="color:#24292e;"> L 3,1</span></span>
<span class="line"><span style="color:#24292e;"> S 4,1</span></span>
<span class="line"><span style="color:#24292e;"> L 5,1</span></span>
<span class="line"><span style="color:#24292e;"> S 6,1</span></span>
<span class="line"><span style="color:#24292e;"> L 7,1</span></span>
<span class="line"><span style="color:#24292e;"> S 8,1</span></span>
<span class="line"><span style="color:#24292e;"> L 9,1</span></span>
<span class="line"><span style="color:#24292e;"> S a,1</span></span>
<span class="line"><span style="color:#24292e;"> L b,1</span></span>
<span class="line"><span style="color:#24292e;"> S c,1</span></span>
<span class="line"><span style="color:#24292e;"> L d,1</span></span>
<span class="line"><span style="color:#24292e;"> S e,1</span></span>
<span class="line"><span style="color:#24292e;"> M f,1</span></span></code></pre></div></li><li><p>提交你的.c文件以及运行结果图</p></li><li><p>测试更多样例</p></li></ul><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><h3 id="任务-1" tabindex="-1">任务 <a class="header-anchor" href="#任务-1" aria-label="Permalink to &quot;任务&quot;">​</a></h3><ul><li>尝试实现更多淘汰策略</li><li>对你的模拟器进行大规模测试</li></ul><h4 id="提示" tabindex="-1">提示 <a class="header-anchor" href="#提示" aria-label="Permalink to &quot;提示&quot;">​</a></h4><ul><li>了解<code>srand</code>和<code>rand</code>等函数，随机化测试</li><li>了解如何编写<code>bash</code>脚本文件，高效运行测试文件</li></ul><h4 id="要求-2" tabindex="-1">要求 <a class="header-anchor" href="#要求-2" aria-label="Permalink to &quot;要求&quot;">​</a></h4><ul><li>描述测试思路，用图片提交测试结果</li></ul><h2 id="需要提交的内容及要求" tabindex="-1">需要提交的内容及要求 <a class="header-anchor" href="#需要提交的内容及要求" aria-label="Permalink to &quot;需要提交的内容及要求&quot;">​</a></h2><p>README文件，包含做题过程与个人思路</p><p>做题中的C语言文件与运行截图</p><p>其他相关佐证个人学习能力与求解过程的证明材料</p><h2 id="本题提交方式" tabindex="-1"><strong>本题提交方式</strong> <a class="header-anchor" href="#本题提交方式" aria-label="Permalink to &quot;**本题提交方式**&quot;">​</a></h2><blockquote><p><a href="https://submit.glimmer.org.cn" target="_blank" rel="noreferrer"> 提交点这里 </a></p></blockquote><h2 id="出题人联系方式" tabindex="-1">出题人联系方式 <a class="header-anchor" href="#出题人联系方式" aria-label="Permalink to &quot;出题人联系方式&quot;">​</a></h2><blockquote><p>dwdyy QQ:3403504034</p></blockquote>`,49),t=[o];function i(r,y,d,h,u,m){return a(),e("div",null,t)}const _=n(c,[["render",i]]);export{g as __pageData,_ as default};
