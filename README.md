# 夏晓婕的能力鱼

这是最终版网页的 GitHub Pages 上传包，包含墨镜鱼插画、六个可点击的能力部位，以及纪念馆和小红书主页入口。

## 上传和发布

1. 先在电脑上解压 ZIP 文件。
2. 在 GitHub 新建一个仓库，名称可以用 `sherry-fish`。若使用 GitHub Free，选择 Public 以启用 GitHub Pages。发布后，网页可以被拿到链接的人直接访问。
3. 把解压出来的 `index.html`、`styles.css`、`app.js` 和整个 `assets` 文件夹上传到仓库最外层，然后提交。包内的 README 和 `.nojekyll` 也可以一起上传。
4. 打开仓库的 **Settings → Pages**。
5. 在 **Build and deployment → Source** 中选择 **Deploy from a branch**。
6. 分支选择 **main**，文件夹选择 **/(root)**，点击 **Save**。
7. 等发布完成后，在 Pages 页面点击 **Visit site**，复制实际生成的网页地址，放进申请邮件。

`index.html` 需要直接位于仓库最外层，与 `app.js`、`styles.css` 和 `assets` 同级。上传的是解压后的文件和文件夹；直接上传 ZIP 本身不会发布成网页。

## 日后更新

- 文案和案例主要在 `app.js` 中。
- 首页固定文字、部位标签和默认内容在 `index.html` 中。
- 页面样式在 `styles.css` 中。
- 鱼的插画在 `assets/cool-fish-v1.png` 中。

更新文件并提交到 main 分支后，GitHub Pages 会重新发布。这个网页不需要安装依赖或运行编译命令。

## 官方说明

- 创建 GitHub Pages 网站：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- 设置发布来源：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

打包日期：2026-11-01。
