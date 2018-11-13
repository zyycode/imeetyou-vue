![](/imeetyou-logo.png)

## 说明
> 如果你对本项目有兴趣，欢迎 start ，谢谢 😄

> 当然如果有建议可以直接提 issue 或者 PR 👍

> 开发环境 Window 10 nodejs v10.10.0 express v4.16.3 sqlite v3.25.2

> 服务器 阿里云 Centos_7_03_64 Nginx v1.14.0 pm2 v3.32

> 相关项目地址 [前端项目地址](https://github.com/zyycode/imeetyou-vue) [后端项目地址](https://github.com/zyycode/imeetyou-node)

## 技术栈
- 语言：HTML + CSS + ES5/6 + MySQL
- 前端：vue + vue-router + bootstrap + axios
- 后端：express + nginx + pm2
- 数据库：sqlite

## 功能
- [x] 用户登录
- [x] 用户注册
- [x] 验证码
- [x] 退出登录
- [x] 用户发帖
- [x] 用户评论
- [x] 用户删除帖子、评论

## 在线预览
**地址:** [https://bbs.zyycoder.com](https://bbs.zyycoder.com)

----
![](/code.png)

## 项目运行
因为本项目是前后端分离的，所以需要将后端项目一起下载到本地使用

```
git clone https://github.com/zyycode/imeetyou-vue.git
cd imeetyou-vue
npm install
npm run dev
```
> **注意：由于前后端存在跨域，所以浏览器需要在跨域模式下运行**

> Chrome 右键 -> 属性 -> 目标 后添加 `--disable-web-security --user-data-dir`

## license
![](https://badgen.net/github/license/micromatch/micromatch)