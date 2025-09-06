import{_ as s}from"./chunks/CS.8a81f91e.js";import{_ as n,o as a,c as p,Q as l}from"./chunks/framework.e90f0c97.js";const o="/assets/peizhidan1.07e65935.png",e="/assets/memory1.63116b9e.jpg",t="/assets/memory2.a30b33f7.png",d=JSON.parse('{"title":"CS-MEDIUM-03 Read From Memory","description":"","frontmatter":{"prev":{"text":"CS-MEDIUM-02-浮点数","link":"./CS-MEDIUM-02-浮点数"},"next":{"text":"CS-MEDIUM-04 计算机网络常识与实验","link":"./CS-MEDIUM-04 计算机网络常识与实验"}},"headers":[],"relativePath":"md/计算机系统/CS-MEDIUM-03 Read From Memory.md","filePath":"md/计算机系统/CS-MEDIUM-03 Read From Memory.md"}'),c={name:"md/计算机系统/CS-MEDIUM-03 Read From Memory.md"},r=l('<p><img src="'+s+'" alt="标题"></p><h1 id="cs-medium-03-read-from-memory" tabindex="-1">CS-MEDIUM-03 Read From Memory <a class="header-anchor" href="#cs-medium-03-read-from-memory" aria-label="Permalink to &quot;CS-MEDIUM-03 Read From Memory&quot;">​</a></h1><blockquote><p>欢迎各位同学从这里逐步迈入计算机系统的大门。</p></blockquote><blockquote><p>这一道题目将会带着你“上天入地”，从几乎最底层的计算机组成原理，到抽象层的计算机操作系统，都会有介绍。不过不用担心，本题目是科普向，虽然知识面很广，但是难度不会大大，诸位可以放心食用。本题的问答部分主要起引导作用，掌握如何我们当面便知～（所以不要急着糊题目完成度，扎实一点哦～）</p></blockquote><p><strong>题目做出了多少并不是第一重要的，重要的是你有没有从中学到一些东西～</strong></p><h2 id="step-1-救救电脑小白" tabindex="-1">Step 1 救救电脑小白 <a class="header-anchor" href="#step-1-救救电脑小白" aria-label="Permalink to &quot;Step 1 救救电脑小白&quot;">​</a></h2><p>       刚刚高考完的小双来到了大名鼎鼎～远近闻名～的电脑城，想要为自己的大学生活购置一台电脑，想要能畅玩 3 A 游戏，轻松处理大学四年的专业需求。老板一听可来劲了，拍出了一张堪称豪华～的配置单：</p><p><img src="'+o+'" alt="豪华配置单"></p><p>电脑城老板人还怪好的诶，这么好的东西只卖你 3000，远远低于网上动辄上万的笔记本。他还说带着一部 2000￥ 128 G 内存的手机一起卖，便宜 500 块钱。</p><p>       小双转念一想：电脑都是 16 G 内存，这 128 G 内存的手机得多厉害，还这么便宜，于是痛快地准备付钱。但是他突然想起你作为他的好朋友，正好对着一块有了解，于是他决定先问问你，咨询一下你的意见。</p><p>       他于是问道：</p><ul><li><em><u>电脑 16 G 内存是不是有点少，我手机都有 128 G 内存诶……</u></em></li><li><em><u>756 G 硬盘是什么啊，这个东西怎么看起来有点太多了啊？</u></em></li></ul><p>       你看了看这一张配置单，陷入了沉默……作为已经学习了一个暑假的计算机方向的大学生，你觉得有必要为他好好科普一下：</p><p>       1、CPU、GPU、主板是什么，他们分别提供什么，有什么功能？</p><p>       2、什么是内存、主存、存储，在电脑手机上分别的命名习惯是怎么样的？</p><p>       3、<strong>电源要注意什么</strong>？（重要安全问题）</p><p>       4、CPU、GPU 的性能怎么看呢</p><p>       5、、这张配置单里还隐藏了什么很重要的没有说呢，请你好好想想哦</p><p>       小双听完了你的分析，又追问了电脑城老板，而后补充道，这个手机是 24 G 内存。你挠了挠头，这个配置貌似有点不太合理，仔细追问下，才知道是 8 + 16 G，你摸了摸下巴，思考起来：</p><p>       <em><u>该怎么向小双解释这个 16 G 是什么呢？这个东西貌似电脑里面也在使用，要不就顺便一起科普了吧～</u></em></p><p>       在你耐心的科普下，小双终于明白这是家坑人的店，他转头走出这家电脑城，决定去网上选购电脑。</p><p>       小双在你的指导下购买了一台符合需求的电脑（9950HX X3d），开心地玩起来了想玩的 3 A 大作。他玩的太投入了，家里断电都没能注意到。很快啊很快，随着突如其来的黑屏，小双再一次慌了神，给你打来了紧急的求助电话，向你询问该怎么办。在大致判断出问题之后，小双突然反应过来，他玩的时候貌似并没有存档！！！他悲号着问你，有没有什么办法能让电脑恢复到之前开机时候的状态，你遗憾地摇了摇头，为他耐心地解释起来：</p><p>       <u><em>所以为什么不能呢？</em></u>（此处有非常多关联的考量，可以先写一个初步的答案，在完成整一道题目之后补充更加完善的回答）</p><p>       在一年之后，小双在玩游戏的时候，突然电脑蓝屏了。所幸卡的很久，在他打过来电话之后，依然卡在蓝屏的位置。你连忙让他把错误代码报给你，错误代码显示：“停止0x0000007F（0x00000008、0x00000000、0x00000000、0x00000000）UNEXPECTED_KERNEL_MODE_TRAP“。在你仔细搜索解决方案之后，你接触到了一个名为“ESP 寄存器”的东西。小双看见你的电脑屏幕，突然询问：</p><p>       <u><em>这是个什么东西？有什么用？</em></u></p><p>       你思考了一下，不仅为他讲解了这一个寄存器，还为他讲解了<u><em>与存储有关的几个寄存器</em></u>。</p><p>       但是电脑这个问题貌似与它无关。你突然意识到一个问题：</p><p>       <strong>你清灰没有？</strong></p><p>       小双挠了挠头，不再言语，只是一味地看着你，眼神就是清澈的大学生的眼神。</p><p>       你叹了口气，来到了他家里，为他清理了一次灰尘，并且一步一步给他讲解如何拆机清灰。最后你着重嘱咐：<strong>实在没把握，就去售后花点钱。</strong></p><p>       清灰之后，问题解决。安抚机魂是对的(x)，灰尘堵住出风口导致积热 / 灰尘损伤元件 / …… 进一步导致电脑出现奇怪的异常(✔)</p><p>       故事由现实生活改编，其中的大部分可能对你使用电脑有一定帮助（</p><p>科普虽然结束了，但是你的学习之路可不能就此结束啊，请你完成以上对小双的科普之后，回答以下问题：</p><p>       1、寄存器、高速缓存、只读存储器是什么，存在于电脑的哪个部分？</p><p>       2、什么是 SRAM、NAND、HDD、DRAM？他们的特性分别是什么？为什么有这样的特性？分别在什么领域有应用？</p><p>       3、DRAM 的物理结构长什么样子？工作原理是什么？它是如何实现读取、保存、修改的？（此处请着重考虑DRAM的部分）请你配上详细的图文说明。</p><p>       4、为什么9950HX X3d 很多时候表现甚至不如 9800X3d ? ---&gt; 为什么我的高速缓存不能说越多就一定越好？这之中有什么限制吗？</p><p>       5、请你介绍一下 cache 最根本的原理，并且思考一下，如何把它在代码中应用起来：实现一个符合规则的矩阵乘法程序。矩阵乘法可参考线性代数的基本公式。顺便请了解一下 cache 的替换部分的内容。</p><h2 id="step-2-让我看看你的内存" tabindex="-1">Step 2: 让我看看你的内存 <a class="header-anchor" href="#step-2-让我看看你的内存" aria-label="Permalink to &quot;Step 2: 让我看看你的内存&quot;">​</a></h2><p>       时间过得飞快，小双的大学生活又过去了一年。在你的熏陶下，他对计算机的兴趣愈发浓厚，甚至在学校的C语言课程中取得了不错的成绩。一天，他兴致勃勃地尝试编写一个稍微复杂的程序，但程序总是在运行中途神秘地崩溃，屏幕上冷冰冰地显示着一行他从未见过的错误：“<strong>Segmentation fault</strong>”。</p><p>       “段错误？这是什么意思？”小双百思不得其解，再一次向你打来了求助电话。你意识到这是一个绝佳的机会，可以带他进入一个更深、更抽象，也更有趣的世界——操作系统的内存管理。</p><p>       你决定先从这个最核心的概念讲起：<strong>虚拟内存 (Virtual Memory)</strong>。</p><p>       你向小双解释道：“你程序中使用的每一个地址，比如你定义一个变量 <code>int a</code>，它的地址 <code>&amp;a</code>，都不是它在物理内存条上的真实地址。这叫做虚拟地址。而这个变量实际存储在内存条上的地址，叫做物理地址。”</p><p>       小双挠挠头，问道：<u><em>“为什么需要虚拟内存&amp;虚拟地址？这里面是如何进行组织的呢？”</em></u></p><p>       你笑了笑，仔细地回答了他的问题，并且画出了两幅图</p><img src="'+e+'" alt="memory" style="zoom:33%;"><p><img src="'+t+`" alt="memory2"></p><p>       <u><em>借助这个描述 32 位系统的图，你非常顺畅地为他描述了 64 位系统下的样子，详细地讲述了每一个段都存放了些什么东西，顺便用 &quot;cat /proc/[PID]/maps&quot; 随便抽选了一个幸运进程展示了一下。</em></u></p><p>       小双于是问道：“还有一个问题，那我虚拟内存空间和实际的空间是怎么对应上的呢？它总不能随便拿一块吧？万一和别人冲突打架了怎么办啊？“</p><p>       你微微一笑，正好之前你学习过这一块关于<u><em>“页表管理”</em></u>的知识，可以好好地为他讲一讲了。</p><p>       ……</p><p>       “所以，小双，”你总结道，“你遇到的‘Segmentation fault’，从OS层面来看，就是你的程序试图访问一个虚拟地址，但MMU在查询页表时，发现这个虚拟页要么根本没有被映射到任何物理帧，要么你对它的操作（比如写入一个只读页）违反了页表里规定的权限。这时，MMU就会产生一个<strong>缺页异常 (Page Fault)</strong>，报告给操作系统。操作系统检查后，发现这是一个非法的访问，于是就终止了你的程序，并告诉你——‘段错误’！”</p><p>       “我们还可以写一个程序，来尝试一下手动进行翻译”你如是说，打开了从网页上下载下来的一份半成品代码，完成了它，<strong>有着优秀的差错控制</strong>，并且附上了详细的注释，递给了小双。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdint.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdbool.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PAGE_DIR_BITS</span><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">10</span><span style="color:#6A737D;"> // 页目录索引位数</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PAGE_TABLE_BITS</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#6A737D;"> // 页表索引位数</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">OFFSET_BITS</span><span style="color:#E1E4E8;">     </span><span style="color:#79B8FF;">12</span><span style="color:#6A737D;"> // 页内偏移位数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PAGE_TABLE_SIZE</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> PAGE_TABLE_BITS)</span><span style="color:#6A737D;"> // 1024</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PAGE_DIR_SIZE</span><span style="color:#E1E4E8;">   (</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> PAGE_DIR_BITS)</span><span style="color:#6A737D;">   // 1024</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PAGE_SIZE</span><span style="color:#E1E4E8;">       (</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> OFFSET_BITS)</span><span style="color:#6A737D;">     // 4096 (4KB)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 页表项 (PTE - Page Table Entry)</span></span>
<span class="line"><span style="color:#6A737D;">// 包含物理帧号和权限位</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;">     present_bit;</span><span style="color:#6A737D;"> // 存在位：1表示该页在物理内存中，0表示不在</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;">     rw_bit;</span><span style="color:#6A737D;">      // 读写位：1表示可读可写，0表示只读</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">uint32_t</span><span style="color:#E1E4E8;"> frame_number;</span><span style="color:#6A737D;"> // 对应的物理帧号</span></span>
<span class="line"><span style="color:#E1E4E8;">} PTE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 页目录项 (PDE - Page Directory Entry)</span></span>
<span class="line"><span style="color:#6A737D;">// 包含指向页表的指针和存在位</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> present_bit;</span><span style="color:#6A737D;"> // 存在位：1表示该页目录项指向一个有效的页表，0表示无效</span></span>
<span class="line"><span style="color:#E1E4E8;">    PTE</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> page_table_base;</span><span style="color:#6A737D;"> // 指向一个页表（PTE数组）的指针</span></span>
<span class="line"><span style="color:#E1E4E8;">} PDE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模拟的页目录表（作为我们模拟的 &quot;CR3寄存器&quot; 指向的地址）</span></span>
<span class="line"><span style="color:#E1E4E8;">PDE </span><span style="color:#FFAB70;">page_directory</span><span style="color:#E1E4E8;">[PAGE_DIR_SIZE];</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@brief</span><span style="color:#6A737D;"> 模拟MMU进行地址翻译和权限检查</span></span>
<span class="line"><span style="color:#6A737D;"> * * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#FFAB70;">virtual_address</span><span style="color:#6A737D;"> 要翻译的32位虚拟地址</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#FFAB70;">is_write_access</span><span style="color:#6A737D;"> 访问类型，true表示写操作，false表示读操作</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">translate_address</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uint32_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">virtual_address</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">is_write_access</span><span style="color:#E1E4E8;">) {</span><span style="color:#6A737D;">//请你完成这个尚未完成的函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;----------------------------------------</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Translating Virtual Address: 0x</span><span style="color:#79B8FF;">%08X</span><span style="color:#9ECBFF;"> (</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;"> access)</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, virtual_address, is_write_access </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;WRITE&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;READ&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// --- 步骤1: 从虚拟地址中提取索引和偏移 ---</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot; -&gt; Page Dir Index: </span><span style="color:#79B8FF;">%u</span><span style="color:#9ECBFF;"> (0x</span><span style="color:#79B8FF;">%X</span><span style="color:#9ECBFF;">)</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, page_dir_index, page_dir_index);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot; -&gt; Page Table Index: </span><span style="color:#79B8FF;">%u</span><span style="color:#9ECBFF;"> (0x</span><span style="color:#79B8FF;">%X</span><span style="color:#9ECBFF;">)</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, page_table_index, page_table_index);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot; -&gt; Offset: </span><span style="color:#79B8FF;">%u</span><span style="color:#9ECBFF;"> (0x</span><span style="color:#79B8FF;">%X</span><span style="color:#9ECBFF;">)</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, offset, offset);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// --- 步骤2: 查询页目录表 ---</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// --- 步骤3: 查询页表 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// --- 步骤4: 检查访问权限 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;  [*] Checking access permissions...</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// --- 步骤5: 计算最终的物理地址 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;  [SUCCESS] Translation complete.</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;  Virtual Address 0x</span><span style="color:#79B8FF;">%08X</span><span style="color:#9ECBFF;">  =&gt;  Physical Address 0x</span><span style="color:#79B8FF;">%08X\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, virtual_address, physical_address);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@brief</span><span style="color:#6A737D;"> 初始化模拟环境，预设一些页表和页目录项</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initialize_simulation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Initializing MMU simulation environment...</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化整个页目录表</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> PAGE_DIR_SIZE; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">page_directory</span><span style="color:#E1E4E8;">[i].present_bit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">page_directory</span><span style="color:#E1E4E8;">[i].page_table_base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2. 创建并填充第一个页表 (用于虚拟地址 0x00000000 - 0x003FFFFF)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//    假设页目录索引为0</span></span>
<span class="line"><span style="color:#E1E4E8;">    PTE</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> page_table_1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (PTE</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(PTE) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> PAGE_TABLE_SIZE);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_directory</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].present_bit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_directory</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].page_table_base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> page_table_1;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> PAGE_TABLE_SIZE; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">page_table_1</span><span style="color:#E1E4E8;">[i].present_bit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // 默认所有PTE无效</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置几个有效的PTE</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// VA 0x00001xxx -&gt; PA 0x0001Axxx (可读可写)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_table_1</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].present_bit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_table_1</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].rw_bit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_table_1</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].frame_number </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">26</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // 物理帧号 0x1A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// VA 0x00002xxx -&gt; PA 0x0008Fxxx (只读)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_table_1</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">].present_bit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_table_1</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">].rw_bit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // 只读页面</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_table_1</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">].frame_number </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">143</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // 物理帧号 0x8F</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 3. 创建并填充第二个页表 (用于虚拟地址 0x00400000 - 0x007FFFFF)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//    假设页目录索引为1</span></span>
<span class="line"><span style="color:#E1E4E8;">    PTE</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> page_table_2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (PTE</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(PTE) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> PAGE_TABLE_SIZE);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_directory</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].present_bit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_directory</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].page_table_base </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> page_table_2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> PAGE_TABLE_SIZE; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">page_table_2</span><span style="color:#E1E4E8;">[i].present_bit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// VA 0x00400xxx -&gt; PA 0x00033xxx</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_table_2</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].present_bit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_table_2</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].rw_bit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page_table_2</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].frame_number </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">51</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // 物理帧号 0x33</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Initialization complete.</span><span style="color:#79B8FF;">\\n\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --- 4. 主函数，运行测试用例 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initialize_simulation</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// --- 测试用例 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 1. 成功读取: 访问一个有效的、可读写的地址</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 虚拟地址: 0x00001A2B</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// -&gt; 页目录索引: 0, 页表索引: 1, 偏移: 0xA2B</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// -&gt; 查找 PDE[0] -&gt; PTE[1] -&gt; 物理帧号 26 (0x1A)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// -&gt; 物理地址: (26 &lt;&lt; 12) | 0xA2B = 0x1A000 | 0xA2B = 0x1AA2B</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">translate_address</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">00001A2B</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2. 成功写入: 访问一个有效的、可读写的地址</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 与上面相同，但请求是写操作</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">translate_address</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">00001A2B</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 3. 保护错误: 尝试写入一个只读页面</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 虚拟地址: 0x00002048</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// -&gt; 页目录索引: 0, 页表索引: 2, 偏移: 0x048</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// -&gt; 查找 PDE[0] -&gt; PTE[2] -&gt; rw_bit = 0, 触发保护错误</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">translate_address</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">00002048</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 4. 缺页错误: 访问一个页表项(PTE)无效的地址</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 虚拟地址: 0x00003555</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// -&gt; 页目录索引: 0, 页表索引: 3, 偏移: 0x555</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// -&gt; 查找 PDE[0] -&gt; PTE[3] -&gt; present_bit = 0, 触发缺页错误</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">translate_address</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">00003555</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 5. 段错误: 访问一个页目录项(PDE)无效的地址</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 虚拟地址: 0x00804000 (页目录索引=2)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// -&gt; 页目录索引: 2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// -&gt; 查找 PDE[2] -&gt; present_bit = 0, 触发段错误</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">translate_address</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">00804000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// --- 释放动态分配的内存 ---</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在真实OS中，这部分内存管理会更复杂</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">page_directory</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].page_table_base);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">page_directory</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].page_table_base);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">sample output:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">Initializing MMU simulation environment...</span></span>
<span class="line"><span style="color:#6A737D;">Initialization complete.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">Translating Virtual Address: 0x00001A2B (READ access)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Dir Index: 0 (0x0)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Table Index: 1 (0x1)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Offset: 2603 (0xA2B)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Directory Entry 0...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PDE is present. Page table base address: 0x60000305c010</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Table Entry 1...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PTE is present. Frame number: 26 (0x1A)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking access permissions...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; Access granted.</span></span>
<span class="line"><span style="color:#6A737D;">  [SUCCESS] Translation complete.</span></span>
<span class="line"><span style="color:#6A737D;">  Virtual Address 0x00001A2B  =&gt;  Physical Address 0x0001AA2B</span></span>
<span class="line"><span style="color:#6A737D;">----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">Translating Virtual Address: 0x00001A2B (WRITE access)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Dir Index: 0 (0x0)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Table Index: 1 (0x1)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Offset: 2603 (0xA2B)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Directory Entry 0...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PDE is present. Page table base address: 0x60000305c010</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Table Entry 1...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PTE is present. Frame number: 26 (0x1A)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking access permissions...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; Access granted.</span></span>
<span class="line"><span style="color:#6A737D;">  [SUCCESS] Translation complete.</span></span>
<span class="line"><span style="color:#6A737D;">  Virtual Address 0x00001A2B  =&gt;  Physical Address 0x0001AA2B</span></span>
<span class="line"><span style="color:#6A737D;">----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">Translating Virtual Address: 0x00002048 (WRITE access)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Dir Index: 0 (0x0)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Table Index: 2 (0x2)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Offset: 72 (0x48)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Directory Entry 0...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PDE is present. Page table base address: 0x60000305c010</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Table Entry 2...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PTE is present. Frame number: 143 (0x8F)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking access permissions...</span></span>
<span class="line"><span style="color:#6A737D;">  [!] FAULT: Write attempt on a read-only page. (Protection Fault)</span></span>
<span class="line"><span style="color:#6A737D;">----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">Translating Virtual Address: 0x00003555 (READ access)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Dir Index: 0 (0x0)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Table Index: 3 (0x3)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Offset: 1365 (0x555)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Directory Entry 0...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PDE is present. Page table base address: 0x60000305c010</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Table Entry 3...</span></span>
<span class="line"><span style="color:#6A737D;">  [!] FAULT: Page Table Entry not present. (Page Fault)</span></span>
<span class="line"><span style="color:#6A737D;">----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">Translating Virtual Address: 0x00804000 (READ access)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Dir Index: 2 (0x2)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Table Index: 4 (0x4)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Offset: 0 (0x0)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Directory Entry 2...</span></span>
<span class="line"><span style="color:#6A737D;">  [!] FAULT: Page Directory Entry not present. (Segmentation Fault)</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdint.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdbool.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PAGE_DIR_BITS</span><span style="color:#24292E;">   </span><span style="color:#005CC5;">10</span><span style="color:#6A737D;"> // 页目录索引位数</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PAGE_TABLE_BITS</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#6A737D;"> // 页表索引位数</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OFFSET_BITS</span><span style="color:#24292E;">     </span><span style="color:#005CC5;">12</span><span style="color:#6A737D;"> // 页内偏移位数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PAGE_TABLE_SIZE</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> PAGE_TABLE_BITS)</span><span style="color:#6A737D;"> // 1024</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PAGE_DIR_SIZE</span><span style="color:#24292E;">   (</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> PAGE_DIR_BITS)</span><span style="color:#6A737D;">   // 1024</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PAGE_SIZE</span><span style="color:#24292E;">       (</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> OFFSET_BITS)</span><span style="color:#6A737D;">     // 4096 (4KB)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 页表项 (PTE - Page Table Entry)</span></span>
<span class="line"><span style="color:#6A737D;">// 包含物理帧号和权限位</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;">     present_bit;</span><span style="color:#6A737D;"> // 存在位：1表示该页在物理内存中，0表示不在</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;">     rw_bit;</span><span style="color:#6A737D;">      // 读写位：1表示可读可写，0表示只读</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">uint32_t</span><span style="color:#24292E;"> frame_number;</span><span style="color:#6A737D;"> // 对应的物理帧号</span></span>
<span class="line"><span style="color:#24292E;">} PTE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 页目录项 (PDE - Page Directory Entry)</span></span>
<span class="line"><span style="color:#6A737D;">// 包含指向页表的指针和存在位</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> present_bit;</span><span style="color:#6A737D;"> // 存在位：1表示该页目录项指向一个有效的页表，0表示无效</span></span>
<span class="line"><span style="color:#24292E;">    PTE</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> page_table_base;</span><span style="color:#6A737D;"> // 指向一个页表（PTE数组）的指针</span></span>
<span class="line"><span style="color:#24292E;">} PDE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模拟的页目录表（作为我们模拟的 &quot;CR3寄存器&quot; 指向的地址）</span></span>
<span class="line"><span style="color:#24292E;">PDE </span><span style="color:#E36209;">page_directory</span><span style="color:#24292E;">[PAGE_DIR_SIZE];</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@brief</span><span style="color:#6A737D;"> 模拟MMU进行地址翻译和权限检查</span></span>
<span class="line"><span style="color:#6A737D;"> * * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E36209;">virtual_address</span><span style="color:#6A737D;"> 要翻译的32位虚拟地址</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E36209;">is_write_access</span><span style="color:#6A737D;"> 访问类型，true表示写操作，false表示读操作</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">translate_address</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">uint32_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">virtual_address</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#E36209;">is_write_access</span><span style="color:#24292E;">) {</span><span style="color:#6A737D;">//请你完成这个尚未完成的函数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;----------------------------------------</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Translating Virtual Address: 0x</span><span style="color:#005CC5;">%08X</span><span style="color:#032F62;"> (</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;"> access)</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, virtual_address, is_write_access </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;WRITE&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;READ&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// --- 步骤1: 从虚拟地址中提取索引和偏移 ---</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot; -&gt; Page Dir Index: </span><span style="color:#005CC5;">%u</span><span style="color:#032F62;"> (0x</span><span style="color:#005CC5;">%X</span><span style="color:#032F62;">)</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, page_dir_index, page_dir_index);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot; -&gt; Page Table Index: </span><span style="color:#005CC5;">%u</span><span style="color:#032F62;"> (0x</span><span style="color:#005CC5;">%X</span><span style="color:#032F62;">)</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, page_table_index, page_table_index);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot; -&gt; Offset: </span><span style="color:#005CC5;">%u</span><span style="color:#032F62;"> (0x</span><span style="color:#005CC5;">%X</span><span style="color:#032F62;">)</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, offset, offset);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// --- 步骤2: 查询页目录表 ---</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// --- 步骤3: 查询页表 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// --- 步骤4: 检查访问权限 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;  [*] Checking access permissions...</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// --- 步骤5: 计算最终的物理地址 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;  [SUCCESS] Translation complete.</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;  Virtual Address 0x</span><span style="color:#005CC5;">%08X</span><span style="color:#032F62;">  =&gt;  Physical Address 0x</span><span style="color:#005CC5;">%08X\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, virtual_address, physical_address);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@brief</span><span style="color:#6A737D;"> 初始化模拟环境，预设一些页表和页目录项</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initialize_simulation</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Initializing MMU simulation environment...</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化整个页目录表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> PAGE_DIR_SIZE; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">page_directory</span><span style="color:#24292E;">[i].present_bit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">page_directory</span><span style="color:#24292E;">[i].page_table_base </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2. 创建并填充第一个页表 (用于虚拟地址 0x00000000 - 0x003FFFFF)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//    假设页目录索引为0</span></span>
<span class="line"><span style="color:#24292E;">    PTE</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> page_table_1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (PTE</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">)</span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(PTE) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> PAGE_TABLE_SIZE);</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_directory</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].present_bit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_directory</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].page_table_base </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> page_table_1;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> PAGE_TABLE_SIZE; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">page_table_1</span><span style="color:#24292E;">[i].present_bit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 默认所有PTE无效</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置几个有效的PTE</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// VA 0x00001xxx -&gt; PA 0x0001Axxx (可读可写)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_table_1</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].present_bit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_table_1</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].rw_bit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_table_1</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].frame_number </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">26</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 物理帧号 0x1A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// VA 0x00002xxx -&gt; PA 0x0008Fxxx (只读)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_table_1</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">].present_bit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_table_1</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">].rw_bit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 只读页面</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_table_1</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">].frame_number </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">143</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 物理帧号 0x8F</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 3. 创建并填充第二个页表 (用于虚拟地址 0x00400000 - 0x007FFFFF)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//    假设页目录索引为1</span></span>
<span class="line"><span style="color:#24292E;">    PTE</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> page_table_2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (PTE</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">)</span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(PTE) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> PAGE_TABLE_SIZE);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_directory</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].present_bit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_directory</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].page_table_base </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> page_table_2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> PAGE_TABLE_SIZE; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">page_table_2</span><span style="color:#24292E;">[i].present_bit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// VA 0x00400xxx -&gt; PA 0x00033xxx</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_table_2</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].present_bit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_table_2</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].rw_bit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page_table_2</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].frame_number </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">51</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 物理帧号 0x33</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Initialization complete.</span><span style="color:#005CC5;">\\n\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --- 4. 主函数，运行测试用例 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initialize_simulation</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// --- 测试用例 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 1. 成功读取: 访问一个有效的、可读写的地址</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 虚拟地址: 0x00001A2B</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// -&gt; 页目录索引: 0, 页表索引: 1, 偏移: 0xA2B</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// -&gt; 查找 PDE[0] -&gt; PTE[1] -&gt; 物理帧号 26 (0x1A)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// -&gt; 物理地址: (26 &lt;&lt; 12) | 0xA2B = 0x1A000 | 0xA2B = 0x1AA2B</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">translate_address</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">00001A2B</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2. 成功写入: 访问一个有效的、可读写的地址</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 与上面相同，但请求是写操作</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">translate_address</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">00001A2B</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 3. 保护错误: 尝试写入一个只读页面</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 虚拟地址: 0x00002048</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// -&gt; 页目录索引: 0, 页表索引: 2, 偏移: 0x048</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// -&gt; 查找 PDE[0] -&gt; PTE[2] -&gt; rw_bit = 0, 触发保护错误</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">translate_address</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">00002048</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 4. 缺页错误: 访问一个页表项(PTE)无效的地址</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 虚拟地址: 0x00003555</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// -&gt; 页目录索引: 0, 页表索引: 3, 偏移: 0x555</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// -&gt; 查找 PDE[0] -&gt; PTE[3] -&gt; present_bit = 0, 触发缺页错误</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">translate_address</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">00003555</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 5. 段错误: 访问一个页目录项(PDE)无效的地址</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 虚拟地址: 0x00804000 (页目录索引=2)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// -&gt; 页目录索引: 2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// -&gt; 查找 PDE[2] -&gt; present_bit = 0, 触发段错误</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">translate_address</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">00804000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// --- 释放动态分配的内存 ---</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在真实OS中，这部分内存管理会更复杂</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(</span><span style="color:#E36209;">page_directory</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].page_table_base);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(</span><span style="color:#E36209;">page_directory</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].page_table_base);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">sample output:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">Initializing MMU simulation environment...</span></span>
<span class="line"><span style="color:#6A737D;">Initialization complete.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">Translating Virtual Address: 0x00001A2B (READ access)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Dir Index: 0 (0x0)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Table Index: 1 (0x1)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Offset: 2603 (0xA2B)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Directory Entry 0...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PDE is present. Page table base address: 0x60000305c010</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Table Entry 1...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PTE is present. Frame number: 26 (0x1A)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking access permissions...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; Access granted.</span></span>
<span class="line"><span style="color:#6A737D;">  [SUCCESS] Translation complete.</span></span>
<span class="line"><span style="color:#6A737D;">  Virtual Address 0x00001A2B  =&gt;  Physical Address 0x0001AA2B</span></span>
<span class="line"><span style="color:#6A737D;">----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">Translating Virtual Address: 0x00001A2B (WRITE access)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Dir Index: 0 (0x0)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Table Index: 1 (0x1)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Offset: 2603 (0xA2B)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Directory Entry 0...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PDE is present. Page table base address: 0x60000305c010</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Table Entry 1...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PTE is present. Frame number: 26 (0x1A)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking access permissions...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; Access granted.</span></span>
<span class="line"><span style="color:#6A737D;">  [SUCCESS] Translation complete.</span></span>
<span class="line"><span style="color:#6A737D;">  Virtual Address 0x00001A2B  =&gt;  Physical Address 0x0001AA2B</span></span>
<span class="line"><span style="color:#6A737D;">----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">Translating Virtual Address: 0x00002048 (WRITE access)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Dir Index: 0 (0x0)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Table Index: 2 (0x2)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Offset: 72 (0x48)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Directory Entry 0...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PDE is present. Page table base address: 0x60000305c010</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Table Entry 2...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PTE is present. Frame number: 143 (0x8F)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking access permissions...</span></span>
<span class="line"><span style="color:#6A737D;">  [!] FAULT: Write attempt on a read-only page. (Protection Fault)</span></span>
<span class="line"><span style="color:#6A737D;">----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">Translating Virtual Address: 0x00003555 (READ access)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Dir Index: 0 (0x0)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Table Index: 3 (0x3)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Offset: 1365 (0x555)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Directory Entry 0...</span></span>
<span class="line"><span style="color:#6A737D;">      -&gt; PDE is present. Page table base address: 0x60000305c010</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Table Entry 3...</span></span>
<span class="line"><span style="color:#6A737D;">  [!] FAULT: Page Table Entry not present. (Page Fault)</span></span>
<span class="line"><span style="color:#6A737D;">----------------------------------------</span></span>
<span class="line"><span style="color:#6A737D;">Translating Virtual Address: 0x00804000 (READ access)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Dir Index: 2 (0x2)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Page Table Index: 4 (0x4)</span></span>
<span class="line"><span style="color:#6A737D;"> -&gt; Offset: 0 (0x0)</span></span>
<span class="line"><span style="color:#6A737D;">  [*] Checking Page Directory Entry 2...</span></span>
<span class="line"><span style="color:#6A737D;">  [!] FAULT: Page Directory Entry not present. (Segmentation Fault)</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><blockquote><p>请注意，这段代码是在用户态下对地址翻译过程的一个软件模拟。在真实的系统中，地址翻译是由CPU内部的MMU硬件自动完成的，而页表本身则存放在受内核保护的物理内存中，用户程序无法直接访问或修改它们</p></blockquote><p>       小双挠了挠头，或许笨笨的他还需要一点时间消化一下。完成了为小双的科普，现在你或许还有一些知识可以再深入学习一下（别忘了写回答里面）：</p><p>       1、与内存组织相关的寄存器有什么？他们分别有什么作用？</p><p>       2、请你仔细地描述你所学到的关于页表管理这一块知识。请注意描述的抽象层次，借助你画的图片，展现他们的逻辑关系，细细地描述描述呢。</p><p>        提示：你应该至少涉及到 MMU、页表、TLB、多级页表等内容的原理。从概念本身出发，介绍它的作用，介绍它与其他部分的联系。最后实际描述一次从虚拟内存到物理内存的过程。</p><p>       3、一次从内存中完整读取数据的过程是怎么样的？一次从存储中完整读取数据的过程是什么样的？请借助图描述一下。</p><p>       4、缺页异常是什么？有什么种类，分别的典型例子有什么？分别是怎么处理的？</p><p>       5、什么是页面替换？是怎么样进行的？先换掉什么？</p><p>       6、在缺页异常中，或许你会学到一个很符合直觉的词语：中断。但是这具体是什么呢？相信你会从这里迈向更广阔的 OS 世界～</p><p>       </p><h2 id="step-3-让我玩玩你的内存" tabindex="-1">Step 3 让我玩玩你的内存 <a class="header-anchor" href="#step-3-让我玩玩你的内存" aria-label="Permalink to &quot;Step 3 让我玩玩你的内存&quot;">​</a></h2><p>       小双继续学习着计算机的知识，他安装上了 linux 系统，了解到了命令行的相关操作。他对这个黑乎乎的东西来了兴趣，想知道这个是什么。一番搜索之后，才明白这其实是一个叫做 shell 的东西。它本身就是一个程序，用来调出其他的程序。小双接着搜索，了解到这个名叫 shell 的东西是通过 exec 实现的。他飞速摇来了你，想了解了解 exec 的相关特性。你写了一个简单的程序，运行了一下，对着结果非常轻松地<u><em>解释了 exec 最为重要的特性</em></u>。（代码后附）</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;unistd.h&gt;</span><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// 提供了对POSIX操作系统API的访问，如 getpid(), execlp()</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdlib.h&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// getpid() 是一个系统调用，会返回当前进程的ID (Process ID)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;--&gt; Hello from exec_demo! My PID is </span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">.</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">getpid</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;--&gt; I am about to call execlp() to transform into &#39;ls -l&#39;...</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fflush</span><span style="color:#E1E4E8;">(stdout);</span><span style="color:#6A737D;"> // 刷新标准输出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">execlp</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;ls&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;ls&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;-l&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// execlp() 会在系统的PATH环境变量所指定的目录中，查找名为&quot;ls&quot;的可执行文件。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 参数列表:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 第一个 &quot;ls&quot;: 要执行的程序名。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 第二个 &quot;ls&quot;: 作为新程序argv[0]的值（通常是程序名本身）。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 第三个 &quot;-l&quot;: 作为新程序argv[1]的值（一个参数）。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// NULL: 参数列表必须以NULL结尾。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;This message will be printed here.</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;unistd.h&gt;</span><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 提供了对POSIX操作系统API的访问，如 getpid(), execlp()</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdlib.h&gt;</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// getpid() 是一个系统调用，会返回当前进程的ID (Process ID)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;--&gt; Hello from exec_demo! My PID is </span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">.</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">getpid</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;--&gt; I am about to call execlp() to transform into &#39;ls -l&#39;...</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fflush</span><span style="color:#24292E;">(stdout);</span><span style="color:#6A737D;"> // 刷新标准输出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">execlp</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;ls&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;ls&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;-l&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// execlp() 会在系统的PATH环境变量所指定的目录中，查找名为&quot;ls&quot;的可执行文件。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 参数列表:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 第一个 &quot;ls&quot;: 要执行的程序名。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 第二个 &quot;ls&quot;: 作为新程序argv[0]的值（通常是程序名本身）。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 第三个 &quot;-l&quot;: 作为新程序argv[1]的值（一个参数）。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// NULL: 参数列表必须以NULL结尾。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;This message will be printed here.</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>       ”在 exec 这样的特性之下，那 shell 作为一个能一直和你闲聊的黑框框是怎么实现的呢？“小双问道。</p><p>       你搓了搓手，为他介绍起了几乎所有 Unix 系统的基石： <u><em>fork - exec 模型。</em></u></p><p>       在了解了这个模型基础之后，小双迫不及待地想要和你一起<u><em>尝试写一个 minishell</em></u>，不过他代码能力比较糟糕，只有最基础的思路，请你帮帮他～</p><p>       小双 ：我们只需要创建一个无限的循环，不断等待着用户的输入。得到输入之后，使用 <a href="https://man7.org/linux/man-pages/man2/fork.2.html" target="_blank" rel="noreferrer">fork</a> 创建一个子进程，使用 exec 去执行对应的命令就可以了。在这里为了简化，我们假定命令不会携带参数，就是单独的一个字符串，例如 ls, pwd 之类的就可以了～</p><p>       <strong>温馨提示：请关注 fork 的例子，这对于你完成这份代码有极大的帮助</strong></p><p>       实现了这个 minishell 之后，小双十分高兴。你这个时候回想一路上带领小双学习的路径，想起了一个与内存相关的机制隐藏在 fork 中，这时候你提出了一个引导性的问题：</p><p>       “小双，你有没有想过，如果这个程序很大，那 fork 的时候的开销会非常恐怖啊，那如果遇到某些需要 fork 多个进程出来的， 是不是就不太能接受了呢？比如对于一个内存占了 1 G 的程序， fork 的时候是不是要频繁地复制，会狠狠地拖慢运行速度？但是你看我们这个 minishell 里面，都是直接 fork 之后选择 exec 一个新的程序，实际上对于原本的内存我们并不需要。 你想想，这个问题该怎么解决呢？”</p><p>       小双再度陷入了宕机的状态……</p><p>       你于是为他介绍了一下 <u><em>cow (copy on write) 机制</em></u>，并且在上面的 minishell 中简单地加了一点东西，用<u><em>程序的运行结果来证明</em></u>这一回事。</p><p>       意见参考（或许有些信息你可以在 /proc/self-pid/statm 读取到）：</p><ul><li><p>父子进程中的变量虚拟地址是否相同？</p></li><li><p><code>fork</code> 后，子进程能否读取到父进程的内存？</p></li><li><p>当子进程写入共享内存后，它的内存占用（RSS/VSS）是否会发生变化？</p></li><li><p>（还有什么很重要的东西呢？）</p></li></ul><p>       在了解了具体的细节之后，你也可以<u><em>写一个 fork</em></u> 啦～</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdbool.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --- 预设的数据结构和模拟环境 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NUM_PAGES</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">16</span><span style="color:#6A737D;">    // 为了简化输出，我们假设一个进程最多16个虚拟页</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NUM_FRAMES</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">64</span><span style="color:#6A737D;">   // 系统总共有64个物理帧</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模拟物理内存帧</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> in_use;</span><span style="color:#6A737D;">        // 此物理帧是否已被分配</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> share_count;</span><span style="color:#6A737D;">    // 有多少个PTE指向此帧（用于COW）</span></span>
<span class="line"><span style="color:#E1E4E8;">} PhysicalFrame;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模拟页表项 (PTE)</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> present;</span><span style="color:#6A737D;">       // 存在位</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> writable;</span><span style="color:#6A737D;">      // 可写位</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> frame_index;</span><span style="color:#6A737D;">    // 指向的物理帧的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">} PTE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模拟进程控制块 (PCB)</span></span>
<span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> pid;</span></span>
<span class="line"><span style="color:#E1E4E8;">    PTE </span><span style="color:#FFAB70;">page_table</span><span style="color:#E1E4E8;">[NUM_PAGES];</span><span style="color:#6A737D;"> // 每个进程有一个页表</span></span>
<span class="line"><span style="color:#E1E4E8;">} Process;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局模拟环境</span></span>
<span class="line"><span style="color:#E1E4E8;">PhysicalFrame </span><span style="color:#FFAB70;">G_physical_memory</span><span style="color:#E1E4E8;">[NUM_FRAMES];</span><span style="color:#6A737D;"> // G_ 前缀表示全局变量</span></span>
<span class="line"><span style="color:#E1E4E8;">Process</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G_process_list</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">];</span><span style="color:#6A737D;">                 // 最多10个进程</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> G_next_pid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">                        // 下一个要分配的PID</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> G_process_count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --- 框架提供的辅助函数 (无需修改) ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化模拟环境</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">init_simulation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> NUM_FRAMES; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">G_physical_memory</span><span style="color:#E1E4E8;">[i].in_use </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">G_physical_memory</span><span style="color:#E1E4E8;">[i].share_count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Simulation environment initialized.</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建初始的父进程以供测试</span></span>
<span class="line"><span style="color:#E1E4E8;">Process</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create_initial_process</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Process</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (Process</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">malloc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(Process));</span></span>
<span class="line"><span style="color:#E1E4E8;">    parent-&gt;pid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> G_next_pid</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">G_process_list</span><span style="color:#E1E4E8;">[G_process_count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parent;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化页表</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> NUM_PAGES; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) parent-&gt;page_table[i].present </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 分配几个页面</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 页面0: 代码页 (只读)</span></span>
<span class="line"><span style="color:#E1E4E8;">    parent-&gt;page_table[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (PTE){.present</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, .writable</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, .frame_index</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">G_physical_memory</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (PhysicalFrame){.in_use</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, .share_count</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 页面1: 数据页 (可写)</span></span>
<span class="line"><span style="color:#E1E4E8;">    parent-&gt;page_table[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (PTE){.present</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, .writable</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, .frame_index</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">G_physical_memory</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (PhysicalFrame){.in_use</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, .share_count</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 页面2: 堆页面 (可写)</span></span>
<span class="line"><span style="color:#E1E4E8;">    parent-&gt;page_table[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (PTE){.present</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, .writable</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, .frame_index</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">G_physical_memory</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (PhysicalFrame){.in_use</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, .share_count</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Initial parent process (PID </span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">) created.</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, parent-&gt;pid);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> parent;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打印一个进程的页表状态，用于验证</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">print_process_pagetable</span><span style="color:#E1E4E8;">(Process</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">proc</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">proc) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">--- Page Table for PID: </span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;"> ---</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, proc-&gt;pid);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;V.Page | Present | Writable | P.Frame | Frame Share Count</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;----------------------------------------------------------</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> NUM_PAGES; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (proc-&gt;page_table[i].present) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> frame_idx </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> proc-&gt;page_table[i].frame_index;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;  </span><span style="color:#79B8FF;">%-4d</span><span style="color:#9ECBFF;"> |    </span><span style="color:#79B8FF;">%-3s</span><span style="color:#9ECBFF;">  |   </span><span style="color:#79B8FF;">%-5s</span><span style="color:#9ECBFF;">  |   </span><span style="color:#79B8FF;">%-5d</span><span style="color:#9ECBFF;"> | </span><span style="color:#79B8FF;">%-d\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                   i,</span></span>
<span class="line"><span style="color:#E1E4E8;">                   proc-&gt;page_table[i].present </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Yes&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;No&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                   proc-&gt;page_table[i].writable </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Yes&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;No&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                   frame_idx,</span></span>
<span class="line"><span style="color:#E1E4E8;">                   </span><span style="color:#FFAB70;">G_physical_memory</span><span style="color:#E1E4E8;">[frame_idx].share_count);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;----------------------------------------------------------</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@brief</span><span style="color:#6A737D;"> 模拟fork()系统调用，创建一个子进程，并实现写时复制(COW)。</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#FFAB70;">parent</span><span style="color:#6A737D;"> 指向父进程的指针。</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> 指向新创建的子进程的指针。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">Process</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">my_fork</span><span style="color:#E1E4E8;">(Process</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">parent</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&gt;&gt;&gt; Calling my_fork() on parent PID </span><span style="color:#79B8FF;">%d</span><span style="color:#9ECBFF;">...</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, parent-&gt;pid);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// TODO: 步骤 1: 创建一个新的子进程结构体(Process)，并为其分配一个新的PID。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// TODO: 步骤 2: 遍历父进程的页表 (从 i=0 到 NUM_PAGES-1)。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// TODO: 步骤 3: 对于父进程中每一个有效的页表项 (即 present_bit 为 true 的PTE):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     a. 将父进程的PTE完整地复制给子进程的对应PTE。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     b. 检查这个页面是否是可写的 (writable)。如果是，则需要触发COW机制。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     c. COW处理:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//        i.  将父进程中该页面的PTE权限设置为只读 (writable = false)。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//        ii. 将子进程中该页面的PTE权限也设置为只读 (writable = false)。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     d. 无论是只读页还是被设置为只读的可写页，现在它们都被共享了。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//        因此，需要增加其对应的物理帧的共享计数 (share_count)。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//        提示: 物理帧的索引是 pte.frame_index。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// TODO: 步骤 4: 将新创建的子进程添加到全局进程列表 G_process_list 中，并更新 G_process_count。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// TODO: 步骤 5: 返回指向子进程的指针。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // 请在完成实现后，删除或替换这一行</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --- 用于测试你的实现的 main 函数 (无需修改) ---</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">init_simulation</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Process</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">create_initial_process</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">--- State BEFORE fork ---</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">print_process_pagetable</span><span style="color:#E1E4E8;">(parent);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Process</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> child </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">my_fork</span><span style="color:#E1E4E8;">(parent);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">--- State AFTER fork ---</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Parent process state after fork:</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">print_process_pagetable</span><span style="color:#E1E4E8;">(parent);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Child process state after fork:</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">print_process_pagetable</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 释放内存 (在真实OS中，这是由进程退出时完成的)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(parent);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">free</span><span style="color:#E1E4E8;">(child);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdbool.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --- 预设的数据结构和模拟环境 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NUM_PAGES</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16</span><span style="color:#6A737D;">    // 为了简化输出，我们假设一个进程最多16个虚拟页</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NUM_FRAMES</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">64</span><span style="color:#6A737D;">   // 系统总共有64个物理帧</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模拟物理内存帧</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> in_use;</span><span style="color:#6A737D;">        // 此物理帧是否已被分配</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> share_count;</span><span style="color:#6A737D;">    // 有多少个PTE指向此帧（用于COW）</span></span>
<span class="line"><span style="color:#24292E;">} PhysicalFrame;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模拟页表项 (PTE)</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> present;</span><span style="color:#6A737D;">       // 存在位</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> writable;</span><span style="color:#6A737D;">      // 可写位</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> frame_index;</span><span style="color:#6A737D;">    // 指向的物理帧的索引</span></span>
<span class="line"><span style="color:#24292E;">} PTE;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 模拟进程控制块 (PCB)</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> pid;</span></span>
<span class="line"><span style="color:#24292E;">    PTE </span><span style="color:#E36209;">page_table</span><span style="color:#24292E;">[NUM_PAGES];</span><span style="color:#6A737D;"> // 每个进程有一个页表</span></span>
<span class="line"><span style="color:#24292E;">} Process;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局模拟环境</span></span>
<span class="line"><span style="color:#24292E;">PhysicalFrame </span><span style="color:#E36209;">G_physical_memory</span><span style="color:#24292E;">[NUM_FRAMES];</span><span style="color:#6A737D;"> // G_ 前缀表示全局变量</span></span>
<span class="line"><span style="color:#24292E;">Process</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G_process_list</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">];</span><span style="color:#6A737D;">                 // 最多10个进程</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> G_next_pid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">                        // 下一个要分配的PID</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> G_process_count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --- 框架提供的辅助函数 (无需修改) ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化模拟环境</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">init_simulation</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> NUM_FRAMES; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">G_physical_memory</span><span style="color:#24292E;">[i].in_use </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">G_physical_memory</span><span style="color:#24292E;">[i].share_count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Simulation environment initialized.</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建初始的父进程以供测试</span></span>
<span class="line"><span style="color:#24292E;">Process</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">create_initial_process</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    Process</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (Process</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">)</span><span style="color:#6F42C1;">malloc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(Process));</span></span>
<span class="line"><span style="color:#24292E;">    parent-&gt;pid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> G_next_pid</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">G_process_list</span><span style="color:#24292E;">[G_process_count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parent;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化页表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> NUM_PAGES; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) parent-&gt;page_table[i].present </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 分配几个页面</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 页面0: 代码页 (只读)</span></span>
<span class="line"><span style="color:#24292E;">    parent-&gt;page_table[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (PTE){.present</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, .writable</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, .frame_index</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">G_physical_memory</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (PhysicalFrame){.in_use</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, .share_count</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 页面1: 数据页 (可写)</span></span>
<span class="line"><span style="color:#24292E;">    parent-&gt;page_table[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (PTE){.present</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, .writable</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, .frame_index</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">G_physical_memory</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (PhysicalFrame){.in_use</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, .share_count</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 页面2: 堆页面 (可写)</span></span>
<span class="line"><span style="color:#24292E;">    parent-&gt;page_table[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (PTE){.present</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, .writable</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, .frame_index</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">G_physical_memory</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (PhysicalFrame){.in_use</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, .share_count</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Initial parent process (PID </span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">) created.</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, parent-&gt;pid);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> parent;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打印一个进程的页表状态，用于验证</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">print_process_pagetable</span><span style="color:#24292E;">(Process</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">proc</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">proc) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">--- Page Table for PID: </span><span style="color:#005CC5;">%d</span><span style="color:#032F62;"> ---</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, proc-&gt;pid);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;V.Page | Present | Writable | P.Frame | Frame Share Count</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;----------------------------------------------------------</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> NUM_PAGES; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (proc-&gt;page_table[i].present) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> frame_idx </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> proc-&gt;page_table[i].frame_index;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;  </span><span style="color:#005CC5;">%-4d</span><span style="color:#032F62;"> |    </span><span style="color:#005CC5;">%-3s</span><span style="color:#032F62;">  |   </span><span style="color:#005CC5;">%-5s</span><span style="color:#032F62;">  |   </span><span style="color:#005CC5;">%-5d</span><span style="color:#032F62;"> | </span><span style="color:#005CC5;">%-d\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                   i,</span></span>
<span class="line"><span style="color:#24292E;">                   proc-&gt;page_table[i].present </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Yes&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;No&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                   proc-&gt;page_table[i].writable </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Yes&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;No&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                   frame_idx,</span></span>
<span class="line"><span style="color:#24292E;">                   </span><span style="color:#E36209;">G_physical_memory</span><span style="color:#24292E;">[frame_idx].share_count);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;----------------------------------------------------------</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@brief</span><span style="color:#6A737D;"> 模拟fork()系统调用，创建一个子进程，并实现写时复制(COW)。</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E36209;">parent</span><span style="color:#6A737D;"> 指向父进程的指针。</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> 指向新创建的子进程的指针。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">Process</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">my_fork</span><span style="color:#24292E;">(Process</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">parent</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&gt;&gt;&gt; Calling my_fork() on parent PID </span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">...</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, parent-&gt;pid);</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// TODO: 步骤 1: 创建一个新的子进程结构体(Process)，并为其分配一个新的PID。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// TODO: 步骤 2: 遍历父进程的页表 (从 i=0 到 NUM_PAGES-1)。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// TODO: 步骤 3: 对于父进程中每一个有效的页表项 (即 present_bit 为 true 的PTE):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     a. 将父进程的PTE完整地复制给子进程的对应PTE。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     b. 检查这个页面是否是可写的 (writable)。如果是，则需要触发COW机制。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     c. COW处理:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//        i.  将父进程中该页面的PTE权限设置为只读 (writable = false)。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//        ii. 将子进程中该页面的PTE权限也设置为只读 (writable = false)。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     d. 无论是只读页还是被设置为只读的可写页，现在它们都被共享了。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//        因此，需要增加其对应的物理帧的共享计数 (share_count)。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//        提示: 物理帧的索引是 pte.frame_index。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// TODO: 步骤 4: 将新创建的子进程添加到全局进程列表 G_process_list 中，并更新 G_process_count。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// TODO: 步骤 5: 返回指向子进程的指针。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // 请在完成实现后，删除或替换这一行</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --- 用于测试你的实现的 main 函数 (无需修改) ---</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">init_simulation</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Process</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> parent </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">create_initial_process</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">--- State BEFORE fork ---</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">print_process_pagetable</span><span style="color:#24292E;">(parent);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Process</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> child </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">my_fork</span><span style="color:#24292E;">(parent);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">--- State AFTER fork ---</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Parent process state after fork:</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">print_process_pagetable</span><span style="color:#24292E;">(parent);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Child process state after fork:</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">print_process_pagetable</span><span style="color:#24292E;">(child);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 释放内存 (在真实OS中，这是由进程退出时完成的)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(parent);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">free</span><span style="color:#24292E;">(child);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>       恭喜你完成了这一道题目 ～需要提示的是，你需要做的不是完成题目，而是学习 。在这个大框架之下还有许许多多细节的知识等待着你去发掘，希望我们能当面好好交流交流你学到了什么～</p><p>       不过在此之前，需要你把本题中提出的问题、涉及的代码，都用：<strong>问题 - 答案</strong> 的方式成对地写在 markdown 中进行提交哦，当然可以附上你的学习感谢，有额外加分～</p><p>       <strong>特别提醒 ：你为小双解释的也需要写进 md 中哦～</strong></p><h2 id="本题提交方式" tabindex="-1"><strong>本题提交方式</strong> <a class="header-anchor" href="#本题提交方式" aria-label="Permalink to &quot;**本题提交方式**&quot;">​</a></h2><blockquote><p><a href="https://submit.glimmer.org.cn" target="_blank" rel="noreferrer"> 提交点这里 </a></p></blockquote><h2 id="出题人联系方式" tabindex="-1">出题人联系方式 <a class="header-anchor" href="#出题人联系方式" aria-label="Permalink to &quot;出题人联系方式&quot;">​</a></h2><blockquote><p>Acacia QQ：384934309</p></blockquote>`,87),y=[r];function E(i,F,A,D,C,_){return a(),p("div",null,y)}const B=n(c,[["render",E]]);export{d as __pageData,B as default};
