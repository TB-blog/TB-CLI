# TB-CLI [![npm package](https://img.shields.io/npm/v/tb-cli.svg)](https://www.npmjs.com/package/tb-cli)
[![NPM](https://nodei.co/npm/tb-cli.png?downloads=true&stars=true)](https://nodei.co/npm/tb-cli)
为 TB 提供的简单脚手架

## 环境准备

* 操作系统：支持 macOS，Linux，Windows
* 运行环境：建议选择 [LTS 版本](https://nodejs.org/zh-cn/) Node.js，最低要求 8.x

## 语言

[English](README.md)

## 链接

* [TB](https://github.com/TB-blog/TB)


## 安装 & 使用

### 安装

```shell
npm install tb-cli -g
```

### 使用

```shell
  Usage: tb [options] [command]

  Options:

    -V, --version       output the version number
    -h, --help          output usage information

  Commands:

    init|i              generate TB blog platform
    run|r               runing TB blog platform
    deploy|d [options]  build & starting TB blog platform
```
## 快速开始

```shell
// 配置详情请见下方
tb init
cd TB/
tb run
```
然后打开浏览器地址栏输入 http://127.0.0.1:2333 并访问。

## 配置详情

TB 基于 `Github API` 和 `Github issues`。在你开始之前，请 [创建一个新的仓库](https://github.com/new) 并且添加一些 Issues 作为你的文章，默认仓库名是 `blog`，当然也可以自行设置的名字。

如果你只有空仓库却并没有创建新的 Issues，在生成 TB 之后，也将有入口去新建 Issue。

### Token

首先请去生成个人 [token](https://github.com/settings/tokens/new)，token 是为了增加 `Github API` 的请求上限，请确保你的 token 勾选了以下内容:

* [x] repo
    * [x] repo:status
    * [x] repo_deployment
    * [x] public_repo
* [x] user
    * [x] read:user
    * [x] user:email

然后添加 token 描述并点击 `Generate token` 来获取你的个人 token。

### 评论模块

TB 的评论模块使用了 [gitalk](https://github.com/gitalk/gitalk)。更多配置详情请点击[这里](https://github.com/gitalk/gitalk)。

**注意:** *如果你不需要评论模块，请在生成时选择 `Use comment component? No`。*

## 部署

如果你已经进入到服务器中，可以很简单的打包并运行 TB，但是在打包运行之前，请确保服务器中已经安装 [node](https://nodejs.org/)，[git](https://git-scm.com/) 和 [pm2](https://pm2.keymetrics.io/)。

* 全局安装 [TB-CLI](https://github.com/TB-blog/TB-CLI)。

    ```shell
    npm install tb-cli -g
    ```

* 进入自行选定的目标文件夹。
* 生成 TB，就像在本地环境一样:

    ```shell
    tb init
    ```

* 进入 TB 文件夹:

    ```shell
    cd TB/
    ```

* 开始部署运行:

    ```shell
    tb deploy

    // 你也可以设置 pm2 服务名称，默认为 TB
    tb deploy --name <你设定的名称>
    ```

TB 将会监听在 2333 端口，配合 [pm2](https://pm2.keymetrics.io/) 持续运行。

## 贡献

如有任何的意见或建议，欢迎通过创建 Issue 或 Pull Request 的方式告知仓库管理员，请先阅读[贡献指南](CONTRIBUTING.md)。

## 证书

[MIT](LICENSE)
