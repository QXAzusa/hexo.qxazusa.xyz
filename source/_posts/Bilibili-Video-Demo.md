---
title: Bilibili Video
date: 2021-07-13 16:53:20
tags: Hexo
cover: https://static.qxazusa.xyz/public/image/cover/4.png
description: 实现了在各种平台上Bilibili播放窗口的自适应功能
---
<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?cid=323407284&aid=247534745&page=1&as_wide=1&high_quality=1&danmaku=0" frameborder="no" scrolling="no"></iframe>
</div>
实现了在各种平台上播放窗口的自适应功能

## 实现

### 源码

```html
<div style="position: relative; padding: 30% 45%;">

<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="https://player.bilibili.com/player.html?cid=323407284&aid=247534745&page=1&as_wide=1&high_quality=1&danmaku=0" frameborder="no" scrolling="no"></iframe>

</div>
```

### 例子：

这是从bilibili视频分享嵌入代码复制下来的内容<img src="https://static.qxazusa.xyz/blog/2021-07-15 235713.webp" />
<div>
```html
<iframe src="//player.bilibili.com/player.html?aid=974165707&bvid=BV1t44y127ad&cid=370527205&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```
</div>
按照其中的内容修改源码的中的aid的值为974165707
