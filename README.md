
# La Blog-使用说明

npm install hexo-theme-next
npm audit fix

[toc]
- [YJ2CS](https://yj2cs.github.io/) ,欢迎你的到来~~

搭建好的博客脚手架，致力于让后端程序员开箱即用

- 本template可以直接fork使用，或者点击页面处`use this template`创建你自己的项目.
- 使用 [foam](https://github.com/foambubble/foam) 作为文档管理系统,foam是一个方便快捷的类markdown语法的，可视化的markdown文档管理系统，详细内容请查看他们的官方介绍
- 使用 [hexo](https://github.com/hexojs/hexo) 作为博客引擎，详细说明也请阅读他们的官方说明.
- 使用 [next主题](https://github.com/next-theme/hexo-theme-next) 作为默认主题,详细说明也请阅读他们的官方说明.


## 如何使用
安装->简易配置->在`/source/_post/`文件夹中写出随便一篇文章->本地部署->在线部署到GitHub pages

## 感谢
- Blog theme config Fork from 博客空间：<https://wugenqiang.github.io>

- theme power by iissnan/hexo-theme-next

## 安装与配置

## nvm切换到nodejs 12.19.0

nvm ls
nvm uninstall 12.19.0
nvm install 12.19.0
nvm use 12.19.0

## 安装 nrm

```cmd
npm i -g nrm
```

## nrm查看下载镜像源

```cmd
nrm ls
```

## nrm切换镜像源

```cmd
nrm use taobao
```

## 安装 npm-check

```cmd
npm i -g npm-check
```

## npm 安装所有依赖

```cmd
npm i
```

## 更换hexo的默认端口

可以每次都使用指定命令

```cmd
hexo s -p 5000 -debug
```

永久方法(推荐)：

在根目录_config.yml文件中加入下列配置：(推荐在最后一行)

```yaml
server:
  port: 5000
  compress: true
  header: true
```

## hexo初始化server

```cmd
hexo clean && hexo s -debug
```

成功启动 <http://localhost:5000> ，打开且无报错

这条报错可以忽略，其他报错则需要自行排除bug

```cmd
(node:11248) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
```

## 使用 npm-check 更新项目依赖

在项目根目录(本README所在目录)运行

```cmd
npm-check -u
```

**空格切换包是否更新，Control + C 取消更新，回车就是执行更新。**

## hexo常用命令

清理全部生成文件，重新初始化hexo,进入hexo的server

```cmd
hexo clean && hexo s -debug
```

*hexo clean* 解决一些报错,之后 *hexo g -d* 生成网页并且部署(部署到GitHub Pages)

```cmd
hexo clean && hexo g -d
```

直接生成网页并且部署(部署到GitHub Pages)

```cmd
hexo g -d
```

本地启动hexo server进行生成网页的调试

```cmd
hexo s -debug
```

# 依赖备忘

不需要用户手动安装下面选项，只是备忘

## 安装全部依赖

```cmd
npm i
```

## hexo-git-backup插件

```cmd
npm install hexo-git-backup
```

## hexo-admin后台管理插件

```cmd
npm install --save hexo-admin
```

### hexo-admin后台管理插件doc

[使用 hexo-admin 後台管理工具](https://ed521.github.io/2019/08/hexo-admin/)

[Hexo-Admin博客后端管理工具](https://thistgg.github.io/2017/03/23/Hexo-Admin%E5%8D%9A%E5%AE%A2%E5%90%8E%E7%AB%AF%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/)

## 一键发布 deploy

新建hexo-publish.bat

内容为

```cmd
hexo g -d
```

在本地服务器后台直接点击部署按钮(deploy)

在实际操作过程中,其实只是执行了hexo g -d命令

## 用户重置admin登录密码

在根目录中的_config.yml，删除以下内容:
![](README_images/9c0a6a7c.png)
只需删除：

```cmd
username:*********
password_hash:**********
secret:***********
```

## 修改permalink，可修改为短链接

安装插件：

```cmd
npm install hexo-abbrlink --save
```

在根目录_config.yml中修改permalink,我已经改好了，请自行搜索

```yaml
permalink: articles/:urlname_:abbrlink.html #:year/:month/:day/:title/
permalink_defaults:
#alg: crc32  # 算法：crc16(default) and crc32
#rep: hex    # 进制：dec(default) and hex
#短链接
abbrlink:
  alg: crc16   #算法： crc16(default) and crc32
  rep: hex   #进制： dec(default) and hex: dec #输出进制：十进制和十六进制，默认为10进制。丨dec为十进制，hex为十六进制

```

## 使用 Markdown-Toolbox

安装:

```cmd
pip install Markdown-Toolbox
```

启动命令:

```cmd
MarkdownToolbox
或
Markdown-Toolbox
```

启动失败修复命令：

```cmd
pip install Markdown-Toolbox --force-reinstall
```

# pip requirements.txt

## 第一种 适用于单虚拟环境的情况 pip freeze

pip freeze > requirements.txt

为什么只适用于单虚拟环境？因为这种方式，会将环境中的依赖包全都加入，如果使用的全局环境，则下载的所有包都会在里面，不管是不时当前项目依赖的，如下图

当然这种情况并不是我们想要的，当我们使用的是全局环境时，可以使用第二种方法。

## 第二种 (推荐) 使用pipreqs

github地址为：github.com/bndr/pipreq…

## 安装

pip install pipreqs

## 在当前目录生成

pipreqs . --encoding=utf8 --force

注意--encoding=utf8为使用utf8编码，不然可能会报UnicodeDecodeError: 'gbk' codec can't decode byte 0xae in position 406: illegal multibyte sequence 的错误。

--force强制执行，当 生成目录下的requirements.txt存在时覆盖。

可以看见我依赖的只有这些啦

## 使用requirements.txt安装依赖的方式

pip install -r requirements.txt

# 一行命令更新所有 npm 依赖包

npm 包的更新速度很快，为了将项目或者全局依赖更新到最新版本。传统的做法是一个一个更新，比如更新 react 到最新版本，命令如下：

```cmd
# npm
npm i --save react@latest
# yarn
yarn add react@latest
```

yarn 是 facebook 发明的新一代 js 包管理器，支持离线使用。这是 npm 与 yarn 的 命令对照。 但是，这种做法相当耗时。有没有更简单的方法呢？

答案是使用 npm-check 或者 yarn。两者都需要全局安装。

```cmd
npm i -g yarn
# or
npm i -g npm-check
```

## 使用 npm-check 更新项目依赖

在项目根目录(本README所在目录)运行

```cmd
npm-check -u
```

输出如下：

```cmd
? Choose which packages to update. (Press <space> to select)

 Update package.json to match version installed.
❯◯ chalk     ^1.1.3   ❯  2.4.2   https://github.com/chalk/chalk#readme
 ◯ cheerio   ^0.22.0  ❯  0.22.0  https://github.com/cheeriojs/cheerio#readme
 ◯ debug     ^2.3.3   ❯  4.1.1   https://github.com/visionmedia/debug#readme
 ◯ log4js    ^1.0.1   ❯  4.1.0   https://log4js-node.github.io/log4js-node/
 ◯ mustache  ^2.3.0   ❯  3.0.1   https://github.com/janl/mustache.js
 ◯ request   2.79.0   ❯  2.88.0  https://github.com/request/request#readme
 ◯ unescape  ^0.2.0   ❯  1.0.1   https://github.com/jonschlinkert/unescape
 ◯ yargs     ^6.4.0   ❯  13.2.2  https://yargs.js.org/

 Space to select. Enter to start upgrading. Control-C to cancel.

```

**空格切换包是否更新，Control + C 取消更新，回车就是执行更新。**

## 使用 yarn 更新项目依赖

在项目根目录运行

yarn upgrade-interactive  --latest
输出如下：

```cmd
yarn upgrade-interactive v1.15.2
info Color legend :
 "<red>"    : Major Update backward-incompatible updates
 "<yellow>" : Minor Update backward-compatible features
 "<green>"  : Patch Update backward-compatible bug fixes
? Choose which packages to update. (Press <space> to select, <a> to toggle all,
<i> to invert selection)
 dependencies
   name      range   from       to          url
❯◯ chalk     latest  1.1.3   ❯  2.4.2       https://github.com/chalk/chalk#readm
e
 ◯ cheerio   latest  0.22.0  ❯  1.0.0-rc.3  https://github.com/cheeriojs/cheerio
#readme
 ◯ debug     latest  2.6.9   ❯  4.1.1       https://github.com/visionmedia/debug
#readme
 ◯ log4js    latest  1.1.1   ❯  4.1.0       https://log4js-node.github.io/log4js
-node/
 ◯ mustache  latest  2.3.2   ❯  3.0.1       https://github.com/janl/mustache.js
 ◯ request   latest  2.79.0  ❯  2.88.0      https://github.com/request/request#r
eadme
 ◯ unescape  latest  0.2.0   ❯  1.0.1       https://github.com/jonschlinkert/une
scape
 ◯ yargs     latest  6.6.0   ❯  13.2.2      https://yargs.js.org/
```

yarn 提供了全选切换功能，就是按键 A，空格切换包是否更新，Control + C 取消更新，回车就是执行更新。

yarn 的更新命令太长了，谁记得住，这种时候，请合理使用命令行工具的帮助，比如运行 yarn help。

更新命令对照表
更新全局依赖同上

```
说明 yarn npm-check
更新项目依赖，没有交互 yarn upgrade --latest npm-check -y
更新项目依赖，有交互 yarn upgrade-interactive --latest npm-check -u
更新全局依赖，没有交互 yarn global upgrade --latest npm-check -g -y
更新全局依赖，有交互 yarn global upgrade-interactive --latest npm-check -g -u

```

## 检测原理

yarn 是根据 yarn.lock 文件来检测版本是否是最新的，所以项目是使用 npm 安装依赖包，更新前要运行 yarn install 一下。

npm-check 是检测 package.json 文件，项目存在 node_modules 文件夹即可更新。

## 更新提醒

没有交互就是将依赖包直接更新到最新版本，推荐使用交互式更新，会有更新的警告信息。

最新的依赖包，API 可能发生重大改变。为了顺利更新，更新前请 git commit 一下，更新失败了也能顺利回退。

# 不推荐使用 cnpm

为了加快安装依赖的安装速度，可能被同事安利 cnpm，但是这样会导致包的依赖安装不正常，项目无法运行。

更好的做法是使用 nrm 切换下载源。

平时使用 yarn 装包，npm 运行脚本。

## 安装 nrm

```cmd
npm i -g nrm
```

## nrm查看下载镜像源

```cmd
nrm ls
```

输出如下

```cmd
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

## nrm切换镜像源

```cmd
nrm use taobao
```

装包命令不变，比如安装 react 。

```cmd
# npm
npm i --save react
# yarn
yarn add react
```

体验飞一般的装包速度，再也不是装包一小时，码代码五分钟。

文章作者 Steve Xu

上次更新 2019-04-21 12:55

许可协议 MIT

## 重新安装node依赖

linux中:

```cmd
rm -rf node_modules/ && npm i
```

windows中:
删除node_modules文件夹并执行
npm i

## 更新npm依赖

执行

```cmd
npm update
```

它会更新丢失的软件包，并检查是否可以使用安装的较新版本的软件包。

# 找到开源的文章源文件

在 {project_dir}/source/_posts/,文件在这目录

# git 远程仓库设置

git config http.sslVerify "false"

git config --global http.postBuffer 524288000

524288000代表B，524288000B也就是500MB。这个值得大小，可以根据项目酌情设置。

# sakuraplus theme

npm i

## 已经安装

### 代码高亮

 hexo-prism-plugin已经卸载

尝试使用自带highlight

### 搜索

本主题中还使用到了 [hexo-generator-json-content](https://www.npmjs.com/package/hexo-generator-json-content) 的 Hexo 插件来做内容搜索，安装命令如下：

```bash
npm install hexo-generator-json-content --save
```

### 文章字数统计插件（建议安装）

如果你想要在文章中显示文章字数、阅读时长信息，可以安装 [hexo-wordcount](https://github.com/willin/hexo-wordcount)插件。

安装命令如下：

```bash
npm i --save hexo-wordcount
```

### 添加emoji表情支持（可选的）

已经使用 markdown-it-emoji

### 添加 RSS 订阅支持（可选的）

本主题中还使用到了 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) 的 Hexo 插件来做 `RSS`，安装命令如下：

```bash
npm install hexo-generator-feed --save
```

在 Hexo **根目录**下的 `_config.yml` 文件中，新增以下的配置项：

```yaml
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
```

执行 `hexo clean && hexo g` 重新生成博客文件，然后在 `public` 文件夹中即可看到 `atom.xml` 文件，说明你已经安装成功了。

# next与sakuraplus主题切换

配置我写好了，注意在根目录的_config.yml中

```yaml
highlight:
  #enable: true #next->true
  enable: false #sakura->false
  line_number: true
  auto_detect: false
  tab_replace:
```

next,enable=true

sakura,enable=false
