(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{508:function(e,t,v){e.exports=v.p+"assets/img/599d0f25gy1flvje7vnrsj20jr07yjrn.918c5304.jpg"},509:function(e,t,v){e.exports=v.p+"assets/img/599d0f25gy1flvhfdu3vdj214a0qxjvu.8195f60a.jpg"},510:function(e,t,v){e.exports=v.p+"assets/img/599d0f25gy1flvjypzj6sj20zz0m33zb.ce482998.jpg"},592:function(e,t,v){"use strict";v.r(t);var _=v(6),r=Object(_.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("这篇笔记旨在理解几个核心的git基本概念，如果对git了解较少，可以先看git基本教程。"),_("br"),e._v("\n这里推荐一个："),_("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000",target:"_blank",rel:"noopener noreferrer"}},[e._v("廖雪峰-Git教程"),_("OutboundLink")],1)]),e._v(" "),_("p",[e._v("本文内容稍显陈旧，可以参考这篇："),_("br"),e._v(" "),_("a",{attrs:{href:"https://www.cnblogs.com/jasongrass/p/10582449.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解Git - 一切皆commit - J.晒太阳的猫 - 博客园"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"commit-提交-与-branch-分支"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#commit-提交-与-branch-分支"}},[e._v("#")]),e._v(" commit(提交) 与 branch(分支)")]),e._v(" "),_("h3",{attrs:{id:"版本号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本号"}},[e._v("#")]),e._v(" 版本号")]),e._v(" "),_("p",[e._v("commit是git管理的基本单位，在有多个分支的情况下，这些commit就构成了一颗commit树。\n每个提交会有一个版本号（"),_("code",[e._v("commit id")]),e._v("），类似"),_("code",[e._v("3628164fb26d48395383f8f31179f24e0882e1e0")]),e._v(",即这个提交的命名，是用十六进制表示的一个SHA1计算出来的一个非常大的数字。")]),e._v(" "),_("blockquote",[_("p",[e._v("实际使用中，不必要写全这串字符，使用前面一部分，如前8位，git能唯一识别出来某个提交就可以了。"),_("br"),e._v("\n文中的"),_("code",[e._v("提交")]),e._v("二字，就是指一次"),_("code",[e._v("commit")]),e._v("，也就是一个版本，可以用"),_("code",[e._v("版本")]),e._v("二字代替，习惯使用提交这个说法了。")])]),e._v(" "),_("h3",{attrs:{id:"分支"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[e._v("#")]),e._v(" 分支")]),e._v(" "),_("p",[e._v("从形式上看，分支(branch)就是从树的叶子节点到跟节点的一条线（可能有分叉），那git中是如何表示这条线的呢？或者换个问法，git中的分支名，究竟是表示什么呢。")]),e._v(" "),_("p",[e._v("其实分支名，如"),_("code",[e._v("dev")]),e._v("表示的只是dev这个分支上最新的那次提交，或者说，"),_("code",[e._v("dev")]),e._v("这三个字母，这个字符串，就是dev分支上最新的那个提交的"),_("strong",[e._v("别名")]),e._v("，或者理解为那个最新提交的一个引用。")]),e._v(" "),_("blockquote",[_("p",[e._v("git中“并没有”分支，只有"),_("code",[e._v("commit")]),e._v("; 分支只是对某个特定"),_("code",[e._v("commit")]),e._v("的引用")])]),e._v(" "),_("p",[e._v("如下图所示，"),_("code",[e._v("dev")]),e._v("只是 commit-6 的一个引用，如果在 commit-6 的基础上，做了一次新的提交，则dev指向这次新的提交。每个提交（除了第一次提交）都会有一个或者两个父节点提交，如图中的 commit-4 ，就是一次合并提交，拥有两个父节点。")]),e._v(" "),_("p",[_("img",{attrs:{src:v(508),alt:""}})]),e._v(" "),_("h3",{attrs:{id:"head"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[e._v("#")]),e._v(" HEAD")]),e._v(" "),_("p",[e._v("git中用 "),_("code",[e._v("HEAD")]),e._v(" 表示当前分支的最新的那个提交，即如果在dev分支，则 "),_("code",[e._v("HEAD")]),e._v(" 表示(指向)的就是dev,也就是指向commit-6。"),_("code",[e._v("HEAD^")]),e._v(" 表示 "),_("code",[e._v("HEAD")]),e._v(" 的前一个提交，即 commit-5； "),_("code",[e._v("HEAD^^")]),e._v(" 表示 "),_("code",[e._v("HEAD")]),e._v(" 的前两个提交，前100个可以写成 "),_("code",[e._v("HEAD~100")]),e._v(" ，相应的，前一个也可以写成 "),_("code",[e._v("HEAD~1")]),e._v(" 。")]),e._v(" "),_("h2",{attrs:{id:"本地仓库-和-远程仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库-和-远程仓库"}},[e._v("#")]),e._v(" 本地仓库 和 远程仓库")]),e._v(" "),_("p",[e._v("常见的GIT "),_("code",[e._v("工作区")]),e._v(" 、 "),_("code",[e._v("暂存区")]),e._v(" 、 "),_("code",[e._v("本地仓库")]),e._v(" 和 "),_("code",[e._v("远程仓库")]),e._v(" 的示意图。"),_("br"),e._v(" "),_("img",{attrs:{src:v(509),alt:""}})]),e._v(" "),_("p",[e._v("看这幅图会理解git只有两个仓库，"),_("code",[e._v("本地仓库")]),e._v(" 和 "),_("code",[e._v("远程仓库")]),e._v("；但如果理解为三个仓库，才能更好地理解有些git命令或操作是什么回事。哪三个仓库？"),_("br"),e._v(" "),_("code",[e._v("本地工作仓库")]),e._v(" 、 "),_("code",[e._v("本地远程仓库")]),e._v(" 、 "),_("code",[e._v("远程仓库")]),_("br"),e._v("\n名字是随便取的，重点在于便于理解。看下面这幅图。"),_("br"),e._v(" "),_("img",{attrs:{src:v(510),alt:""}})]),e._v(" "),_("p",[e._v("这其中多了一个"),_("code",[e._v("Local Remote repository")]),e._v(", 即上面提到的"),_("code",[e._v("本地远程仓库")]),e._v("，这个仓库就是远程仓库在本地的一个拷贝，目的是为了和远程仓库保持一致。"),_("br"),e._v("\n常听到关于"),_("code",[e._v("pull")]),e._v("命令的解释就是，pull 是 fetch 和 merge 的结合，完成的实际上是先fetch，再merge。 如果没有"),_("code",[e._v("本地远程仓库")]),e._v("这个概念，其实不是特别好理解这句话。")]),e._v(" "),_("p",[_("code",[e._v("git fetch")]),e._v("做的其实是把"),_("code",[e._v("远程仓库")]),e._v("的更新全部拉取到"),_("code",[e._v("本地远程仓库")]),e._v("（注意，是全部，不只是当前分支）。而这里的merge，完整的写出来应该是这样（假设在dev分支）：")]),e._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* pull */")]),e._v("\ngit pull origin dev \n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* fetch + merge */")]),e._v("\ngit fetch \ngit merge origin"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("dev \n")])])]),_("p",[e._v("这里的"),_("code",[e._v("origin/dev")]),e._v("指的就是"),_("code",[e._v("本地远程仓库")]),e._v("中的dev分支，它刚刚通过fetch命令，从真正的远端仓库拉取到了最新的数据，然而，你自己的dev分支并没有更新，需要将"),_("code",[e._v("本地远程仓库")]),e._v("中的dev分支(名字是"),_("code",[e._v("origin/dev")]),e._v(")merge到本地的dev分支。 pull就是完成的上面两步。 所以pull之后，本地的dev就直接更新了，所以才感受不到origin/dev的存在。")]),e._v(" "),_("p",[e._v("理解了 "),_("code",[e._v("本地远程仓库")]),e._v(" ，可以方便地完成一些操作。如，现在正在 dev 分支，需要合并远端最新的 master 分支的代码，如何做？"),_("br"),e._v("\n之前的作法可能是这样：")]),e._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[e._v("git checkout master     "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 切换到 master 分支")]),e._v("\ngit pull origin master  "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 拉取远端代码到 master 分支")]),e._v("\ngit checkout dev        "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 切换回 dev 分支")]),e._v("\ngit merge master        "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 合并 master  分支")]),e._v("\n")])])]),_("p",[e._v("而实际上，不需要切换分支，这样就可以：")]),e._v(" "),_("div",{staticClass:"language-c extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[e._v("git fetch               "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 更新本地远端仓库")]),e._v("\ngit merge origin"),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("master "),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 从 本地远端仓库 合并 master 分支")]),e._v("\n")])])]),_("p",[e._v("需要注意的是，这里必须先使用 "),_("code",[e._v("git fetch")]),e._v(" 命令，直接使用 "),_("code",[e._v("origin/master")]),e._v(" 并不会让本地远端仓库自动去远端拉取最新的代码。")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("END")])])}),[],!1,null,null,null);t.default=r.exports}}]);