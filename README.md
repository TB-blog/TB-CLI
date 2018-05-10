<div align="center">
  <a href="#">
    <img width="80" src="http://ojiq40lzd.bkt.clouddn.com/logo-512.png" alt="LOGO">
  </a>
</div>
<br>
<div align="center">
  <a href="https://vuejs.org">
    <img src="http://forthebadge.com/images/badges/made-with-vue.svg">
  </a>
  <a href="https://t66y.com">
    <img src="http://forthebadge.com/images/badges/ages-18.svg">
  </a>
  <a href="http://ojiq40lzd.bkt.clouddn.com/love-qr.png">
    <img src="http://forthebadge.com/images/badges/built-with-love.svg">
  </a>
</div>

# TB-CLI

CLI tool for TB blog platform

## Links

* [TB](https://github.com/TB-blog/TB)


## Install & Usage

### Install

```shell
npm install tb-cli -g
```

### Usage

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
## Start
```shell
// config details please see following docs
tb init
cd TB/
tb run
```
Then open your browser and visit http://127.0.0.1:2333.

## Config
TB is based on `Github API` and `Github issues`. Before you starting, please [create a new respository](https://github.com/new) and add some issues for your blog articles, default respository name is `blog`, of course you can set your own.

If you only have empty respository and don't have issues yet, after generating TB, you will have an entry to create issues.
### Token

The first step is to generate your [token](https://github.com/settings/tokens/new), token is for Github API request validation, and please check following options:

* [x] repo
    * [x] repo:status
    * [x] repo_deployment
    * [x] public_repo
* [x] user
    * [x] read:user
    * [x] user:email

And add the token description and click `Generate token` to get your token.

### Comments
TB's comments component is using [gitalk](https://github.com/gitalk/gitalk). More config details please see [here](https://github.com/gitalk/gitalk).

**Attention:** *if you don't need comment function, please choose `Use comment component? No`.*

## Deploying
If you are already connected to your server, you can build & run TB in your server simply, but before deploying please make sure you already have [node](https://nodejs.org/), [git](https://git-scm.com/) and [pm2](https://pm2.keymetrics.io/):

* Install [TB-CLI](https://github.com/TB-blog/TB-CLI).

    ```shell
    npm install tb-cli -g
    ```

* Go to the target root folder.
* Generate TB like using it in your local environment:

    ```shell
    tb init
    ```

* Go to TB folder:

    ```shell
    cd TB/
    ```

* Start deploying:

    ```shell
    tb deploy

    // or you can set pm2 server name
    tb deploy --name <the name you set>
    ```

Then TB is listen to port 2333 in your server with [pm2](https://pm2.keymetrics.io/).

## Contributing
Welcome to contribute by creating issues or sending pull requests. See [Contributing Guide](CONTRIBUTING.md) for guidelines.

## License
TB-CLI is licensed under the MIT License. See the [LICENSE](LICENSE) file.
