import{_ as s}from"./chunks/后端.a161c499.js";import{_ as a,o as n,c as l,Q as p}from"./chunks/framework.e90f0c97.js";const e="/assets/Java04-1.498e54a7.webp",k=JSON.parse('{"title":"Java04-控制流","description":"","frontmatter":{"prev":{"text":"Java03-数据类型与数据结构","link":"./Java03-数据类型与数据结构.html"},"next":{"text":"Java05-面向对象","link":"./Java05-面向对象.html"}},"headers":[],"relativePath":"md/后端/Java04-控制流.md","filePath":"md/后端/Java04-控制流.md"}'),o={name:"md/后端/Java04-控制流.md"},t=p('<p><img src="'+s+'" alt=""></p><h1 id="java04-控制流" tabindex="-1">Java04-控制流 <a class="header-anchor" href="#java04-控制流" aria-label="Permalink to &quot;Java04-控制流&quot;">​</a></h1><blockquote><p>你一定见过以下流程图：</p><p>流程图是对现实问题解决方案的抽象，一个操作有了流程图，就能被写成程序，为了能控制程序如何运行，我们需要学习流程控制。</p></blockquote><p><img src="'+e+`" alt="img"></p><h2 id="task1-if-else" tabindex="-1"><strong>Task1.if-else</strong> <a class="header-anchor" href="#task1-if-else" aria-label="Permalink to &quot;**Task1.if-else**&quot;">​</a></h2><p>请了解<code>if-else</code>相关知识。补全下面的函数：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//这个函数用于判断传入的年份是否为闰年</span></span>
<span class="line"><span style="color:#6A737D;">//是闰年返回1，不是闰年返回2</span></span>
<span class="line"><span style="color:#F97583;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isLeapYear</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> year){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//这个函数用于判断传入的年份是否为闰年</span></span>
<span class="line"><span style="color:#6A737D;">//是闰年返回1，不是闰年返回2</span></span>
<span class="line"><span style="color:#D73A49;">boolean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isLeapYear</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> year){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>你知道<code>switch-case</code>吗，有人说<code>switch-case</code>是<code>if-selse</code>的语法糖(<code>syntax suger</code>)这是正确的吗?你知道他们的底层实现原理吗？</p><h2 id="task2-for-while" tabindex="-1"><strong>Task2.for-while</strong> <a class="header-anchor" href="#task2-for-while" aria-label="Permalink to &quot;**Task2.for-while**&quot;">​</a></h2><p>请了解<code>for-while</code>相关知识。补全下面函数：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//这个函数打印一个高度为n的空心菱形，保证n为奇数</span></span>
<span class="line"><span style="color:#6A737D;">//如n=5,则打印如下图形：</span></span>
<span class="line"><span style="color:#6A737D;">//  *</span></span>
<span class="line"><span style="color:#6A737D;">// * *</span></span>
<span class="line"><span style="color:#6A737D;">//*   *</span></span>
<span class="line"><span style="color:#6A737D;">// * *</span></span>
<span class="line"><span style="color:#6A737D;">//  *</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//这个函数打印一个高度为n的空心菱形，保证n为奇数</span></span>
<span class="line"><span style="color:#6A737D;">//如n=5,则打印如下图形：</span></span>
<span class="line"><span style="color:#6A737D;">//  *</span></span>
<span class="line"><span style="color:#6A737D;">// * *</span></span>
<span class="line"><span style="color:#6A737D;">//*   *</span></span>
<span class="line"><span style="color:#6A737D;">// * *</span></span>
<span class="line"><span style="color:#6A737D;">//  *</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="task3-递归和迭代" tabindex="-1"><strong>Task3.递归和迭代</strong> <a class="header-anchor" href="#task3-递归和迭代" aria-label="Permalink to &quot;**Task3.递归和迭代**&quot;">​</a></h2><p>请了解递归和迭代相关知识，为斐波那契数列实现两个版本</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Fibonacci</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Fibonacci</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n){</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>迭代和递归不同处在于哪里，为什么一般偏好迭代？循环是否能完全用递归来取代？</p><h2 id="task4-汉诺塔" tabindex="-1"><strong>Task4.汉诺塔</strong> <a class="header-anchor" href="#task4-汉诺塔" aria-label="Permalink to &quot;**Task4.汉诺塔**&quot;">​</a></h2><p>通过<code>if-else</code>，<code>for-while</code>等等能够对程序进行简单的流程控制，下面的问题是一个名为汉诺塔的游戏。现在有A,B,C三个柱子，在A柱上有n块铁饼，现在要把A柱上的n块铁饼都移动到C柱上，<strong>请补全函数</strong>，使得函数打印出移动的过程。<strong>要求给出你代码的具体思路，可以写在文档或者代码注释中</strong>（这题对初学的同学可能会有一定挑战性，可以先跳过等后回来做）</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//当n=3时，函数应该打印如下内容：</span></span>
<span class="line"><span style="color:#6A737D;">//A-&gt;C   (A-&gt;C的意思是把A柱最上方的铁饼移动到C柱上，以下同理)</span></span>
<span class="line"><span style="color:#6A737D;">//A-&gt;B</span></span>
<span class="line"><span style="color:#6A737D;">//C-&gt;B</span></span>
<span class="line"><span style="color:#6A737D;">//A-&gt;C</span></span>
<span class="line"><span style="color:#6A737D;">//B-&gt;A</span></span>
<span class="line"><span style="color:#6A737D;">//B-&gt;C</span></span>
<span class="line"><span style="color:#6A737D;">//A-&gt;C</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hanoi</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n){</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//当n=3时，函数应该打印如下内容：</span></span>
<span class="line"><span style="color:#6A737D;">//A-&gt;C   (A-&gt;C的意思是把A柱最上方的铁饼移动到C柱上，以下同理)</span></span>
<span class="line"><span style="color:#6A737D;">//A-&gt;B</span></span>
<span class="line"><span style="color:#6A737D;">//C-&gt;B</span></span>
<span class="line"><span style="color:#6A737D;">//A-&gt;C</span></span>
<span class="line"><span style="color:#6A737D;">//B-&gt;A</span></span>
<span class="line"><span style="color:#6A737D;">//B-&gt;C</span></span>
<span class="line"><span style="color:#6A737D;">//A-&gt;C</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hanoi</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n){</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="本题提交方式" tabindex="-1"><strong>本题提交方式</strong> <a class="header-anchor" href="#本题提交方式" aria-label="Permalink to &quot;**本题提交方式**&quot;">​</a></h2><blockquote><p><a href="https://submit.glimmer.org.cn" target="_blank" rel="noreferrer"> 提交点这里 </a></p></blockquote><h2 id="出题人联系方式" tabindex="-1">出题人联系方式 <a class="header-anchor" href="#出题人联系方式" aria-label="Permalink to &quot;出题人联系方式&quot;">​</a></h2><blockquote><p><strong>出题人QQ：3425282590</strong></p></blockquote>`,22),c=[t];function r(i,d,y,h,E,g){return n(),l("div",null,c)}const u=a(o,[["render",r]]);export{k as __pageData,u as default};
