# deprecated-configure-file

## plugin

```yaml
#- pdf-export:
#    verbose: false #WeasyPrint debug messages
#    media_type: print
#    combined: true #合并所有页面到一个pdf
#    combined_output_path: pdf/combined.pdf #导出路径
#    enabled_if_env: ENABLE_PDF_EXPORT #开启导出功能

#- with-pdf:
#    #cover_title:
#    cover_subtitle: 帮助你学习高级程序设计语言
#    toc_level: 3
#    excludes_children:
#    - 'releases/主页/:upgrading'
#    #exclude_pages:
#    #  - 'bugs/'
#    #  - 'appendix/contribute/'
#    # 内嵌视频相关
#    #convert_iframe:
#    #  - src: https://streamable.com/e/lz4me5
#    #    img: https://cdn-cf-east.streamable.com/image/lz4me5-screenshot147626.jpg
#    two_columns_level: 3
#    render_js: true
##    headless_chrome_path: google-chrome
#    output_path: pdf/document.pdf
#    #debug_html: true
#    verbose: false
    #show_anchors: true

# 添加mkdocs导出pdf支持
# GTK+3,https://weasyprint.readthedocs.io/en/stable/install.html#windows
# Uniconverter-2.0rc4-win64,https://downloads.sk1project.net/uniconvertor/2.0rc4/uniconvertor-2.0rc4-win64_headless.msi
# then,添加系统变量Patn
# C:\Program Files\GTK3-Runtime Win64\bin
# C:\Program Files\GTK3-Runtime Win64\lib
# C:\Program Files\UniConvertor-2.0rc4\
# C:\Program Files\UniConvertor-2.0rc4\dlls
# C:\Program Files\UniConvertor-2.0rc4\libs

```

## requirements

```txt
# mkdocs-material-extensions>=1.0
```

## Direct dependencies

mkdocs>=1.1.2
Pygments>=2.7.2
markdown>=3.3.3

## foam templete

mkdocs-material>=6.1.5
mkdocs-roamlinks-plugin>=0.1.3
mkdocs-exclude>=1.0.2
mkdocs-rss-plugin>=0.9.0
mkdocs-minify-plugin>=0.3.0


npm i shelljs