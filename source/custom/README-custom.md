# 简介
为Hexo博客提供静态资源加速支持.
用户可以使用此repo作为template，新建自己的库，建议名称为`cdn`，下面给出具体引用方法
# 使用
引用最新release版本资源的链接格式如下:

**所以引用链接请全部使用小写**

- 小写字符jsdelivr可以自动转换，不用担心

建议引用格式:
```yaml
img1: https://cdn.jsdelivr.net/gh/user/repo@version/file
```

例如，
```yaml
img1: https://cdn.jsdelivr.net/gh/yj2cs/cdn@latest/img/cover/(0).jpg.webp
```

建议引用格式2:也可以使用相对路径方式引用
```yaml
cdn: https://cdn.jsdelivr.net/gh/yj2cs/cdn@latest
...
img1: /img/cover/(0).jpg.webp
```

# 其他引用选项
下面的引用格式都可以:
```yaml
# load any GitHub release, commit, or branch
# note: we recommend using npm for projects that support it
file1: https://cdn.jsdelivr.net/gh/user/repo@version/file
```

```yaml
# load jQuery v3.2.1
minjs: https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js
```

```yaml
# use a version range instead of a specific version
minjs: https://cdn.jsdelivr.net/gh/jquery/jquery@3.2/dist/jquery.min.js
minjs2: https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js
```

```yaml
# omit the version completely to get the latest one
# you should NOT use this in production
minjs: https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js
```

```yaml
# add ".min" to any JS/CSS file to get a minified version
# if one doesn't exist, we'll generate it for you
minjs: https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/src/core.min.js
```

```yaml
# add / at the end to get a directory listing
directory1: https://cdn.jsdelivr.net/gh/jquery/jquery/
```



