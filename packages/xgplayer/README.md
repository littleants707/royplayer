<div align="center">
    <img src="https://raw.githubusercontent.com/littleants707/royplayer/master/royplayer.png" width="384" height="96">
</div>
<div align="center">
    <a href="https://www.npmjs.com/package/royplayer" target="_blank">
        <img src="https://img.shields.io/npm/v/royplayer.svg" alt="npm">
    </a>
    <a href="https://www.npmjs.com/package/royplayer">
        <img src="https://img.shields.io/npm/dm/xgplaer.svg" alg="download">
    </a>
    <a href="https://www.npmjs.com/package/royplayer" target="_blank">
        <img src="https://img.shields.io/npm/l/royplayer.svg" alt="license">
    </a>
    <a href="http://commitizen.github.io/cz-cli/">
        <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="commitizen">
    </a>
</div>


### Introduction

royplayer is a web video player library. it has designed a separate, detachable UI component based on the principle that everything is componentized. More importantly, it is not only flexible in the UI layer, but also bold in its functionality: it gets rid of video loading, buffering, and format support for video dependence. Especially on mp4
it can be staged loading for that does not support streaming mp4. This means seamless switching with clarity, load control, and video savings. It also integrates on-demand and live support for FLV, HLS, and dash. [Document](http://h5player.littleants707.com/)

### Start

1. Install

    ```
    $ npm install royplayer
    ```

2. Usage

    Step 1:

    ```html
    <div id="vs"></div>
    ```
    Step 2:

    ```js
    import Player from 'royplayer';

    const player = new Player({
        id: 'vs',
        url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/royplayer-demo.mp4'
    })
    ```

    This is the easiest way to configure the player,then it runs with video. For more advanced content, see the plug-in section or documentation. [more config](http://h5player.littleants707.com/config.html)




### Plugins

royplayer provides more plugins, plugins are divided into two categories: one is self-starting, and another inherits the player's core class named royplayer. In principle, the officially provided plug-ins are self-starting and the packaged third-party libraries are inherited. Some feature plug-ins themselves can provide a downgrade scenario that suggests a self-start approach, or an inheritance approach if not. The player supports custom plugins for more content viewing [plugins](http://h5player.littleants707.com/)

The following is how to use a self-starting plug-in：

```js
import Player from 'royplayer';
import 'xgplyaer-mp4';

const player = new Player({
    id: 'video',
    url: '//abc.com/test.mp4'
})
```

<code>royplayer-mp4</code>plugin is self-starting, It loads mp4 video itself, parses mp4 format, implements custom loading, buffering, seamless switching, and so on. it will automatically downgrade devices that do not support [MSE](https://www.w3.org/TR/media-source/). [details](http://h5player.littleants707.com/plugins/#royplayer-mp4)



### Mobile Support

royplayer supports mobile terminal, but android device brand and system are numerous, there are much compatibility problems, the player provides whitelist mechanism to ensure the perfect operation in mobile terminal. [whitelist](http://h5player.littleants707.com/config/#%E7%99%BD%E5%90%8D%E5%8D%95)



### Dev

For debugging, we provide the example video resource which size is large in github. You can clone the whole git repository which includes codes and example videos with 'git clone --recurse-submodules -j8'. With 'git clone' you will pull only codes of royplayer and its plugins.

```
$ git clone --recurse-submodules -j8 git@github.com:littleants707/royplayer.git # OR git clone git@github.com:littleants707/royplayer.git
$ cd royplayer
$ npm install
$ npm run dev
```

please visit [http://localhost:9090/examples/index.html](http://localhost:9090/examples/index.html)


### License

[MIT](http://opensource.org/licenses/MIT)
