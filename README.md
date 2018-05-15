# TB-CLI [![npm package](https://img.shields.io/npm/v/tb-cli.svg)](https://www.npmjs.com/package/tb-cli)
[![NPM](https://nodei.co/npm/tb-cli.png?downloads=true&stars=true)](https://nodei.co/npm/tb-cli)

A simple CLI for scaffolding TB.

## Prerequisites

* Operating System: Linux, OS X or Windows.
* Node.js Runtime: 8.x or newer; it is recommended that you use [LTS Releases](https://nodejs.org).

## Language

[中文](README.zh-CN.md)

## Links

* [TB](https://github.com/TB-blog/TB)


## Install & Usage

### Install

```shell
npm install tb-cli -g
```

### Usage

```shell
  Usage: tb <command> [options]

  Options:

    -V, --version  output the version number
    -h, --help     output usage information

  Commands:

    init           generate a new project from TB template
    theme          list available official themes
    help [cmd]     display help for [cmd]
```
## Start
```shell
// config details please see following docs
tb init [project-name]
cd [project-name]
npm install // or if using yarn: yarn
```
Then open your browser and visit http://127.0.0.1:2333.

## Config details

TB is based on `Github API` and `Github issues`. Before your starting, please [create a new respository](https://github.com/new) and add some issues for your blog articles, default respository name is `blog`, of course you can set your own.

If you only have empty respository and don't have issues yet, after generating TB, you will have an entry to create issues.

### Token

The first step is to generate your [token](https://github.com/settings/tokens/new), which is for Github API request validation, and please check following options:

* [x] repo
    * [x] repo:status
    * [x] repo_deployment
    * [x] public_repo
* [x] user
    * [x] read:user
    * [x] user:email

And add the token description and click `Generate token` to get your token.

## Deploying

If you are already connected to your server, you can build & run TB in your server simply, but before deploying please make sure you already have [node](https://nodejs.org/) and [git](https://git-scm.com/) :

* Global install [TB-CLI](https://github.com/TB-blog/TB-CLI).

    ```shell
    npm install tb-cli -g
    ```

* Go to the target root folder.
* Generate TB like using it in your local environment:

    ```shell
    tb init [project-name]
    ```

* Go to your project folder:

    ```shell
    cd [project-name]
    npm install --production // if using yarn: yarn install --production
    ```

* Start deploying(using [pm2](https://pm2.keymetrics.io/)):

    ```shell
    pm2 start npm --name 'project-name' -- start
    ```

Then TB is listen to port `2333` in your server with [pm2](https://pm2.keymetrics.io/).

## Themes

you can run `tb theme` to check official themes.

## Contributing

Welcome to contribute by creating issues or sending pull requests. See [Contributing Guide](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE)
